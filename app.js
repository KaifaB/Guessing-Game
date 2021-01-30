//function to make a randmo color in RGB
function random_rgb() {
    const o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ', ' + o(r()*s) + ', ' + o(r()*s) + ')';
    }
//Make an array of 6 random colors
let colors = [
    random_rgb(),
    random_rgb(),
    random_rgb(),
    random_rgb(),
    random_rgb(),
    random_rgb()
];
//find a random number 0-5 for correct answer
let correct = (Math.floor(Math.random() * 6));
//Add random colors (array) to squares
let squares = document.querySelectorAll(".square");
let rightSquare = colors[correct];
squares.forEach(function(square, index){
    square.style.backgroundColor = colors[index]
});
squares.forEach(function(square, index){
    if(index === correct){
        square.classList.add("right");
    }
});
//Gives title name of the correct RGB
let title = `<h1>${rightSquare}</h1>`;
//Makes title Uppercase
document.querySelector("#title").innerHTML = title.toUpperCase();

//Click EASY Mode
document.querySelector("#easy").addEventListener("click", easy);
function easy(e) {
    e.target.classList.add("picked");
    document.querySelector("#hard").classList.remove("picked");
    document.querySelector("#title").innerHTML = " ";
    document.querySelector("#message").innerHTML = "";
    document.querySelector("#second").innerHTML = "<div></div>";

    let colors = [
        random_rgb(),
        random_rgb(),
        random_rgb()
    ];
    let correct = (Math.floor(Math.random() * 3));

    let squares = document.querySelectorAll(".square");
    let rightSquare = colors[correct];

    squares.forEach(function(square, index){
        square.style.backgroundColor = colors[index]
    });

    squares.forEach(function(square, index){
        square.classList.remove("right");
        if(index === correct){
            square.classList.add("right");
        }
    });

    let title = `<h1>${rightSquare}</h1>`;
    
    document.querySelector("#title").innerHTML = title.toUpperCase();
}

//Click HARD Mode
document.querySelector("#hard").addEventListener("click", hard);
function hard(e) {
    e.target.classList.add("picked");
    document.querySelector("#easy").classList.remove("picked");
    document.querySelector("#message").innerHTML = "";
    document.querySelector("#second").innerHTML = `
    <div class='square' id='bottom1'> </div>
    <div class='square' id='bottom2'> </div>
    <div class='square' id='bottom3'> </div>
    `;

    let colors = [
        random_rgb(),
        random_rgb(),
        random_rgb(),
        random_rgb(),
        random_rgb(),
        random_rgb()
    ];
    
    let correct = (Math.floor(Math.random() * 6));
    
    let squares = document.querySelectorAll(".square");
    let rightSquare = colors[correct];
    squares.forEach(function(square, index){
        square.style.backgroundColor = colors[index]
    });
    
    squares.forEach(function(square, index){
        square.classList.remove("right");
        if(index === correct){
            square.classList.add("right");
        }
    });

    let title = `<h1>${rightSquare}</h1>`;
    
    document.querySelector("#title").innerHTML = title.toUpperCase();
}
    
//New Colors Button
document.querySelector("#new").addEventListener("click", newColors);
function newColors(e){
    let squares = document.querySelectorAll(".square");
    document.querySelector("#message").innerHTML = "";
    if (squares.length == 3){
        colors = [
            random_rgb(),
            random_rgb(),
            random_rgb()
        ]
        let correct = (Math.floor(Math.random() * 3))

        let title = `<h1>${colors[correct]}</h1>`;
        document.querySelector("#title").innerHTML = title.toUpperCase();

        squares.forEach(function(square, index){
            square.style.backgroundColor = colors[index]

        });

        squares.forEach(function(square, index){
            square.classList.remove("right");
            if(index === correct){
                square.classList.add("right");
            }
        });
    } else{
    let squares = document.querySelectorAll(".square");
        colors = [
            random_rgb(),
            random_rgb(),
            random_rgb(),
            random_rgb(),
            random_rgb(),
            random_rgb()
        ]
        let correct = (Math.floor(Math.random() * 6))

        let title = `<h1>${colors[correct]}</h1>`;
        document.querySelector("#title").innerHTML = title.toUpperCase();

        squares.forEach(function(square, index){
            square.style.backgroundColor = colors[index]
        });

        squares.forEach(function(square, index){
            square.classList.remove("right");
            if(index === correct){
                square.classList.add("right");
            }
        });
    }
}

document.querySelector(".contain-table").addEventListener("click", guess);
function guess(e) {
    let squares = document.querySelectorAll(".square");
    if (e.target.classList.contains("right")) {
        rightSquare = e.target.style.backgroundColor;
        document.querySelector("#message").innerHTML = "CORRECT!!!";
        squares.forEach(function(square, index){
            square.style.backgroundColor = `${rightSquare}`;
            square.classList.add("right");
        })
    } 
    else {
    e.target.style.backgroundColor='#000000';
    document.querySelector("#message").innerHTML = "Try again..";
    }
}