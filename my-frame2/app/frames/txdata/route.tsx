import { transaction } from "frames.js/core";
import { Abi, createPublicClient, encodeFunctionData, getContract, http } from "viem";
import { optimismSepolia } from "viem/chains";
import { frames } from "../frames";
import { myTokenABI } from "./contracts/myToken";
 
/**
 * Handles the POST request for the route.
 * @param {Context} ctx - The context object containing the request information.
 * @returns {Promise<any>} - A promise that resolves to the transaction result.
 * @throws {Error} - If the frame message is invalid.
 */
export const POST = frames(async (ctx) => {
  if (!ctx?.message) {
    throw new Error("Invalid frame message");
  }

  const userAddress = ctx.message.connectedAddress;
  
  console.log("userAddress", userAddress)

  // create calldata
  const calldata = encodeFunctionData({
    abi: myTokenABI,
    functionName: "mint",
    args: [userAddress, 100] as const,
  });

  const publicClient = createPublicClient({
    chain: optimismSepolia,
    transport: http(),
  });

  const MYTOKEN_ADDRESS = "0xe65C3cFDc4f79e36343cA2e79f17Ce8338095F4c";

  const myToken = getContract({
    address: MYTOKEN_ADDRESS,
    abi: myTokenABI,
    client: publicClient,
  });

  return transaction({
    chainId: "eip155:11155420", // OP Sepolia
    method: "eth_sendTransaction", // sendTransaction
    params: {
      abi: myTokenABI as Abi,
      to: MYTOKEN_ADDRESS,
      data: calldata,
      value: "0"
    },
  });
});