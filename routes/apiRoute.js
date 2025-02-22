import { Router } from "express";
import { apiLed } from "../controllers/apiLedController.js";


const apiRouter = Router()


apiRouter.get("/api-led", (req, res) => {
    return res.status(200).json({
        status: true
    });
});

export default apiRouter