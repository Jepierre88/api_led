import { Router } from "express";
import { apiLed } from "../controllers/apiLedController.js";

let statusToResponse = false

const apiRouter = Router()

apiRouter.get("/api-led/:status", (req,res)=>{
    const {status} = req.params
    if(typeof Boolean(status) === "boolean"){
        statusToResponse = status
        console.log("Alla")
        return res.status(200).json({
         status: "ok"
        })
    }
    console.log("Entro aca")
    return res.status(400).json({
        status: "Error"
    })
})

apiRouter.get("/api-led", (req, res) => {
    return res.status(200).json({
        status: statusToResponse
    });
});

export default apiRouter