function validateForm(req,res,next){
    if(!req.body.itemName || !req.body.amount || !req.body.costPerItemInDollars || !req.body.date) res.status(400).json({message: "Invalid Inputs"});
    else next();
}

module.exports = {
    validateForm,
};