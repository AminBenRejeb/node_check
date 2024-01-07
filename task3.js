const fs= require ("fs")

//create the file welcome.txt
fs.writeFile('./welcome.txt','Hello Node',(err)=>{
    if (err) return console.log('this is error');
    console.log("Welcome.txt has been created successfully" )

})

// reading data in file created
fs.readFile("./welcome.txt",'utf-8',(err,data)=>{
   if (err) return console.log("error:",err);
    console.log(data)
})