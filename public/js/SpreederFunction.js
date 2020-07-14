window.onload = function(){
	  var startButton = document.getElementById("start");
	  startButton.onclick = start;

	  var stopButton = document.getElementById("stop");
	  stopButton.onclick = stop;
	}


	var timer;
	
	function start() {

	   var text = document.getElementById("strings").value;
	   var list = text.split(" ");
      var Speed = document.getElementById("speed");
      var CurrentSpeed = Speed.options[Speed.selectedIndex].value;
      

        
	  runDisplay(list, "display", CurrentSpeed);
   }
var timer;
	function runDisplay(data, id, CurrentSpeed) {
	  var reader = document.getElementById(id);
      var Medium=document.getElementById("Medium");
      var Bigger=document.getElementById("Bigger");
      var Huge=document.getElementById("Huge");
      if(Medium.checked==true){
        reader.style.fontSize="36pt";
      }
      else if(Bigger.checked==true){
        reader.style.fontSize="50pt";
      }
      else{
        reader.style.fontSize="70pt";
      }


      var index = 0;
	  // clear any prior timer so we never have more than one
	  if (timer) {
	    clearInterval(timer);
	  }
	  if (data.length) {
	    timer = setInterval(function() {
	      reader.innerHTML = data[index++];
        //so it stops at the last word and doesnt continue
        if(index==data.length){
          stop();
        }
	      index = index % data.length;
	    }, CurrentSpeed);

      
	  }
	}

	function stop() {
	  clearInterval(timer);
	  timer = null;
	} 