const { v4: uuidv4 } = require('uuid');
const Branch = require('./branch.model');

// create branch
const createBranch = async data => {
  data.branchID = uuidv4();
  const { branchName, address, password, username, phoneNumber, branchID } =
    data;

  const branch = await Branch.create({
    branchName,
    address,
    username,
    password,
    branchID,
    phoneNumber,
  });
  return branch;
};

// get all branch
const getAllBranch = async () => {
  const branch = await Branch.find();
  return branch;
};
// get single branch
const getSingleBranch = async id => {
  const branch = await Branch.findById(id);
  return branch;
};
// delete branch
const deleteBranch = async id => {
  const branch = await Branch.findByIdAndDelete(id);
  return branch;
};
const updateBranch = async (id, data) => {
  const branch = await Branch.findByIdAndUpdate(id, data, { new: true });
  return branch;
};

const BranchService = {
  createBranch,
  getAllBranch,
  getSingleBranch,
  deleteBranch,
  updateBranch,
};

module.exports = BranchService;
