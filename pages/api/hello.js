// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {
  const data  = await axios.get('https://alltimetrading.com/')
  res.status(200).json({ data:data });
}
