import express from "express";
const router = express.Router();
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

// router.get("/checkAuthentication",verifyToken,(req,res,next)=>{
//     res.send("Heelo user you are logged in");
// })
// router.get("/checkUser/:id",verifyUser, (req, res, next) => {
//   res.send("Heelo user you are logged in you can delete your account");
// });
// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Heelo admin , you are logged in you can delete all account");
// });
//update
router.put("/:id",verifyUser, updateUser);
//delete
router.delete("/:id",verifyUser, deleteUser);
//get
router.get("/:id", verifyUser,getUser);
//get all
router.get("/", verifyAdmin ,getUsers);
export default router;
