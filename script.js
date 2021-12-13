document.getElementById("x1").addEventListener("click",x1,!0),
document.getElementById("x2").addEventListener("click",x2,!0),
document.getElementById("x3").addEventListener("click",x3,!0),
document.getElementById("y1").addEventListener("click",y1,!0),
document.getElementById("y2").addEventListener("click",y2,!0),
document.getElementById("y3").addEventListener("click",y3,!0),
document.getElementById("z1").addEventListener("click",z1,!0),
document.getElementById("z2").addEventListener("click",z2,!0),
document.getElementById("z3").addEventListener("click",z3,!0);
let turno = {
    atual : 0,
    get : function(){
        return this.atual},
set : function(e){this.atual=e}},
x=[],
o=[],
jogo=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

function checar(e){
    for(let t=0,n=0;n<jogo.length;n++)
    {for(let c=0;c<jogo[n].length;c++)
    for(let r=0;r<e.length;r++)jogo[n][c]===e[r]&&(3===++t&&1===turno.get()?(alert("PYTHON GANHOU!!!"),
    resetar()):3===t&&0===turno.get()&&(alert("JAVASCRIPT GANHOU!!!"),
    resetar()));t=0}x.length+o.length===9&&(alert("DEU EMPATE :/"),
    resetar())}function resetar(){document.getElementById("x1").innerHTML="",
    document.getElementById("x2").innerHTML="",
    document.getElementById("x3").innerHTML="",
    document.getElementById("y1").innerHTML="",
    document.getElementById("y2").innerHTML="",
    document.getElementById("y3").innerHTML="",
    document.getElementById("z1").innerHTML="",
    document.getElementById("z2").innerHTML="",
    document.getElementById("z3").innerHTML="",
    x=[],
    o=[],
    turno.set(0)}
        function x1()
    {""===document.getElementById("x1").innerHTML&&
    (0===turno.get()?
    (document.getElementById("x1").innerHTML=' <img src="../img/py.png" widith ="140" height = "140" alt=""> ',
    turno.set(1),x.push(1),checar(x)):1===turno.get()&&
    (document.getElementById("x1").innerHTML='<img src="../img/js.png" widith ="140" height = "140" alt="">',
    turno.set(0),o.push(1),checar(o)))}function x2()
    {""===document.getElementById("x2").innerHTML&&(0===turno.get()?(
    document.getElementById("x2").innerHTML=' <img src="../img/py.png" widith ="140" height = "140" alt=""> ',
    turno.set(1),x.push(2),checar(x)):1===turno.get()&&
    (document.getElementById("x2").innerHTML='<img src="../img/js.png" widith ="140" height = "140" alt="">',
    turno.set(0),o.push(2),checar(o)))}function x3()
    {""===document.getElementById("x3").innerHTML&&(0===turno.get()?
    (document.getElementById("x3").innerHTML=' <img src="../img/py.png" widith ="140" height = "140" alt=""> ',
    turno.set(1),x.push(3),checar(x)):1===turno.get()&&
    (document.getElementById("x3").innerHTML='<img src="../img/js.png" widith ="140" height = "140" alt="">',
    turno.set(0),o.push(3),checar(o)))}function y1()
    {""===document.getElementById("y1").innerHTML&&(0===turno.get()?
    (document.getElementById("y1").innerHTML=' <img src="../img/py.png" widith ="140" height = "140"alt=""> ',
    turno.set(1),x.push(4),checar(x)):1===turno.get()&&
    (document.getElementById("y1").innerHTML='<img src="../img/js.png" widith ="140" height = "140" alt="">',
    turno.set(0),o.push(4),checar(o)))}function y2()
    {""===document.getElementById("y2").innerHTML&&(0===turno.get()?
    (document.getElementById("y2").innerHTML=' <img src="../img/py.png" widith ="140" height = "140" alt=""> ',
    turno.set(1),x.push(5)):1===turno.get()&&(checar(x),
    document.getElementById("y2").innerHTML='<img src="../img/js.png" widith ="140" height = "140" alt="">',
    turno.set(0),o.push(5),checar(o)))}function y3()
    {""===document.getElementById("y3").innerHTML&&(0===turno.get()?
    (document.getElementById("y3").innerHTML=' <img src="../img/py.png" widith ="140" height = "140" alt=""> ',
    turno.set(1),x.push(6),checar(x)):1===turno.get()&&
    (document.getElementById("y3").innerHTML='<img src="../img/js.png" widith ="140" height = "140" alt="">',
    turno.set(0),o.push(6),checar(o)))}function z1()
    {""===document.getElementById("z1").innerHTML&&(0===turno.get()?
    (document.getElementById("z1").innerHTML=' <img src="../img/py.png" widith ="140" height = "140" alt=""> ',
    turno.set(1),x.push(7),checar(x)):1===turno.get()&&
    (document.getElementById("z1").innerHTML='<img src="../img/js.png"widith ="140" height = "140" alt="">',
    turno.set(0),o.push(7),checar(o)))}function z2()
    {""===document.getElementById("z2").innerHTML&&(0===turno.get()?(
    document.getElementById("z2").innerHTML=' <img src="../img/py.png" widith ="140" height = "140" alt=""> ',
    turno.set(1),x.push(8),checar(x)):1===turno.get()&&
    (document.getElementById("z2").innerHTML='<img src="../img/js.png" widith ="140" height = "140" alt="">',
    turno.set(0),o.push(8),checar(o)))}function z3()
    {""===document.getElementById("z3").innerHTML&&(0===turno.get()?
    (document.getElementById("z3").innerHTML=' <img src="../img/py.png" widith ="140" height = "140" alt=""> ',
    turno.set(1),x.push(9),checar(x)):1===turno.get()&&
    (document.getElementById("z3").innerHTML='<img src="../img/js.png" widith ="140" height = "140" alt="">',
    turno.set(0),o.push(9),checar(o)))}
