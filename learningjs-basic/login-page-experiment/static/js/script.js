const form = document.querySelector("#login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = form.querySelector("#username").value;
  const password = form.querySelector("#password").value;
  
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username: username, password: password })
  })
    .then(function (response) {
      if (response.ok) {
        window.location.href = "/";
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      const errorMessage = form.querySelector("#error-message");
      errorMessage.textContent = data.message;
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
});
