const router = require('express').Router();
const BranchController = require('./branch.controller');

router.post('/create', BranchController.createBranch);
router.get('/', BranchController.getAllBranch);
router.get('/:id', BranchController.getSingleBranch);
router.delete('/:id', BranchController.deleteBranch);
router.patch('/:id', BranchController.updateBranch);

const BranchRouter = router;
module.exports = BranchRouter;
