export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/adauga-pacient", "/your-pacients", "/add-programare", "/home"],
  //matcher: ["/((?!register|api|login).*)"],
};
