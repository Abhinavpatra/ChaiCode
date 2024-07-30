import multer from "multer"

const storage = multer.diskStorage({
    //req: input from user
    // file: file access 
    //cb: callback function
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        //structure and ways to save file name. 
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
    cb(null, file.originalname)
    }
  })
  
export const upload = multer({ storage: storage }) 