/**
 * Module dependencies.
 */

 
//var mongoose = require('mongoose');
    var async = require('async'),
    
    _ = require('underscore');
	//userModel = mongoose.model("userstest",usersSchema),
	
	exports.create = function(req, res) {
	db.userstests.insert(req.body,function(error, saved)
    {
        if(error || !saved)
        {
            //callback(false);
			 res.send("fail");
        }
        else
        {
            res.send("success");
           // console.log(saved);
            //callback(true);
        }
    });
  };
 exports.findbyID = function(req, res) {
	    var empid = req.body.empid;
		var pwd = req.body.pwd;
		db.userstests.findOne({
			_id:empid
		}, function(err, doc) {
		console.log(err)
		   if(err){
		       res.send("UserName not registered");
		   }
		   else{
			if(doc !=null && doc.hasOwnProperty('pwd') && doc.pwd == pwd && doc.hasOwnProperty('empid') && doc.empid == empid)
				res.jsonp({
				 empid:doc.empid,
				 msg:"success"
				});
			else
               res.send("Invalid credentials")			;
				}
			});
			
  };
