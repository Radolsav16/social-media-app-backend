import { Router } from "express";
import authContoller from "../controllers/auth";
import uiController from "../controllers/ui";

const router = Router();



router.use('/api/social-media-app/ui',uiController)
router.use('/api/social-media-app/auth',authContoller)




export default router;