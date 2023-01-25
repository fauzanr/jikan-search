export { default } from "next-auth/middleware";
// otherwise your app would require authentication for all
export const config = { matcher: ["/", "/anime/:id*"] };
