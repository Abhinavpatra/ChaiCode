import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './.env'
})



connectDB()// the connectDB returns a promise, this handles it
.then(()=>{
    app.listen(process.env.port, () => {
        console.log(`App is listening in port ${process.env.port}`);
    })
})
.catch((error)=>{
    console.log(error)
})
















// An alternate to the db/index.js file

/* in this file itself.

;(async () => {
    try{
      await mongoose.connect('${process.env.MONGO_URL}/${DB_NAME}')
      app.on("error",(error)=>{
        console.log("ERROR:", error)
      })
      app.listen(process.env.port, () => {
        console.log('App is listening in port ${process.env.port}');

      })

    }
    catch(error) {
        console.error(error);
        throw err

    }


} )()



*/