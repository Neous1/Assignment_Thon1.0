var rental = {
    categories:["sedan", "suv", "sports"],
    price:{
        sedan: 10.99,
        suv: 15.99,
        sports: 21.99
    },
    available:{
        sedan :7,
        suv: 4,
        sports:3
    }


} 


function displayCategory(){
        console.log("We have for rent :", rental.categories);
}

displayCategory()

function displayPrice(){
        console.log("Prices are:",rental.price);
}
displayPrice();

function displayInventory(){
    console.log("Vehicles left :", rental.available)
}

displayInventory();

console.log("----------------------------");
// function removeVehicle(){
//     var newSedan =[];
//     // avail.categories.splice(0)
//     displayCategory()
//     //if user select sedan
//     // rental.categories.splice(0,1);
//     // console.log("Sedans left :", rental.available.sedan-1);
//     // //remove 1 sedan from inventory
//     //     rental.categories.splice(0,1);
//     // console.log("SUV left :", rental.available.sedan-1);
//     // // displayCategory()
//     console.log("Sedan :",rental.available.sedan);
//     console.log("suv :",rental.available.suv);
//     console.log("sports :",rental.available.sports);
//     // .splice()
//     // if(rental.available.splice(0,1)){
//     //     // rental.available.sedan -1;
//     // }
// }

// removeVehicle()

function rentSuv (){
    console.log("Avail SUV :",rental.available.suv);
    //select
    if (rental.available.suv){
        rental.available.suv--
    }
    console.log("Avail SUV :",rental.available.suv)

}

rentSuv();

function rentSedan(){
    console.log("Avail Sedans :",rental.available.sedan);
    //select
    if (rental.available.sedan){
        rental.available.sedan--
    }
    console.log("Avail Sedans :",rental.available.sedan)

}

rentSedan();

function rentSports(){
    console.log("Avail Sport Vehicle :",rental.available.sports);
    //select
    if (rental.available.sports){
        rental.available.sports--;
    }
    console.log("Avail Sport Vehicle :",rental.available.sports)

}

rentSports();
