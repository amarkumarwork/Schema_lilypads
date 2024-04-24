const object = require("@hapi/joi/lib/types/object");
const mongoose = require("mongoose");

const AssetSchema = new mongoose.Schema({
  assetName: {
    type: String,
    required: true,
  },
  assetsAddress: {
    type: String,
    required: false,
  },
  assetType: {
    type: String,
    required: true,
  },
  assetValue: {
    type: Number,
    required: true,
  },
  assetDescription: {
    type: String,
    required: true,
  },
  assetTags: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  pricePerUnit: {
    type: Number,
    required: false,
  },
  assetSquareFeet: {
    type: Number,
    required: false,
  },
  unitDuplex: {
    type: Number,
    required: false,
  },
  views: {
    type: Number,
    required: false,
  },
  sold: {
    type: String,
    required: false,
  },
  debt: {
    type: String,
    required: false,
  },
  addedBy: {
    type: String,
    required: true,
  },
  contact: {
    type: Array,
    required: false,
  },
  contactEmail: {
    type: String,
    required: false,
  },
  contactWebsite: {
    type: String,
    required: false,
  },
  contactBrochure: {
    type: String,
    required: false,
  },
  lat_and_long: {
    type: Array,
    required: false,
  },
  assetsImages: {
    type: Array,
    required: false,
  },
  advanceAssets: {
    type: Object,
    required: false,
  },
});

let Assets = mongoose.model("Assets", AssetSchema);

module.exports = Assets;
