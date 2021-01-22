

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}



function budgetCalculator(Ghori, Phone, laptop){
    var ghoriPrice = Ghori * 50;
    var phonePrice = Phone * 100;
    var laptopPrice = laptop *500;
    var totalPrice = ghoriPrice + phonePrice + laptopPrice;

return totalPrice;
}





function hotelCost(days){
    var cost = 0;
    if (days < 0){
        return "Erorr!!! Days cannot be found...";
    } else if (days <= 10){
        var cost = days * 100;
    } else if (days <= 20){
       var firstTenDays = 10 * 100;
       var remainingDays = days - 10;
       var secondTenDays = remainingDays * 80;
       cost = firstTenDays + secondTenDays; 
    }else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = days - 20;
        var thirdTenDays = remainingDays + 50;
        cost = firstTenDays + secondTenDays + thirdTenDays;
    }
  return cost;
}









function megaFriend(names){
    var maxWord = names[0];
    for ( var i = 0; i <names.length; i++){
        var eliment = names[i];
        if(eliment.length > maxWord.length){
            maxWord = eliment;

        }
    }
    return maxWord;
}