/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";
 
export const POST = frames(async () => {
  return {
    image: <div tw="flex">Route 2</div>,
    buttons: [
      <Button action="post" target="/route1">
        Go to route 1
      </Button>,
      <Button action="post" target="/">
        Go to frames
      </Button>,
    ],
  };
});