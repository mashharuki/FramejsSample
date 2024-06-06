/* eslint-disable react/jsx-key */
import { Button } from 'frames.js/next';
import { frames } from "./frames";
 
/**
 * Handles the frame request and returns the frame data.
 * @param {object} ctx - The context object containing the request data.
 * @returns {object} - The frame data object.
 */
const handler = frames(async (ctx) => {
 
  const count = ctx.message
    ? ctx.searchParams.op === "+"
      ? ctx.state.count + 1
      : ctx.state.count - 1
    : ctx.state.count;

    console.log("count", count)

 
  return {
    // image: "https://picsum.photos/seed/frames.js/1146/600",
    image: (
      <div tw="flex flex-col">
        <div tw="flex">{`The user's FID is ${ctx.message?.requesterFid}`}</div>
        <div tw="flex">{`Your input is ${ctx.message?.inputText}`}</div>
        <div tw="flex">Counter {count}</div>
      </div>
    ),
    textInput: "put some text here",
    buttons: [
      <Button action="post" target={{ pathname: "/frames", query: { op: "+" } }}>
        Increment
      </Button>,
      <Button action="post" target={{ pathname: "/frames", query: { op: "-" } }}>
        Decrement
      </Button>,
      <Button action="link" target={"https://unchain-tech.github.io/UNCHAIN-projects-feature/"}>
        External
      </Button>,
      <Button action="tx" target="/frames/txdata" post_url="/frames">
        Buy a unit
      </Button>,
    ],
    state: { count: count },
  };
});
 
export const GET = handler;
export const POST = handler;