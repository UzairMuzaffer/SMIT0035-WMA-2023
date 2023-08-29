/*
  1. login signup system
*/
var loginArray = [];
var signupArray = [];

var email = document.querySelector('#email');
var password = document.querySelector('#password');
var submitButton = document.querySelector('#submit-button');
var heading = document.querySelector('.heading');

submitButton.addEventListener('click', () => {
  var emailValue = email.value;
  var passwordValue = password.value;

  if (heading.textContent === 'Login') {
    if (emailValue === '') {
      alert('Please Write Your Email');
    } else if (passwordValue === '') {
      alert('Please Write Your Password');
    } else if (!emailValue.includes('@') || !emailValue.includes('.')) {
      alert('Please Write valid email');
    } else {
      if (signupArray.includes(emailValue + passwordValue) === false) {
        heading.textContent = "Sign Up";
        alert('create your account first');
      } else {
        alert('welcome back You are logged in');
      }
    }
  } else if (heading.textContent === 'Sign Up') {
    signupArray.push(emailValue + passwordValue);
    heading.textContent = "Login";
    console.log(signupArray);
  }

});
