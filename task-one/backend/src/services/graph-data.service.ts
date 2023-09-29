import GraphData from "../models/graphDataModel";
import type { IGraphData } from "../constants/types";

class GraphDataService {
    public async findAll() {
        const foundAllGraphData = await GraphData.find({});
        return foundAllGraphData;
    }

    public async create(data: IGraphData) {
        // const { transmission, stuffines, discomfort, humidity, pollution, temperature, carbonDioxide, density } = data;
        const createdGraphData = await GraphData.create(data);
        return createdGraphData;
    }
}


export default new GraphDataService();