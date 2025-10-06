import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import AdminUser from '../../../models/AdminUser';
import mongoose from 'mongoose';

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
 jwt:{
  secret: process.env.NEXTAUTH_SECRET
 },
 site: process.env.NEXTAUTH_URL,
 callbacks: {
  async signIn({ user, account, profile }) {
    // Connect to DB
    if (mongoose.connections[0].readyState !== 1) {
      await mongoose.connect(process.env.MONGO_URI);
    }

    let adminUser = await AdminUser.findOne({ email: user.email });

    // Auto-create superadmin if it's the designated email
    if (!adminUser && user.email === 'data.analytics@analyticsliv.com') {
      adminUser = new AdminUser({
        email: user.email,
        permissions: ['blogs', 'casestudies', 'jobs', 'leads', 'ytplaylist', 'upwork-jobs'],
        isSuperAdmin: true
      });
      await adminUser.save();
    }

    // Only allow sign in if user exists in AdminUser collection
    if (!adminUser) {
      return false;
    }

    return true;
  },
  async jwt({ token, user }) {
    if (user) {
      // Connect to DB
      if (mongoose.connections[0].readyState !== 1) {
        await mongoose.connect(process.env.MONGO_URI);
      }

      const adminUser = await AdminUser.findOne({ email: user.email });
      if (adminUser) {
        token.permissions = adminUser.permissions;
        token.isSuperAdmin = adminUser.isSuperAdmin;
      }
    }
    return token;
  },
  async session({ session, token }) {
    if (token) {
      session.user.permissions = token.permissions || [];
      session.user.isSuperAdmin = token.isSuperAdmin || false;
    }
    return session;
  }
 }
};
export default NextAuth(authOptions);