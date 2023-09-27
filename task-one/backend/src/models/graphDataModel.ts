import mongoose from "mongoose";
const { Schema } = mongoose;

const graphDataSchema = new Schema({
    transmission: Number,
    stuffines: Number,
    discomfort: Number,
    humidity: Number,
    pollution: Number,
    temperature: Number,
    carbonDioxide: Number,
    density: Number
})

graphDataSchema.add({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
      required: true,
    },
  });

const GraphData = mongoose.model('GraphData', graphDataSchema);
export default GraphData;