
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.apiEndpoint = function(req, res) {
    return res.status(200).send({status:"success", results: "just a test !"});
};
