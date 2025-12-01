import Proposal from "../../../../models/Proposal";
import connectDB from "../../../../middleware/mongoose";
export default async function handler(req, res) {
    await connectDB();

    // GET: Fetch existing proposals
    if (req.method === 'GET') {
        try {
            const { jobId, name } = req.query;

            if (!jobId) {
                return res.status(400).json({ error: 'Job ID is required' });
            }

            const proposalDoc = await Proposal.findOne({ id: jobId });

            if (!proposalDoc) {
                return res.status(404).json({
                    message: 'No proposals found for this job',
                    proposals: []
                });
            }

            // If name is provided, filter proposals
            let proposals = proposalDoc.proposals;
            if (name) {
                proposals = proposals.filter(p => p.name === name);
            }

            return res.status(200).json({
                success: true,
                proposals: proposals
            });

        } catch (error) {
            console.error('Error fetching proposals:', error);
            return res.status(500).json({ error: 'Failed to fetch proposals' });
        }
    }

    // POST: Save new proposal
    else if (req.method === 'POST') {
        try {
            const { job_id, name, proposal } = req.body;

            if (!job_id || !name || !proposal) {
                return res.status(400).json({ error: 'Missing required fields: job_id, name, and proposal are required' });
            }

            // Validate name
            if (name !== 'anshul' && name !== 'rajvi') {
                return res.status(400).json({ error: 'Name must be either "anshul" or "rajvi"' });
            }

            // Find existing document or create new one
            let proposalDoc = await Proposal.findOne({ id: job_id });

            if (proposalDoc) {
                // Add new proposal to existing document
                proposalDoc.proposals.push({
                    name: name,
                    proposal: proposal,
                    createdAt: new Date()
                });
                await proposalDoc.save();
            } else {
                // Create new document
                proposalDoc = new Proposal({
                    id: job_id,
                    proposals: [{
                        name: name,
                        proposal: proposal,
                        createdAt: new Date()
                    }]
                });
                await proposalDoc.save();
            }

            return res.status(200).json({
                success: true,
                message: 'Proposal saved successfully',
                proposalDoc: proposalDoc
            });

        } catch (error) {
            console.error('Error saving proposal:', error);
            return res.status(500).json({ error: 'Failed to save proposal' });
        }
    }

    // Method not allowed
    else {
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
}