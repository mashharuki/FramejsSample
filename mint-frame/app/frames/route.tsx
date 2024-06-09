/* eslint-disable react/jsx-key */
import { getTokenUrl } from 'frames.js';
import { Button } from 'frames.js/next';
import { CHAIN_ID, MYNFT_COONTRACT_ADDRESS } from '../utils';
import { frames } from "./frames";
 
/**
 * Handles the frame request and returns the frame data.
 * @param {object} ctx - The context object containing the request data.
 * @returns {object} - The frame data object.
 */
const handler = frames(async (ctx) => {
  if (!ctx) {
    throw new Error("Invalid frame ctx");
  }
 
  return {
    image: "https://bafybeib5qpd75kzjzkk4iko5ul72lm2yxhkdximeutfafkw3x2jqotfldi.ipfs.w3s.link/UNCHAIN_logo.png",
    buttons: [
      <Button action="link" target={`https://testnets.opensea.io/collection/unidentified-contract-fe1625d2-95bf-4cff-bc65-756c`}>
        View NFT
      </Button>,
      <Button action="tx" target="/frames/txdata" post_url="/frames">
        Mint NFT
      </Button>,
      <Button
      action="mint"
        target={getTokenUrl({
          address: MYNFT_COONTRACT_ADDRESS,
          chainId: CHAIN_ID,
          tokenId: "1",
        })}
      >
        Mint
      </Button>
    ]
  };
});
 
export const GET = handler;
export const POST = handler;