var lastScroll = 0;
$(window).scroll(function(e) {
	 var st = $(this).scrollTop();
	 
     //Determines up-or-down scrolling
     if (st > lastScroll){
    	 
						    	 if(st>100 && st < 140)
								  {
								    $("#howitworks_downArrow").css({
								    	"height":"99px"
								    });
								    $("#titledescription").css({
								    	"right":"14%"
								    });
								  }  
						    	 else if(st>400 && st < 420)
			    				  {
			    				    $("#howitworks").addClass("howAnimator");
			    				  }
						    	 else if(st>460 && st < 483)
			    				  {
						    		 $("#howitworks_downArrow").css({
									    	"height":"0px"
									    });
			    				    $("#titledescription").css({
								    	"top":"-100%"
								    });
			    				  }
						    	 else if(st>485 && st < 500)
			    				  {
						    		 $(".nav1").css({
				    				    	"width":"137px"
				    				    });
						    		 $("#signINmessage").css({
									    	"left":"40%"
									    });
			    				  }
						    	 else if(st>700 && st < 760)
			    				  {
						    		 $(".nav1").css({
				    				    	"width":"0"
				    				    });
						    		 $("#signINmessage").css({
									    	"top":"200%"
									    });
						    		 
						    		 $(".nav2").css({
				    				    	"width":"114px"
				    				    });
						    		 $("#regMesg").css({
				    				    	"top":"45%"
				    				    });
						    		 
						    		 
			    				  }
						    	  else if(st>900 && st < 970)
			    				  {
						    		  $(".nav2").css({
				    				    	"width":"0"
				    				    }); 
						    		  $("#regMesg").css({
				    				    	"top":"-45%"
				    				    });
						    		  
						    		  
						    		  $("#Iamadmin").css({
						    			  "left": "45%",
						    		       "top": "45%"
						    		  });
						    		  $("#IamadminICON").css({
						    			  "right": "20%",
						    		       "top": "45%"
						    		  });
			    				  }
						    	  else if(st>1070 && st < 1140)
			    				  {
						    		  
						    		  $("#Iamadmin").css({
						    			  "left": "-145%",
						    		       "top": "45%"
						    		  });
						    		  $("#IamadminICON").css({
						    			  "right": "-120%",
						    		       "top": "45%"
						    		  });
						    		  
						    		  $("#takethemAllicon").css({
						    			  "top":"45%"
						    		  });
						    		  $("#takethemAll").css({
						    			 "bottom": "30%"
						    		  });
			    				  }
						    	  else if(st>1240 && st < 1290)
			    				  {
						    		  $("#takethemAllicon").css({
						    			  "top":"145%"
						    		  });
						    		  $("#takethemAll").css({
						    			 "bottom": "130%"
						    		  }); 
						    		  
						    		  $("#examscheduler").css({
						    			  "top": "45%",
						    		      "left": "35%"
						    		  });
						    		  $("#examschedulericon").css({
						    			 "right": "25%",
						    			  "top": "45%"
						    		  });
			    				  }
						    	  else if(st>1300 && st < 1320)
			    				  {
									  $("#attendees").css({
						    			  "left":"50%"
						    		  });
			    				  }
						    	  else if(st>1360 && st < 1400)
			    				  {
									  $(".commonclass").css({
						    			  "opacity":"1",
						    			  "font-size":"80px"
						    		  });
									  $("#howitworks_downArrow").css({
									    	"height":"99px"
									    });
									  
									  
									  $("#examscheduler").css({
						    			  "top": "45%",
						    		      "left": "-135%"
						    		  });
									
						    		  $("#examschedulericon").css({
						    			 "right": "-125%",
						    			  "top": "45%"
						    		  });
						    		  
						    		  
						    		  $("#examtakericon").css({
						    			  "top":"45%"
						    		  });
						    		  $("#examtaker").css({
						    			 "bottom": "30%"
						    		  }); 
						    		  
			    				  }
						    	 
						    	  else if(st>1500 && st < 1560)
			    				  {
									  $(".commonclass").css({
						    			  "opacity":"0",
						    			  "font-size":"50px"
						    		  });
									  $("#attendees").css({
						    			  "left":"-50%"
						    		  });
									  $("#howitworks_downArrow").css({
									    	"height":"0px"
									    });
									  
						    		  $("#examtakericon").css({
						    			  "top":"145%"
						    		  });
						    		  $("#examtaker").css({
						    			 "bottom": "130%"
						    		  }); 
						    		  
						    		  $("#timeup").css({
						    			 "transform":"rotateY(360deg)" 
						    		  });
						    		  $("#timeupicon").css({
							    			 "transform":"rotateY(360deg)" 
							    		  });
			    				  }
						    	  else if(st>1640 && st < 1700)
			    				  {
						    		  $("#timeup").css({
							    			 "transform":"rotateY(90deg)" 
							    		  });
							    		  $("#timeupicon").css({
								    			 "transform":"rotateY(90deg)" 
								    		  });
							    		  
							    		 $("#eval").css({
							    			 "transform":"rotateY(0deg)" ,
							    			 "left":"60%"
							    		  });
							    		  $("#evalicon").css({
								    			 "transform":"rotateY(0deg)" ,
								    			 "left":"45%"
								    		  });
							    	
			    				  }
						    	  else if(st>1800 && st < 1960)
			    				  {
						    		  $("#eval").css({
							    			 "transform":"rotateY(90deg)" ,
							    			 "left":"50%"
							    		  });
							    		  $("#evalicon").css({
								    			 "transform":"rotateY(90deg)" ,
								    			 "left":"50%"
								    		  });
							    		  $("#thanks").addClass("animatorUMB");
							    		  
							    		  
			    				  }
	     }
     else {
							  if(st>350 && st < 420)
								  {
								    $("#howitworks").removeClass("howAnimator");
								  }
							  else if(st>100 && st < 140)
							  {
							    $("#howitworks_downArrow").css({
							    	"height":"0px"
							    });
							    $("#titledescription").css({
							    	"right":"-100%"
							    })
							  } 
							  else if(st>450 && st < 483)
		    				  {
		    				    $("#titledescription").css({
							    	"top":"50%"
							    });
		    				    $("#howitworks_downArrow").css({
							    	"height":"99px"
							    });
		    				  }
							  else if(st>485 && st < 500)
		    				  {
					    		 $(".nav1").css({
			    				    	"width":"0"
			    				    });
					    		 $("#signINmessage").css({
								    	"left":"-100%"
								    });
		    				  }
							  else if(st>700 && st < 760)
		    				  {
					    		 $(".nav1").css({
			    				    	"width":"137px"
			    				    });
					    		 $("#signINmessage").css({
								    	"top":"25%"
								    });
					    		 
					    		 $(".nav2").css({
			    				    	"width":"0"
			    				    });
					    		 $("#regMesg").css({
			    				    	"top":"-45%"
			    				    });
		    				  }
							  else if(st>900 && st < 970)
		    				  {
								  $(".nav2").css({
			    				    	"width":"114px"
			    				    }); 
					    		  $("#regMesg").css({
			    				    	"top":"45%"
			    				    });
					    		  
					    		  $("#Iamadmin").css({
					    			  "left": "0",
					    		       "top": "-100px"
					    		  });
					    		  $("#IamadminICON").css({
					    			  "right": "-15%",
					    		       "top": "-45%"
					    		  });
		    				  }
							  else if(st>1070 && st < 1140)
		    				  {
					    		  
								  $("#Iamadmin").css({
					    			  "left": "45%",
					    		       "top": "45%"
					    		  });
					    		  $("#IamadminICON").css({
					    			  "right": "20%",
					    		       "top": "45%"
					    		  });
					    		  
					    		  $("#takethemAllicon").css({
					    			  "top":"-100px"
					    		  });
					    		  $("#takethemAll").css({
					    			 "bottom": "-100%"
					    		  });
		    				  }
							  else if(st>1240 && st < 1290)
		    				  {
					    		  $("#takethemAllicon").css({
					    			  "top":"45%"
					    		  });
					    		  $("#takethemAll").css({
					    			 "bottom": "30%"
					    		  }); 
					    		  $("#examscheduler").css({
					    			  "top": "145%",
					    		      "left": "0%"
					    		  });
					    		  $("#examschedulericon").css({
					    			 "right": "0%",
					    			  "top": "145%"
					    		  });
		    				  }
							  else if(st>1300 && st < 1320)
		    				  {
								  $("#attendees").css({
					    			  "left":"-50%"
					    		  });
		    				  }
							  else if(st>1360 && st < 1400)
		    				  {
								  $(".commonclass").css({
					    			  "opacity":"0",
					    			  "font-size":"50px"
					    		  });
								  $("#howitworks_downArrow").css({
								    	"height":"0px"
								    });
								  
								  $("#examscheduler").css({
					    			  "top": "45%",
					    		      "left": "35%"
					    		  });
					    		  $("#examschedulericon").css({
					    			 "right": "25%",
					    			  "top": "45%"
					    		  });
					    		  
					    		  $("#examtakericon").css({
					    			  "top":"-100px"
					    		  });
					    		  $("#examtaker").css({
					    			  "bottom": "-100%"
					    		  }); 
		    				  }
							  else if(st>1500 && st < 1560)
		    				  {
								  $(".commonclass").css({
					    			  "opacity":"1",
					    			  "font-size":"80px"
					    		  });
								  $("#attendees").css({
					    			  "left":"50%"
					    		  });
								  $("#howitworks_downArrow").css({
								    	"height":"99px"
								    });
								  
					    		  $("#examtakericon").css({
					    			  "top":"45%"
					    		  });
					    		  $("#examtaker").css({
					    			 "bottom": "30%"
					    		  }); 
					    		  $("#timeup").css({
						    			 "transform":"rotateY(90deg)" 
						    		  });
						    		  $("#timeupicon").css({
							    			 "transform":"rotateY(90deg)" 
							    		  });
					    		  
		    				  }
							  else if(st>1640 && st < 1700)
		    				  {
					    		  $("#timeup").css({
						    			 "transform":"rotateY(360deg)" 
						    		  });
						    		  $("#timeupicon").css({
							    			 "transform":"rotateY(360deg)" 
							    		  });
							    		  $("#eval").css({
								    			 "transform":"rotateY(90deg)" ,
								    		  });
								    		  $("#evalicon").css({
									    			 "transform":"rotateY(90deg)" ,
									    		  });
						    	
		    				  }
							  else if(st>1800 && st < 1960)
		    				  {
					    		  $("#eval").css({
						    			 "transform":"rotateY(0deg)" ,
						    			 "left":"60%"
						    		  });
						    		  $("#evalicon").css({
							    			 "transform":"rotateY(0deg)" ,
							    			 "left":"40%"
							    		  });
						    		 $("#thanks").removeClass("animatorUMB");  
						    		  
		    				  }
}
	
		  lastScroll = st;
		});	
