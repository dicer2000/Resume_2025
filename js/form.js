var form = document.getElementById("my-form");
  
async function handleSubmit(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
        setAlertText("Succcess! Thank you for writing!");

        form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
            setAlertText(data["errors"].map(error => error["message"]).join(", "));
        } else {
            setAlertText("Oops! There was a problem submitting your form");
        }
      })
    }
  }).catch(error => {
    setAlertText("Oops! There was a problem submitting your form");
});
}

async function setAlertText(alert_text) {
    var status = document.getElementById("my-form-status");

    if(status && alert_text) {
        status.innerHTML = alert_text;
        status.classList.remove('invisible');
        setTimeout(() => {
            status.classList.add("invisible");
        }, 4000);
    }
}

form.addEventListener("submit", handleSubmit)