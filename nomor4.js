let data= {
    id : 1,
    name :"Leane Graham",
    username : "Bret",
    email : "sincere@april.biz",
    addres:
    {
        street : "Kulas Light",
        suite  : "Apt. 556",
        city   : "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website : "hildegard.org" 
}
let data1={
    name: "Ricky Syahputra" ,
    email: "Syahputraricky@gmail.com" ,
    hooby: ["olahraga","makan","tidur"],
}
var datachange ={...data,...data1};
console.log(datachange);

const {street,city}=datachange.addres;
console.log(street);
console.log(city);