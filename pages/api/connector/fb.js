// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Connector from "../../../models/Connector";
import connectDb from "../../../middleware/mongoose";


const handler = async (req, res) => {
    let conn = await Connector.find({token:req.query.token});
    function formatDate(date = new Date()) {
        const year = date.toLocaleString('default', {year: 'numeric'});
        const month = date.toLocaleString('default', {month: '2-digit'});
        const day = date.toLocaleString('default', {day: '2-digit'});
      
        return [year, month, day].join('');
      }
      var formatted_date = parseInt(formatDate(new Date()));
    if(conn.length !=0){
        var expiry_date = parseInt(conn[0].expiry_date);
        if(expiry_date >= formatted_date){
            res.status(200).json({ status: 1});
        }else{
            res.status(200).json({ status: 0 });
        }
        
    }
    else{
        res.status(200).json({ status: 0 });
    }
}


export default connectDb(handler);
