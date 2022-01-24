const faker = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

class User{
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
};

class Company{
    constructor(){
        this._id = faker.datatype.uuid();
        this.name = faker.company.name();
        this.address = {street:faker.address.streetAddress(),city: faker.city(), state: faker.state(), zipCode: faker.zipCode(), country: faker.country() };
    }
};

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//route
app.get("/api/users/new", (req,res)=>{
    let newUser = new User()
    res.json({result: newUser})
    console.log(newUser)
})

app.get("/api/companies/new", (req,res)=>{
    let newCompany = new Company()
    res.json({company: newCompany})
    console.log(newCompany)
})

app.get("/api/use/company", (req,res)=>{
    let newUser = new User();
    let newCompany = new Company()
    res.json({company: newCompany, user: newUser})
    console.log(newCompany, newUser)
})

app.listen(port, ()=>console.log(`Listening on port: ${port}`));