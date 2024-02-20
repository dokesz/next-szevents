import User from "@/models/user";
import { connectToDatabase } from "@/utils/database";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });

      session.user.id = sessionUser._id?.toString();

      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDatabase();

        const userExists = await User.findOne({ email: profile.email });

        if (!userExists) {
          await User.create({
            name: profile.name,
            email: profile.email,
            profilePicture: profile.picture,
            isAdmin: false,
          })
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
})

export { handler as GET, handler as POST };