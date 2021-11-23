const router = require("express").Router(); //Import express router
const { signUp } = require("../controllers/user"); //Import users controller
const { signIn } = require("../controllers/signIn"); //Import signin controller

//Make router
router.post("/signup", signUp);
router.post("/signin", signIn);

//Export router
module.exports = router;
