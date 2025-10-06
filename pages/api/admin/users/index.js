import AdminUser from "../../../../models/AdminUser";
import connectDb from "../../../../middleware/mongoose";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";

const handler = async (req, res) => {
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

    if (req.method === "GET") {
        try {
            const users = await AdminUser.find().sort({ createdAt: -1 });
            return res.status(200).json({ users });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    } else if (req.method === "POST") {
        try {
            const { email, permissions } = req.body;

            if (!email) {
                return res.status(400).json({ error: "Email is required" });
            }

            // Check if user already exists
            const existingUser = await AdminUser.findOne({ email: email.toLowerCase() });
            if (existingUser) {
                return res.status(400).json({ error: "User already exists" });
            }

            const newUser = new AdminUser({
                email: email.toLowerCase(),
                permissions: permissions || [],
                isSuperAdmin: false
            });

            await newUser.save();
            return res.status(201).json({ success: true, user: newUser });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    } else {
        return res.status(405).json({ error: "Method not allowed" });
    }
};

export default connectDb(handler);
