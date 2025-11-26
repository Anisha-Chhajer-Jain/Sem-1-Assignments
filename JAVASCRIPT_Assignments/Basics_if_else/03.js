var income=1100000;
var tax;

if(income<=250000)
console.log("No tax");
else if(income>=250001 && income<=500000){
tax=(income*5)/100;
console.log("Payable Tax:-",tax);
}
else if(income>=500001 && income<=1000000){
tax=(income*20)/100;
console.log("Payable Tax:-",tax);
}
else{
tax=(income*30)/100;
console.log("Payable Tax:-",tax);
}