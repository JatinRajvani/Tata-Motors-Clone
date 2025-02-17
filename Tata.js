var imageno =1;
displayimg(imageno);

var autoSlide = setInterval(() => nextimg(1), 4000);

function nextimg(n){
    displayimg(imageno += n)
}

function CurrentSlide(n) {
    displayimg(imageno = n)
}

function displayimg(n){
    var i;
    var image = document.getElementsByClassName("Parent1");
  

    if(n > image.length){
        imageno = 1;
    } if(n < 1){
        imageno = image.length;
    }   for(i=0; i<image.length; i++){
        image[i].style.display = "none";
    }
        image[imageno - 1].style.display ="block";
}