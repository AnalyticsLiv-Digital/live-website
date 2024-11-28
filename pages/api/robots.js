export default function handler(req, res) {
    // Extract host (domain or subdomain) from the request headers
    const host = req.headers.host || ''; // Example: subdomain.analytics.com
    const subdomain = host.split('.')[0]; // Extract the subdomain part (e.g., "subdomain")

    let robotsContent =  `User-agent: *
Disallow: /
`;
    // Send robots.txt content as plain text
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(robotsContent);
}
