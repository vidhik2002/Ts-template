import "dotenv/config";

export default {
  port: Number(process.env.PORT),
  environment: process.env.ENVIRONMENT,
};