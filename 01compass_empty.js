//called by device orientation listener - contains information about the change in orientation (stored as argument "e")
oriented = function(e) {
        heading = e.webkitCompassHeading;
        alpha = e.alpha;
        if(e.webkitCompassHeading) {
            compassHeading = e.webkitCompassHeading;
        }   else  { 
            compassHeading = 360 - e.alpha;
        }
//&& is "and", while || is "or"
        if(compassHeading > 315 || compassHeading < 0) {
                text_area.textContent = "But";
        }

        if(compassHeading >= 0 && compassHeading < 45) {
                text_area.textContent = "if";
        }

        if(compassHeading >= 45 && compassHeading < 90) {
                text_area.textContent = "thats the way";
        }

        if(compassHeading >= 90 && compassHeading < 135) {
                text_area.textContent = "its";
        }

        if(compassHeading >= 135 && compassHeading < 180) {
                text_area.textContent = "gotta be";
        }

        if(compassHeading >= 180 && compassHeading < 225) {
                text_area.textContent = "then thats";
        }

        if(compassHeading >= 225 && compassHeading < 270) {
                text_area.textContent = "the way";
        }

        if(compassHeading >= 270 && compassHeading < 300) {
                text_area.textContent = "its";
        }

        if(compassHeading >= 300 && compassHeading < 315) {
                text_area.textContent = "gotta be";
        }
        
         
        //calls function to alter content based on heading
       // myOrientation();
    }

//device orientation that can track orientation on space
	window.addEventListener('deviceorientation', oriented, false);
    


//find the tag on the html page to put text into
var text_area = document.getElementById("compass_content");


    function myOrientation(){
     
            text_area.textContent = "empty compass";
        
	}


