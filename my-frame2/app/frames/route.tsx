/* eslint-disable react/jsx-key */
import { getTokenUrl } from 'frames.js';
import { Button } from 'frames.js/next';
import { frames } from "./frames";
 
const handler = frames(async (ctx) => {
 
  const clickedButtonIndex = ctx.pressedButton;
  const currentState = ctx.state;
  
  console.log("currentState", currentState)
  console.log("ctx.pressedButton", ctx.pressedButton?.action)
  console.log("ctx.message", ctx)

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
      <Button
        action="mint"
        target={getTokenUrl({
          address: "0x060f3edd18c47f59bd23d063bbeb9aa4a8fec6df",
          tokenId: "123",
          chainId: 7777777,
        })}
      >
        Mint
      </Button>,
    ],
    state: { count: count },
  };
});
 
export const GET = handler;
export const POST = handler;