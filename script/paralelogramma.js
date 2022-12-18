function paralelogram(){
    var a,b,Para;
    a = parseInt(document.getElementById ("oldal").value);
    b = parseInt(document.getElementById ("magassag").value);
    Para = a*b;

    document.getElementById ("Para").innerHTML ="A paralelogramma területe: "+Para;}

function paralelogram2(){
        var c,d,e,edeg,Para2;
        c = parseInt(document.getElementById ("coldal").value);
        d = parseInt(document.getElementById ("doldal").value);
        e = parseInt(document.getElementById ("szog").value);
        edeg = e* (Math.PI/ 180)
        Para2 = c*d*Math.sin(edeg);
    
        document.getElementById ("Para2").innerHTML ="A paralelogramma területe: "+Para2;}