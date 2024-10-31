import jwt from "jsonwebtoken";

// Middleware function to decode jwt token to get clerkId
const authUser = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.clerkId = data.id;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};
