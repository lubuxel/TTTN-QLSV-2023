import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);
    router.post('/post-crud', homeController.postCRUD)
    return app.use("/", router);
}

router.post('/api/login', userController.handleLogin)

module.exports = initWebRouter;