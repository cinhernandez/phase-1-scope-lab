var customerName = 'bob'


function upperCaseCustomerName(){
   customerName = customerName.toLocaleUpperCase();
}
console.log(customerName);

function setBestCustomer(){
    bestCustomer = 'not bob';
    

}
console.log(bestCustomer);
setBestCustomer();

function overwriteBestCustomer (){
    bestCustomer='maybe bob';
}

console.log(bestCustomer);
overwriteBestCustomer();



const leastFavoriteCustomer= 'Sasha';

function changeLeastFavoriteCustomer (){
    leastFavoriteCustomer = 'Larry'
   

}
changeLeastFavoriteCustomer();
