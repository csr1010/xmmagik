/**
 * Module dependencies.
 */

exports.findallexams = function(req, res) {
	db.examslisttests.find(function(error, saved)
    {
        if(error || !saved)
        {
            //callback(false);
			 res.send("fail");
        }
        else
        {
            res.jsonp(saved);
        }
    });
  };
 