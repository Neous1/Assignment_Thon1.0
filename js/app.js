var rental = {
    vehicles:[
    {
        type:"Sedan",
        avail:true,
        qty:9,
        price:10.99
    },
    {
        type:"SUV",
        avail:true,
        qty:6,
        price:15.99
    },
    {
        type:"Sports",
        avail:true,
        qty:5,
        price:21.99
    }

    ],
    displayAll: function(){
        var len = rental.vehicles.length;
        for (var i =0; i<len;i++){
            console.log(rental.vehicles[i])
        }

    },
    displayType: function(){
        var len = rental.vehicles.length;
        for (var i =0; i<len;i++){
            console.log(rental.vehicles[i].type)
        }

    },
    displayPrice: function(){
        var len = rental.vehicles.length;
        for (var i =0; i<len;i++){
            console.log(rental.vehicles[i].price)
        }

    },

    displayQty: function(){
        var len = rental.vehicles.length;
        for (var i =0; i<len;i++){
            console.log(rental.vehicles[i].qty)
        }

    },
    availability : function(){
        var len = rental.vehicles.length;
        for (var i =0; i<len;i++){
            
            if (rental.vehicles[i].qty <= 0){
                rental.vehicles[i].avail = false;
            }
            console.log(rental.vehicles[i].avail)
        }

    }

};

function rentSelect (){
    document.getElementById("sedan").innerHTML = "";
}


function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed!";
}

document.getElementById('demo').value = rental.displayType;

// console.log(rental.vehicles[0].type)
rental.displayAll();
rental.displayType();
rental.displayPrice();
rental.displayQty();
rental.availability();