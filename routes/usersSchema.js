	var usersSchema = mongos.Schema({
				empid:String,
				pwd:String,
				exams:{
				 examid:String,
				 examdate:{ type: String, default: today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear() },
				 attempts:Number,
				 marks:Number 
				}
		});	// mongoose for mongodb