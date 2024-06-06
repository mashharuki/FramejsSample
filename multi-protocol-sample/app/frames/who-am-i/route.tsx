/* eslint-disable react/jsx-key */
import { LensClient, production } from "@lens-protocol/client";
import { Button } from "frames.js/next";
import { frames } from "../frames";

export const POST = frames(async (ctx) => {
  let walletAddress: string | undefined =
    // farcaster
    ctx.message?.requesterCustodyAddress ||
    // xmtp
    ctx.message?.verifiedWalletAddress;

  if (ctx.clientProtocol?.id === "lens") {
    const lensClient = new LensClient({ environment: production });

    const profile = await lensClient.profile.fetch({
      forProfileId: ctx.message?.profileId,
    });

    walletAddress = profile?.ownedBy.address;
  }

  return {
    image: (
      <div tw="flex p-5">
        You are {walletAddress} from {ctx.clientProtocol?.id}
      </div>
    ),
    buttons: [
      <Button target={"/frames"} action="post">
        Back
      </Button>,
    ],
  };
});