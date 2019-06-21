
var main = document.getElementById("main-container");
var image = document.getElementById("image-container");

main.style.width = 500 + 'px';
main.style.height = 500 + 'px';
main.style.overflow = 'hidden';
main.style.position = 'relative';

image.style.width = 500 + 'px';
image.style.height = 500 + 'px';
image.style.top = 200 + 'px';
image.style.left = 500 + 'px';
image.style.position = 'relative';





var imageimg = document.querySelectorAll('#image-container img');

var button1=document.createElement('button');
button1.setAttribute('id','button1');
main.appendChild(button1);
button1.style.width = 70 + 'px';
button1.style.height = 30 + 'px';
button1.style.position = 'absolute';
button1.style.top = 330 + 'px';
button1.style.zIndex = 10;
button1.innerHTML = 'previous';

var button2=document.createElement('button');
button2.setAttribute('id','button2');
main.appendChild(button2);
button2.style.width = 70 + 'px';
button2.style.height = 30 + 'px';
button2.style.position = 'absolute';
button2.style.top = 330 + 'px';
button2.style.left = 400 + 'px';
button2.style.zIndex = 10;
button2.innerHTML = 'next';

var arr = [];
var leng = imageimg.length;

for(var i =0; i < leng; i++){
    arr.push(document.createElement('button'));
}

for(var i = 0; i < leng; i++){
    main.appendChild(arr[i]);
arr[i].style.width = 20 + 'px';
arr[i].style.height = 30 + 'px';
arr[i].style.position = 'absolute';
arr[i].style.top = 430 + 'px';
arr[i].style.left = 200 + i*30 + 'px';
arr[i].style.zIndex = 10;
arr[i].innerHTML = i+1;
arr[i].style.borderRadius=50 + '%';





}   



imageimg.forEach(function (value, index) {
    value.style.position = 'absolute';
    value.style.width = 100 + '%';
    value.style.left = 500 * index + 'px';

});

function imageSlider() {
    var imagecontainer = document.getElementById('image-container');
    var x = 0;


    var interval = setInterval(function () {

        imagecontainer.style.marginLeft = x + 'px';
        x--;
        
        if (x == -1500) {
            
            var timeout=setTimeout(function()
            {
                clearInterval(interval);
                imageSlider();


            },1000)
            
        }



    }, 5);

}

imageSlider();

var button1 = document.querySelector("#button1")
button2 = document.querySelector("#button2")
current = 0;


function reset() {
    for (let i = 0; i < imageimg.length; i++) {
        imageimg[i].style.display = "none";
    }
}


function startSlide() {

    imageimg[0].style.display = "block";
}


function slideLeft() {
    reset();
    imageimg[current - 1].style.display = "block";
    current--;
}

function slideRight() {
    reset();
    imageimg[current + 1].style.display = "block";
    current++;
}


button1.addEventListener("click", function () {
    if (current === 0) {
        current = imageimg.length;
    }
    slideLeft();
});

button2.addEventListener("click", function () {
    if (current === imageimg.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();








