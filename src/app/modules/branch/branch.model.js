const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const branchSchema = new Schema(
  {
    branchID: {
      type: String,
      required: true,
      unique: true,
    },
    branchName: {
      type: String,
      required: [true, 'Enter Branch Name'],
    },
    address: {
      type: String,
      required: [true, 'Enter Address'],
    },
    password: {
      type: String,
      required: [true, 'Enter Password'],
    },
    username: {
      type: String,
      required: [true, 'Enter User name'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Enter Phone Number'],
    },
    staffs: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

const Branch = model('Branch', branchSchema);
module.exports = Branch;
