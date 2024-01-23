import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions = {
 providers: [
  GoogleProvider({
    clientId: process.env.googleclientId,
    clientSecret: process.env.googleclientSecret
  }),
 ],
 session: {
  strategy: 'jwt',
 },
};
export default NextAuth(authOptions);