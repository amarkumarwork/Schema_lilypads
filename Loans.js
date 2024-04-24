const mongoose = require("mongoose");

const LoansSchema = new mongoose.Schema({
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
  load_details: {
    type: Object,
    required: true,
  },
  lender: {
    type: Object,
    required: true,
  },
  business_plan: {
    type: Object,
    required: true,
  },
  key_deal_points: {
    type: Object,
    required: true,
  },
  borrower: {
    type: Object,
    required: true,
  },
  team: {
    type: Object,
    required: true,
  },
  contacts: {
    type: Object,
    required: true,
  },
  disclaimer: {
    type: Object,
    required: true,
  },
});

let Loan = mongoose.model("Loan", LoansSchema);

module.exports = Loan;
