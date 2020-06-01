var nu = 9;
var ea = document.querySelector("#ea");
var med = document.querySelector("#med");
var ha = document.querySelector("#ha");

var col = randoms(nu);
var msg = document.querySelector("#msg");
var pickedcol = getcol();
document.querySelector("span").textContent = pickedcol;
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var pla = document.querySelector("#pla");

    ea.addEventListener("click", function(){
        ea.classList.add("selected");
        ha.classList.remove("selected");
        med.classList.remove("selected");
        nu = 3;
        col = randoms(nu);
        pickedcol = getcol();
        document.querySelector("span").textContent = pickedcol;
        h1.style.background = "steelblue";
        msg.textContent = "";
        for(var i = 0; i < squares.length;i++)
        {
            if(col[i])squares[i].style.background = col[i];
            else squares[i].style.display = "none";
        }
    });
    
    med.addEventListener("click", function(){
        nu = 6;
        ha.classList.remove("selected");
        ea.classList.remove("selected");
        med.classList.add("selected");
        col = randoms(nu);
        pickedcol = getcol();
        document.querySelector("span").textContent = pickedcol;
        h1.style.background = "steelblue";
        msg.textContent = "";
        for(var i = 0; i < squares.length ;i++)
        {
            if(i < 6){
            squares[i].style.display = "block"; 
            squares[i].style.background = col[i];
            }
            else squares[i].style.display = "none";
        }
    });

    ha.addEventListener("click", function(){
        nu = 9;
        ha.classList.add("selected");
        ea.classList.remove("selected");
        med.classList.remove("selected");
        col = randoms(nu);
        pickedcol = getcol();
        document.querySelector("span").textContent = pickedcol;
        h1.style.background = "steelblue";
        msg.textContent = "";
        for(var i = 0; i < squares.length;i++)
        {
            squares[i].style.background = col[i];
            squares[i].style.display = "block";
        }
    });

for(var i = 0; i < squares.length; i++)
{
    squares[i].style.background = col[i];
} 
pla.addEventListener("click",function(){
    col = randoms(nu);
    pickedcol = getcol();
    document.querySelector("span").textContent = pickedcol;
    for(var i = 0; i < squares.length; i++)
{
    if(i < nu) squares[i].style.background = col[i];
    else squares[i].style.display = "none";
}
    h1.style.background = "steelblue";
    pla.textContent = "New Colors"
    msg.textContent = "";
});
for(var i =0; i< squares.length; i++)
{
    squares[i].addEventListener("click", function(){
        var clicked = this.style.background;
        if(clicked === pickedcol){
            msg.textContent = "Correct!";
            for(var i = 0; i<nu; i++)
            {
                squares[i].style.background = pickedcol;
            }
            h1.style.background = clicked;
            pla.textContent = "Play Again?";
        }
        else{ 
        this.style.background = "RGB(35, 35, 35)";
        msg.textContent = "Try Again";
        }
    });
}
function getcol(){
    var r = Math.floor(Math.random()*nu);
    return col[r];
};
function randoms(num){
    var colo = [];
    for(var i = 0; i<num;i++)
    {
        var r = Math.floor(Math.random()*256 );
        var g = Math.floor(Math.random()*256 );
        var b = Math.floor(Math.random()*256 );
        colo[i] = "rgb(" + r + ", " + g + ", " + b + ")";
    }
    return colo;
};