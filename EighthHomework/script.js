// Вправа 1
// function upperCase (str) {
//     if (!str || typeof str !== 'string') return 'Invalid input!';
//     if (/^[A-Z]/.test(str)) {
//         return 'String starts with uppercase character';
//     } else {
//         return "String's not starts with uppercase character";
//     }
// }
// console.log(upperCase('Regexp'));
// console.log(upperCase('regExp'));         
// console.log(upperCase(''));               
// console.log(upperCase(123));

// Вправа 2

// function checkEmail (email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// console.log(checkEmail("Qmail2@gmail.com"));       
// console.log(checkEmail("user.name@domain.co.uk")); 
// console.log(checkEmail("invalid@domain"));          
// console.log(checkEmail("user@domain.com"));        
// console.log(checkEmail("user@domain"));            
// console.log(checkEmail(""));  

// Вправа 3

// function findLetterByPattern (str) {
//     const regEx = /d(b+)d/i;
//     const match = str.match(regEx);
//     if (match) {
//         return [match[0], match[1], match[1][match[1].length - 1]];
//     }
//     return null;
// }

// console.log(findLetterByPattern("cdbBdbsbz")); 
// console.log(findLetterByPattern("dbbbD"));     
// console.log(findLetterByPattern("abc"));       
// console.log(findLetterByPattern("abchyegqEDBGVVBVDddIDHBHDbhbhbDSAD8723yAHBDHBBSHABbDBBDBDBDBddbdbd"));  

// Вправа 4
// const str = 'Java Script';
// const regex = /^(\w+)\s(\w+)$/;
// const result = str.replace(regex, '$2, $1')
// console.log(result)


            
// вправа 5

// function validateCardNum (cardNum) {
//     if (!cardNum || typeof cardNum !== 'string') return false;
//     const cardReg = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
//     if (!cardReg.test(cardNum)) return false;
//     const digitsOnly = cardNum.replace(/-/g, '');
//     if (digitsOnly.length !== 16 || !/^\d+$/.test(digitsOnly)) return false;

//     return true;
// }

// console.log(validateCardNum("1234-5678-9012-3456")); 
// console.log(validateCardNum("1234-567-9012-3456"));  
// console.log(validateCardNum("1234-5678-9012-34ab")); 
// console.log(validateCardNum("1234567890123456"));    
// console.log(validateCardNum(""));                   
// console.log(validateCardNum(1234)); 


// Вправа 6

// function checkEmail (email) {
//     if (!email || typeof email !== "string") return 'Email is not correct!';
//     const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9_-]*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
//     if ((email.match(/-/g) || []).length > 1) return 'Email is not correct!';
//     if (email[0] === '-' || email[0] === '_') return 'Email is not correct!';
//     if (emailRegex.test(email)){
//         return 'Email is correct';
//     } else {
//         return 'Email is not correct!';
//     }

// }

// console.log(checkEmail(123));
// console.log(checkEmail(''));
// console.log(checkEmail("Qmail2@gmail.com"));       
// console.log(checkEmail("user.name@domain.co.uk")); 
// console.log(checkEmail("invalid@domain"));        
// console.log(checkEmail('my_mail@gmail.com'));  
// console.log(checkEmail("user@domain.com"));        
// console.log(checkEmail("user@domain"));           
// console.log(checkEmail('my-mail@gmail.com'));

// Вправа 7

// function checkLogin (login) {
//     if (!login || typeof login !== "string") return [false, []];
//     const numbers = login.match(/\d+\.?\d*/g) || [];
//     if (login.length < 2 || login.length > 10) return [false, numbers];
//     const loginRegEx = /^[a-zA-Z][a-zA-Z0-9.]{1,9}$/i;
//     if (!loginRegEx.test(login)) return [false, numbers];
//     return [true, numbers];

// }


// console.log(checkLogin('ee1.1ret3'));
