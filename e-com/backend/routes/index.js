const express = require("express");
const router = express.Router();

//other file import
const productRoute = require("../routes/products.js");
const categoriesRoute = require("../routes/categories.js");
const authRoute = require("../routes/auth.js");
const userRoute =require ("../routes/users.js")



router.use("/categories", categoriesRoute);
router.use("/products", productRoute);
router.use("/auth", authRoute);
router.use("/users", userRoute);



module.exports = router;
