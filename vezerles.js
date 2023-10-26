var y = document.getElementById("clock");
var w = document.getElementById("slideshow-container");

function currentTime() {
    
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    //let session = "AM";
    /*if(hh > 12){
        session = "PM";
    }*/
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
   
    let time = hh + ":" + mm + ":" + ss + " ";// + session;

    document.getElementById("clock").innerText = time; 
    var t = setTimeout(function(){ currentTime() }, 1000); 
    console.log("currenttime");
}

var elem = document.documentElement;
var x = document.getElementById("button");

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    }

    else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    }
    else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    
    x.style.display = "none"; //button eltüntetése

}

window.addEventListener(
    "keydown",
    (event) => {
      if(event.code === "Escape"){
        //alert(`KKKKKey Pressed: ${event.key}\n ESC key pressed: ${event.code}\n`);
        x.style.display = "block";  //button újra látható
      }

    },
    true,
  );


//Slideshow vezérlése
var slideIndex = 0;
             
function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
                    
    slides[slideIndex-1].style.display = "block";  
                    
    setTimeout(showSlides, 4000); // Change image every 3 seconds
    //w.style.display = "none";
    /*console.log("masodikesemeny");
    const p = document.createElement("p");
    p.textContent = `KeyboardEvent; VALAMI MÁS TÖRTÉNIK!`;
    w.appendChild(p);*/
}


function timer1(){
    y.style.display = "block";
    w.style.display = "none";
    console.log("timer 1");
}

function timer2(){
    y.style.display = "none";
    w.style.display = "block";
    console.log("timer 2");
}

function Main(){
    //var w = setTimeout(function(){ currentTime(), masodikEsemeny() }, 10000);
    //setTimeout(timer, 15000)
    currentTime();
    
    //masodikEsemeny();
    showSlides();
    w.style.display = "none";
    setInterval(timer1, 10000) 
    setInterval(timer2, 15000)
}

Main();

