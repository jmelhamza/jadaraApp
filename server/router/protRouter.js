
import e from "express";
import { middleware } from "../middleware/middle.js"


const router = e.Router();

router.get("/profile", middleware, (req, res) =>{
    res.json({ message: "you are authenticated", user: req.userData })
})

export default router


