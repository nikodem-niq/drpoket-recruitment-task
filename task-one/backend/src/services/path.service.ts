import Path from "../models/pathModel";

class PathService {
    public async findAll() {
        const findAllPaths = await Path.find({});
        return findAllPaths;
    }

    public async create(titleOfPath: string, points: Points) {
        const createdPath = await Path.create({titleOfPath, points});
        return createdPath;
    }
}

type Points = {latitude: number, longitude: number}[]

export default new PathService();