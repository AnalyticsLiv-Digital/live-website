import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import AdminUser from "../models/AdminUser";
import mongoose from "mongoose";

/**
 * Middleware to check if user has permission for a specific module
 * @param {string} requiredPermission - The permission required (e.g., 'blogs', 'jobs')
 * @returns {function} - Express-like middleware function
 */
export const checkPermission = (requiredPermission) => async (req, res, handler) => {
  // Get session
  const session = await getServerSession(req, res, authOptions);

  if (!session || !session.user) {
    return res.status(401).json({ error: "Unauthorized. Please sign in." });
  }

  // Connect to DB if not connected
  if (mongoose.connections[0].readyState !== 1) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  // Get user from database
  const user = await AdminUser.findOne({ email: session.user.email });

  if (!user) {
    return res.status(403).json({ error: "Access denied. User not found in system." });
  }

  // Super admin has access to everything
  if (user.isSuperAdmin) {
    return handler(req, res);
  }

  // Check if user has required permission
  if (!user.permissions.includes(requiredPermission)) {
    return res.status(403).json({
      error: `Access denied. You don't have permission to access ${requiredPermission}.`
    });
  }

  // User has permission, proceed
  return handler(req, res);
};

/**
 * Middleware to check if user is super admin
 */
export const checkSuperAdmin = async (req, res, handler) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session || !session.user) {
    return res.status(401).json({ error: "Unauthorized. Please sign in." });
  }

  // Connect to DB if not connected
  if (mongoose.connections[0].readyState !== 1) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  const user = await AdminUser.findOne({ email: session.user.email });

  if (!user || !user.isSuperAdmin) {
    return res.status(403).json({ error: "Access denied. Super admin only." });
  }

  return handler(req, res);
};

export default checkPermission;
