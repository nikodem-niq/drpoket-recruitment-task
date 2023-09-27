import { Router } from "express";
import graphDataRouter from "./graphData";

const appRouter : Router = Router();

// Routes
appRouter.use('/graph-data', graphDataRouter)
// ...

export default appRouter;