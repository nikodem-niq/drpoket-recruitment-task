import { Router } from "express";
import graphDataController from "../../controllers/graph-data.controller";

const graphDataRouter : Router = Router();
const GraphDataController = graphDataController;

// Routes
graphDataRouter.get('/', GraphDataController.fetchGraphData);
graphDataRouter.post('/create', GraphDataController.createGraphData);


export default graphDataRouter;