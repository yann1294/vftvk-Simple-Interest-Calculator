function compute()
{
    var p = document.getElementById("principal").value;
    console.log(p);

    if(p<1){
        alert('Enter a positive number');
        return false;
    }
    var rate = document.getElementById('rate').value;
    console.log(rate);
    var years = document.getElementById('years').value;
    console.log(years);
    var interest = p*years*rate/100;
    console.log(interest);
    var year = new Date().getFullYear()+parseInt(years);
    console.log(year);
    var res = "If you deposit, <span class = 'highlight'>" + p+
            "</span> ,<br> at an interest rate of <span class = 'highlight'>" +rate+
            "</span>. <br> You will receive an amount of <span class = 'highlight'>" +interest+
            "</span>, <br> in the year <span class = 'highlight'>"+year;
  document.getElementById("result").innerHTML = res;
    console.log("inner html executed");
}

function updateRate()
{
    var ratevalue = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=ratevalue;
}