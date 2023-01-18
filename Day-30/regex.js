//-------------one-----------
// let text = 'Hello Students';
// let pattern =/students/i;
// // i=>used for case sensitivity
// let result = text.match(pattern);
// console.log(result);
// document.getElementById('demo').innerHTML = result;

// modifiers/Attributes
//* g
// let text = 'How is your brother and what is this';
// let pattern =/is/ig;
// // i=>used for case sensitivity
// // g=>used for  global case sensitivity
// // let result = text.match(pattern);
// // let result = pattern.exec(text);
// // let result = pattern.test(text);
// console.log(result);
// document.getElementById('demo').innerHTML = result;

//* m
//* modifiers hota hai multiple line ko modify kar sakta hai
// let text = `Is Hey There!is,
// How are you?
// is
// I am fine.
// is
// `

// // let pattern = /^is/gm;
// let pattern = /is$/gm;
// // i=>used for case sensitivity
// // g=>used for  global case sensitivity
// // m=>used for  multiple line case sensitivity

// let result = text.match(pattern);
// // let result = pattern.multiline
// document.getElementById('demo').innerHTML = result;

//* Groups
//* [abc]
// let text = "Is this but all there is?"
// let pattern = /[h]/g;
// let pattern = /[is]/gi;
// [abc] ye pattern apply hota hai each character ke uppar
// let pattern = /[a-h]/gi;
// let pattern = /[a-h]/gi;
// let text="TIME IS MONEY";
// // let text="TIME aj dhl  skks IS MONEY";
// let pattern = /[A-Ma-r]/gi;

// let result = text.match(pattern);
// document.getElementById('demo').innerHTML = result;

//* [^abc]
// let text = "Is this but all there is?"
// // let pattern = /[^is]/g;
// let pattern = /[^i-s]/g;
// let result = text.match(pattern);
// document.getElementById('demo').innerHTML = result;

//* [0-9]
// let text = '123456789';
// // let pattern = /[5]/g;
// // let pattern = /[^1-4]/g;
// // let pattern = /[1-4]/g;
// let result = text.match(pattern);
// document.getElementById('demo').innerHTML = result;

//* (x|y)
// let text  =  "re, green, red, red, green, green, ge, blue, yellow";
// let pattern = /(red|green|yellow)/g
// let result = text.match(pattern);

// document.getElementById('demo').innerHTML = result;

//* metacharacter
//* w
// let text = 'Give your _100%';
// let pattern = /\w/g;
// //w=> short form where we can check all the characters a-z , A-Z and 0-9,
// // and it is also going to pick _ character!
// let result = text.match(pattern);
// document.getElementById('demo').innerHTML = result;

//*W
// let text = 'Give your _100%';
// let pattern = /\W/g;
//W=> matches only special characters like space, percentage and any other special character
// let result = text.match(pattern);
// document.getElementById('demo').innerHTML = result;

//* d
//* matches 0-9

// let text = 'Give your _100%';
// let pattern = /\d/g;
// let result = text.match(pattern);
// document.getElementById('demo').innerHTML = result;

//* D
//* non-digit

// let text = 'Give your _100%';
// let pattern = /\D/g;
// let result = text.match(pattern);
// document.getElementById('demo').innerHTML = result;

//* Quantifiers
// let text = '!!Hellooooooo Wor ld He   llo coolleeggee!'
// // let pattern = /o+/g;
// // + :  means atleast one times eak char aa raha hai
// // let pattern = /\w+/g;
// let pattern = /l+/g;
// let result = text.match(pattern);
// document.getElementById('demo').innerHTML = result;

//* *(star)
//* star yane eak ya eak se jyada agar zero hoga tho bhi chalta hai
// let text = 'Hello How are you at home hoe he?'
// let pattern = /Ho*/gi;
// let pattern = /Ho*e/gi;
// let text = '1, 100, 1000, 1000000';
// let pattern = /10*/g;
// let result = text.match(pattern);
// document.getElementById('demo').innerHTML = result;

//* ?(question mark)
//* question mark yane eak ya zero
// let text = '1010, 100, 1000, 1000000';
// let pattern = /10?/gi;
// let result = text.match(pattern);
// document.getElementById('demo').innerHTML = result;

//* {}
//* use of {} is
// var str = 'abcpppp';
// var str = 'abcpppppppppppp';
// var patt = /p{4}/g;
// var result = str.match(patt);
// console.log(result);
// document.getElementById('demo').innerHTML = result;

// let text =  '10, 100, 1000 or 100000'
// let pattern = /\d{3,4}/g;
// let pattern = /\d{3,}/g;
// let result = text.match(pattern);
// document.getElementById('demo').innerHTML = result;

//* TODO: understand regex expression properly!
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;

  if (name == "" || email == "" || phone == "" || password == "") {
    alert("All fields are required!");
    return false;
  }
  

  if (!/^\d{10}$/.test(phone)) {
    alert("Invalid phone number!");
    return false;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long!");
    return false;
  }

  return true;
}
