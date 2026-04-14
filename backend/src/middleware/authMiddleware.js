import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/ApiResponse.js";

export const verifyJWT = (req, res, next) => {
  try {
    const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");
    
    if (!token) {
      return res.status(401).json(new ApiResponse(401, null, "Unauthorized access"));
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET || "secret");
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json(new ApiResponse(401, null, "Invalid access token"));
  }
};
