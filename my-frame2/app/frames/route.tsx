import { Button } from 'frames.js/next';
import { frames } from "./frames";
 
const handler = frames(async (ctx) => {
  let state = ctx.state;
  
 
  console.log("ctx.searchParams", ctx.pressedButton)

  switch (
    ctx.searchParams.action 
  ) {
    case "increment": 
      state = { ...state, count: state.count + 1 };
      break;
    case "decrement": 
      state = { ...state, count: state.count - 1 };
      break;
  }
 
  return {
    image: "https://picsum.photos/seed/frames.js/1146/600",
    buttons: [
      <Button action="post" target={{ query: { action: "increment" } }}>Increment</Button>, 
      <Button action="post" target={{ query: { action: "decrement" } }}>Decrement</Button>
    ],
    state,
  };
});
 
export const GET = handler;
export const POST = handler;