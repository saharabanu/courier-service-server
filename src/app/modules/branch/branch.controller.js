const BranchService = require('./branch.service');

// create branch
const createBranch = async (req, res) => {
  try {
    const data = req.body;

    const branch = await BranchService.createBranch(data);
    res.status(200).json({
      success: true,
      message: 'Branch Created Successfully',
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
// get al branch
const getAllBranch = async (req, res) => {
  try {
    const branch = await BranchService.getAllBranch();
    res.status(200).json({
      success: true,
      message: 'All Branch retrieved Successfully',
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
// get single branch
const getSingleBranch = async (req, res) => {
  try {
    const id = req.params.id;

    const branch = await BranchService.getSingleBranch(id);
    res.status(200).json({
      success: true,
      message: 'single Branch retrieved Successfully',
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
// delete branch
const deleteBranch = async (req, res) => {
  try {
    const id = req.params.id;

    const branch = await BranchService.deleteBranch(id);
    res.status(200).json({
      success: true,
      message: 'Branch deleted Successfully',
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
// update branch
const updateBranch = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const branch = await BranchService.updateBranch(id, data);
    res.status(200).json({
      success: true,
      message: 'Branch updated Successfully',
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
  getAllBranch,
  getSingleBranch,
  deleteBranch,
  updateBranch,
};
module.exports = BranchController;
