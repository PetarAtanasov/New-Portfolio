function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var phone = document.getElementById("phone").value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return; 
    }

    var params = {
        name: name,
        email: email,
        message: message,
        phone: phone,
    };

    const serviceID = "service_4zb2p77";
    const templateID = "template_ib82wju";

    emailjs
        .send(serviceID, templateID, params)
        .then(function (res) {
            alert("Email sent successfully! ");
            location.reload(); 
        })
        .catch(function (error) {
            console.error("Error sending email:", error);
        });
}
