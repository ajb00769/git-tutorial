document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("#login-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = form.querySelector("#username").value;
    var password = form.querySelector("#password").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/login");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      if (xhr.status === 200) {
        window.location.href = "/";
      } else {
        var error = JSON.parse(xhr.responseText).message;
        var errorMessage = form.querySelector("#error-message");
        errorMessage.textContent = error;
      }
    };
    xhr.send(JSON.stringify({ username: username, password: password }));
  });
});
