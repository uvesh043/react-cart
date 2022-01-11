const jsonwebtoken = require("jsonwebtoken");
const User = require("../Models/userSchema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwttoken;
    const verifyToken = jsonwebtoken.verify(token, process.env.SECRET_KEY);
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;
   next();
  } catch (error) {
    res.status(400).send("Unauthorized:No token provide");
  }
};

module.exports = authenticate;

// curl https://codeload.github.com/mui-org/material-ui/tar.gz/next | tar -xz --strip=2 material-ui-next/examples/create-react-app-with-styled-components
// cd create-react-app-with-styled-components
// npm install
// npm start

