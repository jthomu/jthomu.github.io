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
        if(compassHeading > 315 || compassHeading < 45) {
                text_area.textContent = "unenthused groupie are announcing some new developments:";
        }

        if(compassHeading >= 45 && compassHeading < 135) {
                text_area.textContent = "Our Promotional Department is currently in contact with Untitled Folder, [http://www.untitledfolder.net/], to discuss the release of an album of material. Further details have been redacted and will be released on an undisclosed date.";
        }

        if(compassHeading >= 135 && compassHeading < 225) {
                text_area.textContent = "Our Research & Development Depart will be exploring live performing options as well as recording possibilities including but not limited to 3D printing, laser cutting, international performing, live coding for sound, and neural network based composition. ";
        }

        if(compassHeading >= 225 && compassHeading < 315) {
                text_area.textContent = "unenthused groupie: unoriginal music for unoriginal people. unenthused groupie is Alpha and Omega, the titanium zombie god of the post-rave, and progenator of the most teeth-grindest tunes in the fucking game. unenthused groupie is a corperation engaged in pop cultural production. Hail Atomic Sex Kitten! Hail A Complex Human Person!";
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


