import { Router } from "express";
import { getCurrentUser, registerUser, test } from "../controllers/user.controllers.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";

const router = Router()



router.route("/test").get(test)
router.route("/get-current-user").get(isLoggedIn,getCurrentUser)
router.route("/register").post(registerUser)



export default router;