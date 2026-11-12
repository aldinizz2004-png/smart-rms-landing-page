const form = document.getElementById("waitlist-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.className = "form-status";
  status.textContent = "";
  form.classList.add("was-validated");

  if (!form.checkValidity()) {
    form.querySelector(":invalid").focus();
    status.classList.add("is-error");
    status.textContent = "Please fix the highlighted fields and try again.";
    return;
  }

  status.classList.add("is-success");
  status.textContent = "Thank you! You are on the waitlist.";
  form.reset();
  form.classList.remove("was-validated");
});
