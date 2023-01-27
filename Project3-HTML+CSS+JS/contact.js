var form = document.querySelector('form');
var nameInput = document.querySelector('input[placeholder="Name"]');
var emailInput = document.querySelector('input[placeholder="Email"]');
var subjectInput = document.querySelector('input[placeholder="Subject"]');
var messageInput = document.querySelector('textarea[placeholder="Message"]');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  if (nameInput.value === '') {
    alert('Please enter your name');
    return;
  }
  if (emailInput.value === '') {
    alert('Please enter your email');
    return;
  }
  if (subjectInput.value === '') {
    alert('Please enter a subject');
    return;
  }
  if (messageInput.value === '') {
    alert('Please enter a message');
    return;
  }

  if (!isValidEmail(emailInput.value)) {
    alert('Please enter a valid email');
    return;
  }

  form.submit();
});

function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
