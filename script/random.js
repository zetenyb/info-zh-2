function rando() {
    
    var arr = new Array (1, 2, 3, 4, 5,)
    1=document.getElementById ("egy").value
    2=document.getElementById ("ketto").value
    3=document.getElementById ("harom").value
    4=document.getElementById ("negy").value
    5=document.getElementById ("ot").value
    
    const shuffled = [arr].sort(() => 0.5 - Math.random());
   var randomok =  shuffled.slice(0, 3);

  document.getElementById ("randomok").innerHTML= "Három véletlenszerű elem "+ randomok; }