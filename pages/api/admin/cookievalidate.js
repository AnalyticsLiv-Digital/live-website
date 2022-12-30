// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
    if (req.method == 'POST') {

            var cookie = req.body.cookie;
            if(cookie=='fiif348df9fj34r3'){
            res.status(200).json({ message : 'success' });
            }else{
                res.status(200).json({ message : 'failed' });
            }
    } else {
        res.status(400).json({ error: "Bad Request" });
    }

    
}
