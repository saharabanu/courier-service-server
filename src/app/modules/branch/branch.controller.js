const Branch = require('./branch.model');

const { v4: uuidv4 } = require('uuid');

const createBranch = async (req, res) => {
  try {
    const data = req.body;
    data.branchID = uuidv4();
    const branch = await Branch.create(req.body);
    res.status(200).json({
      success: true,
      result: branch,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const BranchController = {
  createBranch,
};
module.exports = BranchController;
