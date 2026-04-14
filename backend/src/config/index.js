import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  dbUrl: process.env.DATABASE_URL,
  dbToken: process.env.DATABASE_AUTH_TOKEN,
  jwtSecret: process.env.JWT_SECRET || "edu-path-super-secret-key",
  nodeEnv: process.env.NODE_ENV || "development",
};
