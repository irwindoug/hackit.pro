// get the subscribe div element so we can do something with it.
const feedbackElement = document.getElementById("success");
// get the form so we can read what was entered in it.
const formElement = document.forms[0];
// add a 'listener' to wait for a submission of our form. When that happens run the code below.
formElement.addEventListener("submit", function (e) {
  // stop the form from doing the default action
  e.preventDefault();
  // set the contents of our feedback element to a message letting the user know the form was submitted successfully. Notice that we pull the name that was entered in the form to personalize the message!
  if(formElement.name == "subscription")
  feedbackElement.innerHTML =
    "Thank you for subscribing!";
  if(formElement.name == "contact")
  feedbackElement.innerHTML =
    "Your message has been sent!";
  feedbackElement.style.display = "inherit";
  timeout(e);
});

function timeout(document) {
  $(document).ready(function () {
    setTimeout(function () {
      $('#success').fadeOut('fast');
    }, 5000);
  });
}

(function showHiddenElementIfButtonDisabled() {
  const buttons = document.querySelectorAll('.read-more-button');
  const elements = document.querySelectorAll('.coming-soon');

  function show(elements, specifiedDisplay) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
      elements[index].style.display = specifiedDisplay || 'block';
    }
  }

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].disabled) show(elements[i]);
  }
})();