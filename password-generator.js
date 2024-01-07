var generator = require ('generate-password')

function generates() {
 password = generator.generate({
    length : 8,
    numbers : true,
    symbols : true,
    uppercase : true,
    
});
return password
}
generates();
console.log("This is a password:",password);