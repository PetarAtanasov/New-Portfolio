function sendMail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const phone = document.getElementById("phone").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const params = {
        name: name,
        email: email,
        message: message,
        phone: phone,
    };

    const serviceID = "service_xuzepws";
    const templateID = "template_ib82wju";

    const submitButton = document.querySelector('#contact-form button[type="submit"]');

    function handleError(error) {
        console.error("Error sending email:", error);
        alert("Sorry, the message could not be sent. Please try again.");
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.removeAttribute("aria-busy");
        }
    }

    // EmailJS CDN failed to load: report it instead of leaving the button stuck.
    if (typeof emailjs === "undefined") {
        handleError(new Error("EmailJS library is not loaded"));
        return;
    }

    if (submitButton) {
        submitButton.disabled = true;
        submitButton.setAttribute("aria-busy", "true");
    }

    try {
        emailjs
            .send(serviceID, templateID, params)
            .then(function (res) {
                alert("Email sent successfully! ");
                location.reload();
            })
            .catch(handleError);
    } catch (error) {
        handleError(error);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        sendMail();
    });
});
