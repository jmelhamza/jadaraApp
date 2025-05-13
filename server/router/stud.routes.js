

import e from "express";
import { getDetailUser, postUsers, putUser, deletUser } from "../controllers/studCont";

const router = e.Router();

router("/add", getDetailUser);
router("/post", postUsers);
router("/put", putUser);
router("/delete", deletUser)

export default router