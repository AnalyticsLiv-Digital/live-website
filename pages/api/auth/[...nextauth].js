import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions = {
 providers: [
  GoogleProvider({
    clientId: '216399000123-hf2ggflv2l0kll58a0nm57ipoq1eas1b.apps.googleusercontent.com',
    clientSecret: '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'
  }),
 ],
 session: {
  strategy: 'jwt',
 },
};
export default NextAuth(authOptions);