const mongoose = require("mongoose");

const SyndicateSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  asset_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Asset",
    required: true,
  },
  general: {
    type: Object,
    required: true,
  },
  investment_finacial_details: {
    type: Object,
    required: true,
  },
  investment_syndicate_terms: {
    type: Object,
    required: true,
  },
  business_plan_webinar: {
    type: Object,
    required: true,
  },
  key_deal_points: {
    type: Array,
    required: true,
  },
  smart_contract: {
    type: Object,
    required: true,
  },
  team: {
    type: Object,
    required: true,
  },
  disclaimer: {
    type: String,
    required: true,
  },
});


let syndicate = mongoose.model("syndicate", SyndicateSchema);

module.exports = syndicate
