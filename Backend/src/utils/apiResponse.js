

 class apiResponse {

   constructor(statusCode,data,message = "Something went Wron"){

       this.statusCode = statusCode
       this.data = data
       this.message = message
   }

 }


 export default apiResponse;


