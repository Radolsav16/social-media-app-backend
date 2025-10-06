import { Router } from "express";
import homeController from "../controllers/home";
import authContoller from "../controllers/auth";

const router = Router();



router.use('/api/social-media-app/home',homeController)
router.use('/api/social-media-app/auth',authContoller)




export default router;