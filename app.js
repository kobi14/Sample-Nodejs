const http=require('http');

const fs=require('fs');

//include express framework module 
const express=require('express');

//mysql module
const mysql=require('mysql');



const app =express();


//html file reading 


	fs.readFile('index.html',(err,html)=>{
	if(err){
		throw err;

	}

		app.get('/',(req,res)=> {
		res.statusCode=200;
		res.setHeader('Content-type','text/html');
		res.write(html);

		res.end();



	})

});

//Create a connection 
const db =mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'nodejs'

});

// db connect

db.connect((err)=>{
	if(err){
		throw err;

	}
	console.log('Mysql connected....');


})



//Create table

app.get('/create',(req,res)=>{
	let sql='CREATE TABLE user(PersonID int(11), LastName varchar(255),PRIMARY KEY(PersonID) )';
   
    
	db.query(sql,(err,result)=>{
		if(err) throw err;
		console.log(result);
		res.send('successfully create the Table');
	})

})



app.listen('3000',()=>{
	console.log('Server started');
})


