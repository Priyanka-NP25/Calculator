resultPlaceHolder = document.getElementById("answer");
resultPlaceHolder.style.display = "none";
function tipCalculator(){
    const billAmount = parseFloat(document.getElementById("total-bill-amount").value);
    const serviceQuality = parseFloat(document.getElementById("service-quality").value);
    const numOfPeople = parseInt(document.getElementById("number-of-people").value);
    if(billAmount === "" || serviceQuality == 0){
        alert("Please Enter Values");
        return;
    }
    if(isNaN(numOfPeople) || numOfPeople <1){
        alert("Please check number of people");
        return;
    }
    var totalTip = (billAmount*serviceQuality);
    totalTip = Math.round(totalTip*100)/100;
    const totalBill = billAmount + totalTip;
    const tipPerPerson = totalTip/numOfPeople;
    document.getElementById("actual-bill").innerHTML = "&#8377;" + billAmount;
    document.getElementById("total-bill").innerHTML = "&#8377;" + totalBill;
    document.getElementById("tip-per-person").innerHTML = "&#8377;" + tipPerPerson;
    document.getElementById("total-tip").innerHTML = "&#8377;" + totalTip;
    document.getElementById("answer").style.display = "block";
}
document.getElementById("calculate").onclick = function(){
    tipCalculator();
}