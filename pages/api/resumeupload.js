import middleware from './middleware'
import nextConnect from 'next-connect'
const path = require('path');
var fs = require('fs')

const handler = nextConnect()
handler.use(middleware)

handler.post(async (req, res) => {
    
    var oldPath = req.files.file[0].path;
    //console.log(req.files);
    var extension = path.extname(oldPath);
    var x = Date.now() +''+ Math.floor(Math.random() * 1000);
    var newPath = '/uploads/' + x + extension;
    

    fs.rename(oldPath, newPath, function (err) {
        if (err) throw err
        console.log('Successfully renamed - AKA moved!')
        res.status(200).json({ 'message': newPath });
    })
    
})

export const config = {
    api: {
        bodyParser: false
    }
}

export default handler