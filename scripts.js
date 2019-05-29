var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".squares");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected")
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none"
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block"
    }
}
);

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "SteelBlue";
});


for(var i = 0; i < squares.length; i++){
    //add initial color to square
    squares[i].style.backgroundColor = colors[i];

    //add eventListerner to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked squares & compare color to pickedColor
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            messageDisplay.textContent = "correct"
            resetButton.textContent = "Play again?"
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent= "try again"
        }
    });
}


function changeColors(colors){
    for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors;
    }
}


function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    
    for (var i = 0; i < num; i++){
 arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick red color from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick green color from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick blue color from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}