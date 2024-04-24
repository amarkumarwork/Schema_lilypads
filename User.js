const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
  accountType: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profile_image: {
    type: String,
    required: false,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
  },
  department: {
    type: String,
    required: false,
  },
  phone_number: {
    type: String,
    required: false,
  },
  street_address: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  secondary_address: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  zip_code: {
    type: String,
    required: false,
  },
  time_zone: {
    type: String,
    required: false,
  },
  about_me: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  companyName: {
    type: String,
    required: true,
  },

  accreditedInvestor: {
    type: Boolean,
    required: true,
  },

  countryOfCitizenship: {
    type: String,
    required: true,
  },

  countryOfResidence: {
    type: String,
    required: true,
  },

  accountTypeChoosen: {
    type: String,
    required: true,
  },

  accountType: {
    type: String,
    required: true,
  },

  certificateOfFormation: {
    type: String,
    required: false,
  },

  operatingAgreement: {
    type: String,
    required: false,
  },

  individualAccountInfo: {
    type: Object,
    required: false,
  },

  entityAccountInfo: {
    type: Object,
    required: false,
  },

  jointAccountInfo: {
    type: Object,
    required: false,
  },

  investmentInfo: {
    type: Object,
    required: false,
  },

  trustAccountInfo: {
    type: Object,
    required: false,
  },

  bankAccount: {
    type: Object,
    required: false,
  },

  privacyAndNewsletter: {
    type: Object,
    required: true,
  },
  persona: {
    type: Object,
    required: false,
  },
  loan_setups_list: [
    {
      type: Schema.Types.ObjectId,
      ref: "Loan",
    },
  ],
});

let User = mongoose.model("User", UserSchema);

module.exports = User
