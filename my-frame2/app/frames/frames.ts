import { createFrames } from "frames.js/next";
 
export type State = {
  count: number;
};
 
/**
 * createGrames method
 */
export const frames = createFrames<State>({
  initialState: {
    count: 0,
  },
  stateSigningSecret: "my-secret-key", 
});