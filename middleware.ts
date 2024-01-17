export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/adauga-pacient", "/your-pacients", "/add-programare", "/home"],
  //matcher: ["/((?!register|api|login).*)"],
};
//arn:aws:iam::538122504114:role/bitwize-stoma
//arn:aws:iam::538122504114:oidc-provider/token.actions.githubusercontent.com
