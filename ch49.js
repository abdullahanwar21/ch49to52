let form = document.forms["formSubmit"];
form.addEventListener("submit", getValues);
function getValues(event) {
  event.preventDefault();
  let data = {
    firstName: this.firstName.value,
    lastName: this.lastName.value,
    email: this.email.value,
  };
  let out = `	<p>First Name: <span>${data.firstName}</span></p>
    <p>Last Name: <span>${data.lastName}</span></p>
    <p>Email: <span>${data.email}</span></p>
    `;

  document.querySelector(".out code").innerHTML = out;
}
