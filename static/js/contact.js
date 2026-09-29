document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".php-email-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const loading = form.querySelector(".loading");
    const errorMessage = form.querySelector(".error-message");
    const sentMessage = form.querySelector(".sent-message");

    // Reset messages
    loading.style.display = "block";
    errorMessage.style.display = "none";
    sentMessage.style.display = "none";
    submitButton.disabled = true;

    // Collect form data
    const formData = new FormData(form);

    // Send the form data
    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        loading.style.display = "none";

        if (data.status === "success") {
          sentMessage.style.display = "block";
          form.reset();
        } else {
          throw new Error(data.message || "Form submission failed");
        }
      })
      .catch((error) => {
        loading.style.display = "none";
        errorMessage.innerHTML = error.message;
        errorMessage.style.display = "block";
      })
      .finally(() => {
        submitButton.disabled = false;
      });
  });
});
