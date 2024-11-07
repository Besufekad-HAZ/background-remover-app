import jwt from "jsonwebtoken";

// Middleware function to decode jwt token to get clerkId
const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token provided" });
    }
    const decoded = jwt.decode(token);
    req.body.clerkId = decoded.clerkId;
    next();
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
