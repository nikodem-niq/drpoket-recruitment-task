import { Router } from "express";
import pathRouter from "./path";

const appRouter : Router = Router();

// Routes
appRouter.use('/path', pathRouter)
// ...

export default appRouter;