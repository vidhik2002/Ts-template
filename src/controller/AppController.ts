import { RequestHandler } from "express";
interface AppControllerSchema {
  getUser: RequestHandler;
}
const AppController: AppControllerSchema = {
  getUser: (req, res, next) => {
    console.log("hello!")
    next();
  },
};
export default AppController;
