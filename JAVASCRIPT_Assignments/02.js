var bill;
var unit=150;
if(unit<=100){
    bill=unit*5;
    console.log("Bill=",bill);
}
else if(unit>=101 && unit<=200){
    bill=(100*5)+((200-unit)*7);
    console.log("Bill=",bill);
}
else{
    bill=(100*5)+(100*7)+((300-unit)*10);
    console.log("Bill=",bill);
}