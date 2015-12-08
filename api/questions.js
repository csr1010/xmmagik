/**
 * Module dependencies.
 */
 var objFind = {};
//var cursor =db.userstests.find(objFind, {}, {tailable:true, timeout:false});
exports.findallquestions = function(req, res) {
// check if user exceeded attempts
	db.questionstests.findOne({
			examid:req.params.examid
		}, function(err, doc,lasterr) {
		console.log(err)
		   if(err){
		       res.send("No Exam found");
		   }
		   else{
			if(doc !=null)
			    //console.log(doc)
				res.jsonp(doc);
			}
			});
  };
  exports.setattempts = function(req, res){
  var obj = req.body;
  db.userstests.findAndModify(
				   {
							query: { _id: obj.empid ,"exams.examid":""},
							update: {"$set":{ "exams.$.examid":obj.examid,"exams.$.attempts":1} },
							//new: true
						}, function(err, doc, lastErrorObject) {
								 if(err){
								   res.send("No users found");
							   }
							   else{
							     res.send("setattempts");
							   }
							 
						});
  };
  exports.getattempts = function(req, res) {
   
  	db.userstests.findOne({
			_id:req.params.empid
		}, function(err, doc,lastErrorObject) {
		//console.log(err)
		   if(err){
		       res.send("No users found");
		   }
		   else{
		  // console.log(doc)
			if(doc !=null && doc.exams[0].attempts == 0){
			    //console.log(doc)
				res.send("success");
			}
			else{
			 // console.log(doc)
			   res.send("fail");
			}
			}
			});
	  };
  exports.saveallquestions = function(req, res) {
	var data = req.body;
	var empid = data.empid;
	var examid = data.examid;
	var userAnswers = data.Questions;
	var userAnsObj = {};
	userAnswers.forEach(function(doc,index) {
		userAnsObj[doc._id] = doc.result;
	});
	
	//console.log(userAnsObj)
	var totalMarks = 0;
	var individMark = 1;
	db.answertests.find({_id:examid}).forEach(function(err, doc,lastErrorObject) {
		if (!doc) {
			// we visited all docs in the collection
			return;
		}
		else{
		   doc.ans.forEach(function(val, index) {
		  //  console.log(val)
		     if(typeof(userAnsObj[val._id]) == "string" ){
			 //console.log(userAnsObj[val._id] +",,"+val.result)
			    if(userAnsObj[val._id].toUpperCase() == val.result.toUpperCase())
				totalMarks+=individMark;
				//console.log("mrks"+totalMarks)
			  }
			  else{
			  var flag = false;
			     userAnsObj[val._id].forEach(function(elm,ind) {
				   if(elm!=val.result[ind]){
				    flag = true;
					return false;
				   }
				 });
				 if(!flag)
				    totalMarks+=individMark;
			  }
			});
			//console.log("marks"+totalMarks)
			var marksObj = {
                                "A0":{"pers" :0, "percnt":0,"text":"0-10","color":"rgb(235, 216, 255)"},
                                "A11":{"pers":0 ,"percnt":0,"text":"11-20","color":"rgb(204, 255, 194)"},
                                "A21":{"pers":0,"percnt":0,"text":"21-30","color":" rgb(245, 231, 187)"},
                                 "A31":{"pers":0,"percnt":0,"text":"31-40","color":" rgb(221, 226, 255)"}
                      };
					  var personCounter = 0;
			db.userstests.findAndModify(
				   {
							query: { _id: empid ,"exams.examid":examid},
							update: {"$set":{ "exams.$.marks":totalMarks} },
							new: true
						}, function(err, docy,lastErrorObject) {
								//console.log(doc)
						if(!err){	
							 io.sockets.emit('users', docy);
						db.userstests.find().sort({_id:1}, function(err, docs) {
							if(!err){
							   console.log(docs)
							  personCounter++;
						        docs.forEach(function(el,indx){
								    el.exams.forEach(function(newel,indx){
									  if(newel.examid == examid)
									   {
									     if(newel.marks >=0 && newel.marks<=10)
												{
												  marksObj["A0"].pers+=1;
												  marksObj["A0"].percnt=  marksObj["A0"].pers / personCounter;
												}
										 else if(newel.marks >=11 &&  newel.marks<=20)
												{
												  marksObj["A11"].pers+=1;
												  marksObj["A11"].percnt=  marksObj["A11"].pers / personCounter;
												  }
										else if(newel.marks >=21 &&  newel.marks<=30)
												{
												  marksObj["A21"].pers+=1;
												  marksObj["A21"].percnt=  marksObj["A21"].pers / personCounter;
												  }
										else if(newel.marks >=31 &&  newel.marks<=40){
												marksObj["A31"].pers+=1;
												marksObj["A31"].percnt=  marksObj["A31"].pers / personCounter;												
												}												
									   }
									 
									});
									
								})
								}
								 io.sockets.emit('results', marksObj);
						   });
											 
										  
					
								 res.jsonp({
								  "marks":totalMarks
								 })
							 }
						});
		}
		// doc is a document in the collection
	});
	
  };
 /*cursor.on('data', function(doc) {
    console.log('new document', doc);
});*/
