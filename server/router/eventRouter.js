import e from "express"
import { upload } from "../middleware/upload.js";


import {getDetailEvnt , postEvents , putEvent ,deleteEvent } from "../controllers/eventCont.js";

 
const router = e.Router();


router.get("/addevent",getDetailEvnt)
router.post("/postevent", upload.single("image"),postEvents)
router.put("/putevent/:id", upload.single("image"),putEvent)
router.delete("/deletevent/:id",deleteEvent)

export default router

