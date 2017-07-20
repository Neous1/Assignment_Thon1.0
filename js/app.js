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

displayType: function(){
    console.log(rental.vehicles)
    // console.log("hi");
}

};

rental.displayType();