import { NextFunction, Request, Response } from "express";
import { messageLocales } from "../constants/locales";
import pathService from "../services/path.service";

class PathController {
    public async fetchPaths(req: Request, res: Response, next: NextFunction) {
        try {
            const paths = await pathService.findAll();
            return res.status(200).json({paths})
        } catch(error) {
            return res.status(400).json({error: messageLocales.RESOURCE_FETCH_ERROR});
        }
    }

    public async createPath(req: Request, res: Response, next: NextFunction) {
        try {
            const { points, titleOfPath } = req.body;
            if(!points || !titleOfPath) {
                return res.status(400).json({error: messageLocales.PROPERTY_MISSING})
            };
            const createdPath = await pathService.create(titleOfPath.toString(), points);
            return res.status(200).json({createdPath})
        } catch(error) {
            console.error(error)
            return res.status(400).json({error: messageLocales.RESOURCE_FETCH_ERROR});
        }
    }
}

export default new PathController();