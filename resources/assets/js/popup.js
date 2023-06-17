var myString   = "https://www.titanesmedellin.com/";
var myPassword = "myPassword";
var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);
console.log(encrypted);
console.log(decrypted);
console.log(decrypted.toString(CryptoJS.enc.Utf8));