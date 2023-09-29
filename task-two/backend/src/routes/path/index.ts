import { Router } from "express";
import pathController from "../../controllers/path.controller";

const pathRouter : Router = Router();
const PathController = pathController;

// Routes
pathRouter.get('/', PathController.fetchPaths);
pathRouter.post('/create', PathController.createPath);


export default pathRouter;