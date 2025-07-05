const con = document.querySelector(".container");

function generate(n){
//var squares = new Array();
for ( var i =0 ; i <n ;i++)
{
    //squares[i] = new Array();
    var newline = document.createElement("div");
    newline.className = "outbox";
    newline.style.cssText = "display:flex; flex:1;background-color:rgb(83, 255, 246) ;gap: 1px;";

    for(var j =0;j<n;j++)
    {
        let square= document.createElement("div");
        square.className = "inbox";
        square.style.cssText="flex:1;background-color:rgb(80, 167, 218);border: 2px solid;";
        square.style.aspectRatio = "1/1";
        square.addEventListener("mouseenter", () => {
                    square.style.backgroundColor = "#FFFFFF";
                       });
        square.addEventListener("mouseleave", () => {
                    square.style.backgroundColor = "rgb(3, 58, 90)";
                       });
        newline.appendChild(square);
    }
    con.appendChild(newline);
   

}
}
function remov()
{
    while (con.firstChild)
    {
        con.removeChild(con.firstChild);
    }
}
 const b = document.querySelector(".butt");

    b.addEventListener("click",()=>
    {
        let n = prompt("Enter gride side");
        remov();
        generate(parseInt(n));
    });
const c = document.querySelector(".clear");
     c.addEventListener("click",()=>
    {   
        let n = con.childElementCount;
        remov();
        generate(n);
    });
