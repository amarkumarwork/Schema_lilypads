const mongoose = require("mongoose");

const CrowdfundingSchema = new mongoose.Schema({
  property_images: {
    type: Array,
    required: true,
  },
  property: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  offer_available: {
    days: {
      type: Number,
      required: true,
    },
    hours: {
      type: Number,
      required: true,
    },
    minutes: {
      type: Number,
      required: true,
    },
    seconds: {
      type: Number,
      required: true,
    },
  },
  yield: {
    type: String,
    required: true,
  },
  ltv: {
    type: String,
    required: true,
  },
  hold_period: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  minimum_investment: {
    type: String,
    required: true,
  },
  redemption_period: {
    type: String,
    required: true,
  },
  strategy: {
    type: String,
    required: true,
  },
  area_sf: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  appraisal_value: {
    type: String,
    required: true,
  },
  appraisal_date: {
    type: Date,
    required: true,
  },
  value_per_sf: {
    type: String,
    required: true,
  },
  raised: {
    type: String,
    required: true,
  },
  contacts: {
    type: Object,
    required: true,
  },
  active_since: {
    type: Date,
    default: Date.now,
  },
  total_views: {
    total: {
      type: Number,
      required: true,
    },
    today: {
      type: Number,
      required: true,
    },
  },
  status: {
    type: String,
    required: true,
  },
});

let Crowdfunding = mongoose.model("Crowdfunding", CrowdfundingSchema);

module.exports = Crowdfunding;
