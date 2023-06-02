



function onSubmit(){
		var score = 0;
		var noofquestions = 10;
		var answers = ["any","rupee","colombo","second","sin","budd","deh","sig","sinharaja","rice"]
		
		var q1 = document.forms['quiz']['time'].value;
		var q2 = document.forms['quiz']['currency'].value;
		var q3 = document.forms['quiz']['capital'].value;
		var q4 = document.forms['quiz']['dial'].value;
		var q5 = document.forms['quiz']['language'].value;
		var q6 = document.forms['quiz']['religion'].value;
		var q7 = document.forms['quiz']['zoo'].value;
		var q8 = document.forms['quiz']['wonder'].value;
		var q9 = document.forms['quiz']['forest'].value;
		var q10= document.forms['quiz']['meal'].value;
		
		
		for(var i =1; i <= noofquestions; i++){
			if(eval('q' + i) == ''){
				alert("you missed question number" + i);	
			}
		}
		for(var i = 1; i<= noofquestions; i++){
			if(eval('q' + i) == answers[i - 1]){
				score = score + 2;
			}else {
				score = score - 1;
				
				
			}
		
		
		
			
		}
		
		
		document.write("<h3>Your score is " + score + "</h3>");
		document.write("<h3><br>You took  " + (60 - c) + " seconds to finish.</h3>");
		
		if(score>=15){
			document.body.style.backgroundColor = "#39EA3B";
		}else if(score >= 10){
			document.body.style.backgroundColor = "#F5CD2C ";
		}else{
			document.body.style.backgroundColor = "#DF4208";
		}

		}
		
		
		
		
		
		
		var c = 60;
		function timer(){			
			c = c - 1;
			if (c < 60){
				time.innerHTML = c;
			}
			if(c < 1){
				window.clearInterval(update);
				alert("Time is Over!")
			}
		}
		
		update = setInterval("timer()", 1000);

		
		
		
