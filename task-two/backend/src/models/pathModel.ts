import mongoose from "mongoose";
const { Schema } = mongoose;

const geoPointSchema = new Schema({
    latitude: Number,
    longitude: Number,
  });

const pathSchema = new Schema({
    points: [geoPointSchema]
})

pathSchema.add({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
      required: true,
    },
  });

const Path = mongoose.model('Path', pathSchema);
export default Path;