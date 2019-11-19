//Requirements
var path = require('path');
//Routing via express

module.exports = function(app) {
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
    //Add default if no match found
    app.use(function(req,res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    })
}
