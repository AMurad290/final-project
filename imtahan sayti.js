let counts=setInterval(updated,0);
let upto=0;
let upto1 = 510;
function updated(){
    var count= document.getElementById("n1");
    count.innerHTML=++upto;
    if(upto===510)
    {
        clearInterval(counts);
        counts = setInterval(updatedTill510,100);
    }
}
function updatedTill510(){
    var count= document.getElementById("n1");
    count.innerHTML=++upto1;
    if(upto1===520)
    {
        clearInterval(counts);
    }
}



let counts1=setInterval(updated1,3);
let upto2=0;
let upto3 = 630;
function updated1(){
    var count1= document.getElementById("n2");
    count1.innerHTML=++upto2;
    if(upto2===630)
    {
        clearInterval(counts1);
        counts1 = setInterval(updated1Till250,100);
    }
}
function updated1Till250(){
    var count1= document.getElementById("n2");
    count1.innerHTML=++upto3;
    if(upto3===640)
    {
        clearInterval(counts1);
    }
}

let counts2=setInterval(updated2,2);
let upto4=0;
let upto5 = 48;
function updated2(){
    var count2= document.getElementById("n3");
    count2.innerHTML=++upto4;
    if(upto4===48)
    {
        clearInterval(counts2);
        counts2 = setInterval(updated2Till500,100);
    }
}
function updated2Till500(){
    var count2= document.getElementById("n3");
    count2.innerHTML=++upto5;
    if(upto5===55)
    {
        clearInterval(counts2);
    }
}
 
let counts3=setInterval(updated3,3)
let upto6=0;
let upto7=7;
function updated3(){
    var count3= document.getElementById("n4");
    count3.innerHTML=++upto6
    if(upto6===7)
    {
        clearInterval(counts3);
        counts3 = setInterval(updated3Till500,100);
    }
}
function updated3Till500(){
    var count3= document.getElementById("n4");
    count3.innerHTML=++upto7;
    if(upto7===15){
        clearInterval(counts3);
    }
}