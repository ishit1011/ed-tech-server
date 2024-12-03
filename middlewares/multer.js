// Multer --> to save image
import multer from 'multer'
import { v4 as uuid} from 'uuid'

const storage = multer.diskStorage({
    destination(req,file,cb){
        cb(null, "uploads")
    }, 
    filename(req,file,cb){
        const id = uuid();

        const extName = file.originalname.split(".").pop();

        const filename = `${id}.${extName}`;

        cb(null,filename);
    }
})

export const uploadFile = multer({storage}).single("file");