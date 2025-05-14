

import e from "express";
import { getDetailUser, postUsers, putUser, deletUser } from "../controllers/studCont.js";

const router = e.Router();

router.get("/add", getDetailUser);
router.post("/post", postUsers);
router.put("/put/:id", putUser);
router.delete("/delete/:id", deletUser)

export default router