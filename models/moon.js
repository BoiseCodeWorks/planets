var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.ObjectId

var moonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // RELATIONSHIPS
  planetId: { type: ObjectId, required: true, ref: 'Planet' },
  starId: { type: ObjectId, required: true, ref: 'Star' },
  galaxyId: { type: ObjectId, required: true, ref: 'Galaxy' }
})

var Moon = mongoose.model("Moon", moonSchema);