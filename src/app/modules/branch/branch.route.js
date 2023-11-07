const router = require('express').Router();
const BranchController = require('./branch.controller');

router.post('/create', BranchController.createBranch);

const BranchRouter = router;
module.exports = BranchRouter;
