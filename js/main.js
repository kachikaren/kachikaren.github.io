$(document).ready(init);

function init(){
   $("#btn-1").mouseover(function(){
	 $(this).removeClass("mdi mdi-lightbulb-outline");
	 $(this).addClass("mdi mdi-lightbulb-on-outline");  	
   });

   $("#btn-1").mouseout(function(){
   	$(this).removeClass("mdi mdi-lightbulb-on-outline");
	 $(this).addClass("mdi mdi-lightbulb-outline");
	   	
   });
};

/*Don't repeat "function init() for the same function"*/

$("#btn-2").mouseover(function(){
	 $(this).removeClass("mdi mdi-arrow-right-drop-circle-outline");
	 $(this).addClass("mdi mdi-arrow-down-drop-circle");  	
   });

   $("#btn-2").mouseout(function(){
   	$(this).removeClass("mdi mdi-arrow-down-drop-circle");
	 $(this).addClass("mdi mdi-arrow-right-drop-circle-outline"); 	
   });


$("#btn-3").mouseover(function(){
	 $(this).removeClass("mdi mdi-lightbulb-outline");
	 $(this).addClass("mdi mdi-lightbulb-on-outline");  	
   });

   $("#btn-3").mouseout(function(){
   	$(this).removeClass("mdi mdi-lightbulb-on-outline");
	 $(this).addClass("mdi mdi-lightbulb-outline"); 	
   });

$("#btn-4").mouseover(function(){
	 $(this).removeClass("mdi mdi-arrow-right-drop-circle-outline");
	 $(this).addClass("mdi mdi-arrow-down-drop-circle");  	
   });

   $("#btn-4").mouseout(function(){
   	$(this).removeClass("mdi mdi-arrow-down-drop-circle");
	 $(this).addClass("mdi mdi-arrow-right-drop-circle-outline"); 	
   });

$("#btn-2").on('click', function() {
		$('body').animate({ scrollTop: 800}, 'slow');
	});

$("#btn-4").on('click', function() {
		$('body').animate({ scrollTop: 800}, 'slow');
	});

//!var firstname = "Karen";
//!alert(firstname +" is awsome!");