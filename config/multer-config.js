import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

//Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads')
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(12,function(err,bytes){
            const fn=bytes.toString("hex")+path.extname(file.originalname)
            cb(null, fn)
        })
    }
  })
  console.log('multer is here');
  const upload = multer({ storage: storage })
export default upload;