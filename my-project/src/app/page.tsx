import { Button } from "frames.js/core";
import { fetchMetadata } from "frames.js/next";

 
export async function generateMetadata() {
  return {
    title: "My Page",
    // provide a full URL to your /frames endpoint
    other: await fetchMetadata(
      new URL(
        "/frames",
        process.env.VERCEL_URL
          ? `https://{process.env.VERCEL_URL}`
          : "http://localhost:3000"
      )
    ),
  };
}
/**
 * Page Component
 * @returns 
 */
export default function Page() {
  return (
    <div>
      <div>My existing page</div>
      <Button 
        action="post_redirect"
        target={{ 
          query: { foo: "bar" }, 
          pathname: "/farmes" 
        }}
      >
        Click me
      </Button>
      
    </div>
  );
}