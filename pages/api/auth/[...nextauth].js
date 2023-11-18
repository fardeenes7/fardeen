import NextAUth from "next-auth";
import Githubprovider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        Githubprovider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
    ],
};

export const handler = NextAUth(authOptions);

export default handler;

export { handler as GET, handler as POST };
