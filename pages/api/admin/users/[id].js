import AdminUser from "../../../../models/AdminUser";
import connectDb from "../../../../middleware/mongoose";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";

const handler = async (req, res) => {
    const { id } = req.query;

    // Get session to check if user is superadmin
    const session = await getServerSession(req, res, authOptions);

    if (!session || !session.user) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    // Check if user is superadmin
    const currentUser = await AdminUser.findOne({ email: session.user.email });
    if (!currentUser || !currentUser.isSuperAdmin) {
        return res.status(403).json({ error: "Access denied. Super admin only." });
    }

    if (req.method === "PUT") {
        try {
            const { email, permissions } = req.body;

            const user = await AdminUser.findById(id);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            // Prevent editing superadmin status
            if (user.isSuperAdmin) {
                return res.status(400).json({ error: "Cannot modify super admin" });
            }

            if (email) {
                user.email = email.toLowerCase();
            }
            if (permissions !== undefined) {
                user.permissions = permissions;
            }

            await user.save();
            return res.status(200).json({ success: true, user });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    } else if (req.method === "DELETE") {
        try {
            const user = await AdminUser.findById(id);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            // Prevent deleting superadmin
            if (user.isSuperAdmin) {
                return res.status(400).json({ error: "Cannot delete super admin" });
            }

            await AdminUser.findByIdAndDelete(id);
            return res.status(200).json({ success: true, message: "User deleted" });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    } else {
        return res.status(405).json({ error: "Method not allowed" });
    }
};

export default connectDb(handler);
