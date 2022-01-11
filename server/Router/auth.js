const express = require("express");
const router = express.Router();
const User = require("../Models/userSchema");
const Cart = require("../Models/cartSchema");
const bcryptJS = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../Middelware/authenticate");

router.post("/register", async (req, res) => {
  const { name, email, password, confirm_password, country, phone } = req.body;
  console.log(
    "This is register page",
    name,
    email,
    password,
    confirm_password,
    country,
    phone
  );
  try {
    if (
      !name ||
      !email ||
      !password ||
      !confirm_password ||
      !country ||
      !phone
    ) {
      return res.status(422).send({ msg: "Please fill all field " });
    }
    if (!(password === confirm_password)) {
      return res.status(422).send({ msg: "password does not match " });
    }
    const userExist = await User.findOne({ email: email });
    console.log(userExist);
    if (userExist) {
      return res.status(422).json({ msg: "Email already exist" });
    }
    const newUser = await new User({
      name: name,
      email: email,
      password: password,
      country: country,
      phone: phone,
    });
    await newUser.save();
    return res.status(201).json({ msg: "New User added" });
  } catch (error) {
    console.log(error);
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(422).json({ msg: "Please fill all filed 1" });
    }
    const userExist = await User.findOne({ email: email });

    const passwordCompareMatch = await bcryptJS.compare(
      password,
      userExist.password
    );

    const token = await userExist.generateAuthToken();
    res.cookie("jwttoken", token, {
      expires: new Date(Date.now() + 25892000000),
      httpOnly: true,
    });
    if (!passwordCompareMatch) {
      return res
        .status(422)
        .json({ msg: "Inavlid credentials password is incorrect 2" });
    }

    if (!userExist) {
      return res.status(422).json({ msg: "please creeate account  first " });
    }
    return res.status(200).json({ msg: "Login Succesfull" });
  } catch (error) {
    console.log(error);
  }
});
//Insert Cart Items
router.get("/loadItems", async (req, res) => {
  try {
    const items = await Cart.findOne({});
    console.log("This is items form server ", items);
    return res.status(200).json({ msg: items });
  } catch (error) {
    return res.status(400).json({ msg: "Failed to fetch items from database" });
  }
});
//Product Page
router.get("/product", authenticate, (req, res) => {
  res.send(req.rootUser);
});

//Logout page
router.get("/logout", (req, res) => {
  res.clearCookie("jwttoken", { path: "/" });
  res.status(200).send("User Logout");
});
module.exports = router;
