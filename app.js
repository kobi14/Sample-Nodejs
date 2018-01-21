const http=require('http');
const fs=require('fs');

// const hostname='127.0.0.1';
// const port=3000;


//html file reading 

fs.readFile('index.html',(err,html)=>{
	if(err){
		throw err;

	}

	const server=http.createServer((req, res)=> {
		res.statusCode=200;
		res.setHeader('Content-type','text/html');
		res.write(html);

		res.end();



	});

	// server.listen(port,hostname,()=>{
	// 	console.log('Server started on port'+port);
	// });


});




const express=require('express');
const mysql=require('mysql');

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

const app =express();

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

