const form = document.querySelector("#contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const msg = document.querySelector("#msg").value;

  console.log("Name: " + name);
  console.log("Message: " + msg);

  form.reset();
});
