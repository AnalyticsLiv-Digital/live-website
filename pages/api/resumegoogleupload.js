import { Storage } from '@google-cloud/storage';
const path = require('path');

export default async function handler(req, res) {
  const storage = new Storage({
    projectId: "website-data-371806",
    credentials: {
      client_email: "admin-123@website-data-371806.iam.gserviceaccount.com",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCa3rcJtzrKxti9\nEE98YrnyexdLacOHXpX0GCtjHQqXZTk5tCYOC0kY+gmXVIUaXZFWhMeBC7j2o3Jn\nZ9SxiNmh2Kn8KDjKKqDOATf/u0bjxoxZfmWPfrz19VjM4QYTih5+fCao11j5CeOK\ntSX6ZKFMBsHRWKhkc8yFuA1objK62sn525YJWXN0w1cqDAt+xsKjbMgfGQv9Y0Hr\nUb3gEzpmqiDR2mpCz7mpKD+OIxWFAeqvUob2cPwGEhHK2r6W7kxaUEQd94H+jrga\nHNWoSLKYnHYm7Nb/Dtib0BJq0UOLDhddUDknSxK877B1ELMV4A1M6UDM58fgGJj+\n8dZHgS9tAgMBAAECggEAHuYLh9U2Vim5KXN9IFiEN/RGEAZAfBwrd+Fwmpw7Njx8\nX95o70liIqkUS8yRp9J+QlBIi58enpq6oxXssiUXIrrbI1OVDQTXQ3KrzQp82MoO\ny3Yz5h7HrZzvRCUrNK/MaLj1b59TgZBvBQgiVSRJqCT6+30gT7Zo2k7/4dOGrI/V\nijnBf+g4YGSmGGGMRbEFPImXBYM4EZx9pgOKlNzfgUBstEbw/zMGivUAGLPukun6\ndX/4Sif+Sh65I4NeqOC4DE5X7AvK2HdjEE4s+phJ5qs0J3pU6hEipfo7mFMKyaeh\ny4cr/JlvN9uwcL0rowYpOswtrMmBAh0Wn+1AIJVMMwKBgQDao7iI1V01P64C4KlH\n0myByd7yzn3mlPdO4aaar0XpsIpFz5rKwTpxf3t+HocUqLqR9fIcDPMu/N4kcNr/\nr6F97pnRx0EtVdzlvsEMBeS5VfXmpn8+HadpgQCdjBbsyIkj58i648fEdthieovv\ne1hDhGP1dIcX31S0SjvQFj3VSwKBgQC1VW0h8YL8tveecydoqE3IfT6MbnfusuXD\nKIBHLZAJbt6XUlT6W6Er0DWl7I85EFjSrf45q19tAC1GcHmefv9V02wzOrDo2CYK\nKXKwZGjCvpxJBmKbHUtEFpzzvP3D8iLVdigMGHiNBvsxlMu6qYWUpdRGYfo8mDkv\nIjdyja9zJwKBgQCqbrt3ttLsolI0Hgr3WLmKxuFLZtnPt8m8rLvhksWt8Bcpajbg\n3JWBSf3rB0MHQKwHAbCUWyfqNeW4hFzCuZbqgudXFrrg6zDBytvTUnjEXJTOEnXX\n5ufMn2nqZfys4Xm+Cn136f2cUYRF5/9TVFQudXIyMX7phgcSb1eG0v+qVwKBgQCm\nwq8gXiimG+XQ8/m0B8Ows22IXDczb5ZZSa/exYoHAsz1wKOhsg6galRMCScVxXDK\nH3UCuBWD+nuoodtW5VgQJ+UDn9/94nnpMoDksxKctgqoJZUdLW2AaoNgq9d8Efvy\n7zyZExAaMedki4BoY2oTcAWtzIECpMNCE2eGk8JcVQKBgQCuvoz7ScCdZCg8pF+T\nNsspHuQD5WOS5QB32GKWEhUGtEDOmNzUbITFWv1r1MI7LlIaAON/3Cc4ZJn6INfe\nFNuxb+aqbHGFHbskJz1qyMiFBCGcReWj3gL7nbVSEKy4XQX3KzriCuawJZU5kE3q\nYevCN54uvZz7m7oj9dpkmJ2AWg==\n-----END PRIVATE KEY-----\n",
    },
  });

  
    
    var extension = path.extname(req.query.file);
    var x = Date.now() +''+ Math.floor(Math.random() * 1000);
    var newPath = x + extension;

  const bucket = storage.bucket("website-bucket-uploads");
  const file = bucket.file(newPath);
  const options = {
    expires: Date.now() + 1 * 60 * 1000, //  1 minute,
    fields: { 'x-goog-meta-test': 'data' },
  };
//https://storage.googleapis.com/website-bucket-uploads/shoebacca.png
  const [response] = await file.generateSignedPostPolicyV4(options);

  res.status(200).json(response);
}