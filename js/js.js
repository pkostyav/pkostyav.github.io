function changeImage() {
  var image = document.getElementById("changeimage");
  
  if (image.src.match("l2")) {
    image.src = "image/Martin-Garrix-Your-EDM.jpg";
  } 
    else { 
    image.src = "image/Martin-Garrix-Your-EDM.jpg";   
  }  
}
function changeImage_2() {
  var image = document.getElementById("changeimage");
  
  if (image.src.match("l2")) {
    image.src = "image/champshow.jpg";
  } 
    else { 
    image.src = "image/champshow.jpg";   
  }  
}
function changeImage_3() {
  var image = document.getElementById("changeimage");
  
  if (image.src.match("Concert(1)")) {
    image.src = "image/ivb.jpg";
  } 
    else { 
    image.src = "image/ivb.jpg";   
  }  
}
function changeImage_4() {
  var image = document.getElementById("changeimage");
  
  if (image.src.match("Concert(1)")) {
    image.src = "image/Cudi(px).jpg";
  } 
    else { 
    image.src = "image/Cudi(px).jpg";   
  }  
}
function changeImage_5() {
  var image = document.getElementById("changeimage");
  
  if (image.src.match("Concert(1)")) {
    image.src = "image/stay.jpg";
  } 
    else { 
    image.src = "image/stay.jpg";   
  }  
}
/*player img change*/

function changePlayerImage() {
  var image = document.getElementById("zoom");
  
  if (image.src.match("imgonline-com-ua-PicOnPic-stH1eNq5ia35h")) {
    image.src = "image/MGC.jpg";
  } 
    else { 
    image.src = "image/imgonline-com-ua-PicOnPic-stH1eNq5ia35h.png";   
  }  
}
function changePlayerImage2() {
  var image = document.getElementById("zoom1");
  
  if (image.src.match("imgonline-com-ua-PicOnPic-bnXNTMJqRKdM")) {
    image.src = "image/LFM.jpg";
  } 
    else { 
    image.src = "image/imgonline-com-ua-PicOnPic-bnXNTMJqRKdM.png";   
  }  
}
function changePlayerImage3() {
  var image = document.getElementById("zoom2");
  
  if (image.src.match("imgonline-com-ua-PicOnPic-BnohZ1dW2epHd")) {
    image.src = "image/images.jpg";
  } 
    else { 
    image.src = "image/imgonline-com-ua-PicOnPic-BnohZ1dW2epHd.png";   
  }  
}
function changePlayerImage4() {
  var image = document.getElementById("zoom3");
  
  if (image.src.match("imgonline-com-ua-PicOnPic-C8PZH69Ijd7hc")) {
    image.src = "image/cudi.jpg";
  } 
    else { 
    image.src = "image/imgonline-com-ua-PicOnPic-C8PZH69Ijd7hc.png";   
  }  
}
function changePlayerImage5() {
  var image = document.getElementById("zoom4");
  
  if (image.src.match("stayPplay")) {
    image.src = "image/StayP.jpg";
  } 
    else { 
    image.src = "image/stayPplay.png";   
  }  
}

var activeSong;
function stopSong(){
  activeSong.currentTime = 0;
  activeSong.pause();
}


