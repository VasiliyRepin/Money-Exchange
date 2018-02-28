// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    //var currency = {"H":199,"Q":1,"D":2,"P":4 }


    var arr=[50,25,10,5,1];
    var arr1=[];
    var kol;
    var i =0;
    var money = {};

    if (currency>10000)
    {
        money.error= "You are rich, my friend! We don't have so much coins for exchange";
        return money;
    }
    else
    {
        while (currency > 0 && i<5)
        {
            kol = parseInt(currency/arr[i]);

            currency= currency - kol*arr[i];

            arr1[i]=kol;
            i++;

        }

            if (arr1[0]>0) {money.H = arr1[0]};
            if (arr1[1]>0) {money.Q = arr1[1]};
            if (arr1[2]>0) {money.D = arr1[2]};
            if (arr1[3]>0) {money.N = arr1[3]};
            if (arr1[4]>0) {money.P = arr1[4]};

        return money;
    }


}



