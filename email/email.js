function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var phone = document.getElementById("phone").value;

    // Проверка дали имейлът е валиден, използвайки регулярен израз
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Моля, въведете валиден имейл адрес.");
        return; // Прекратява изпълнението на функцията, ако имейлът не е валиден
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
            alert("Успешно изпратен имейл! ");
            location.reload(); // Рефрешва страницата след успешно изпращане на имейл
        })
        .catch(function (error) {
            console.error("Грешка при изпращане на имейл: ", error);
        });
}