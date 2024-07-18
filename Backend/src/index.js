
import { configDotenv } from "dotenv";
configDotenv({path:"./.env"})

import app from "./App.js";
import { connentDB } from "./db/mongodb.js";


connentDB()
.then(()=>{
   app.listen(process.env.PORT,()=>{
          console.log("The server is listing in port number :" ,process.env.PORT)
   })
})
.catch((error)=>{

    console.log(`The server is not listing in port number : ${process.env.PORT} `,error)
})













