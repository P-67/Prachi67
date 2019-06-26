var express=require('express');
var api=express();

var EmployeeController=function(req,res){
console.log("service started");

var Employees=[
{Empid:1,name:"Abc",salary:12000},
{Empid:2,name:"xyz",salary:10000},
{Empid:3,name:"pqr",salary:15000}
];
res.send(Employees);
};

api.get('/Employees',EmployeeController);
var server=api.listen(2000,function()
{
var host=server.address().address;
var port=server.address().port;
console.log("listening port 2000 ",host,port);
})
