import { Router } from "express";
import homeController from "../controllers/home";

const router = Router();



router.use('/api/social-media-app/home',homeController)





export default router;