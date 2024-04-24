const mongoose = require("mongoose");

const ValuationSchema = new mongoose.Schema({
  // user_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  asset_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Asset",
    required: true,
  },
  summary: {
    type: Object,
    required: true,
  },
});

let valuation = mongoose.model("valuation", ValuationSchema);

module.exports = valuation;
