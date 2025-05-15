

import e from "express";
<<<<<<< HEAD
import { getDetailUser, postUsers, putUser, deletUser } from "../controllers/studCont";

const router = e.Router();

router("/add", getDetailUser);
router("/post", postUsers);
router("/put", putUser);
router("/delete", deletUser)
=======
import { getDetailUser, postUsers, putUser, deletUser } from "../controllers/studCont.js";

const router = e.Router();

router.get("/add", getDetailUser);
router.post("/post", postUsers);
router.put("/put/:id", putUser);
router.delete("/delete/:id", deletUser)
>>>>>>> dev

export default router