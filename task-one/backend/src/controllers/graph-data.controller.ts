import { NextFunction, Request, Response } from "express";
import { messageLocales } from "../constants/locales";
import graphData from "../services/graph-data.service";
import type { IGraphData } from "../constants/types";

class GraphDataController {
    public async fetchGraphData(req: Request, res: Response, next: NextFunction) {
        try {
            const foundGraphData = await graphData.findAll();
            return res.status(200).json({foundGraphData})
        } catch(error) {
            return res.status(400).json({error: messageLocales.RESOURCE_FETCH_ERROR});
        }
    }

    public async createGraphData(req: Request, res: Response, next: NextFunction) {
        try {
            const { transmission, stuffines, discomfort, humidity, pollution, temperature, carbonDioxide, density } = req.body;
            if(!transmission || !stuffines || !discomfort || !humidity || !pollution || !temperature || !carbonDioxide || !density) {
                return res.status(400).json({error: messageLocales.PROPERTY_MISSING})
            };
            const graphDataObj: IGraphData = {
                transmission, stuffines, discomfort, humidity, pollution, temperature, carbonDioxide, density
            }
            const createdGraphData = await graphData.create(graphDataObj);
            return res.status(200).json({createdGraphData})
        } catch(error) {
            console.error(error)
            return res.status(400).json({error: messageLocales.RESOURCE_ADD_ERROR});
        }
    }
}

export default new GraphDataController();