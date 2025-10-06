import AdminUser from "../../../../models/AdminUser";
import connectDb from "../../../../middleware/mongoose";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";

const handler = async (req, res) => {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const session = await getServerSession(req, res, authOptions);

    if (!session || !session.user) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    try {
        let user = await AdminUser.findOne({ email: session.user.email });

        // If user doesn't exist in database, check if it's the superadmin email
        if (!user) {
            if (session.user.email === "data.analytics@analyticsliv.com") {
                // Auto-create superadmin if not exists
                user = new AdminUser({
                    email: session.user.email,
                    permissions: ['blogs', 'casestudies', 'jobs', 'leads', 'ytplaylist', 'upwork-jobs'],
                    isSuperAdmin: true
                });
                await user.save();
            } else {
                return res.status(403).json({ error: "Access denied. User not authorized." });
            }
        }

        return res.status(200).json({ user });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export default connectDb(handler);
