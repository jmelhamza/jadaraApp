import e from "express"

import {getDetailEvnt , postEvents , putEvent ,deleteEvent } from "../controllers/eventCont.js";
 
const router = e.Router();


router.get("/addevnt",getDetailEvnt)
router.post("/postevent",postEvents)
router.put("/putevent/id",putEvent)
router.delete("/deletevent/:id",deleteEvent)

export default router