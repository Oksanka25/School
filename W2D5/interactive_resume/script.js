function sendEmail() {
    Email.send({
        SecureToken: "729ab0ce-6313-4c14-8e07-a5b53ee12120",
        To: 'oksanaott302@gmail.com',
        // From: document.getElementById("email").value,
        From: "chekoksa25@gmail.com",
        Subject: "New Contact Form Inquiry",
        Body: "Name:" + document.getElementById("name").value +
            "<br> Email:" + document.getElementById("email").value +
            "<br> Phone:" + document.getElementById("phone").value +
            "<br> Message:" + document.getElementById("message").value
    }).then(
        message => alert(message)
    );
}

// const nameValue = document.getElementById("name").value;
// const emailValue = document.getElementById("email").value;
// const phoneValue = document.getElementById("phone").value;
// const messageValue = document.getElementById("message").value;


// const sendEmailLink = document.getElementById("email");

// sendEmailLink.addEventListener("click", () => {
//     sendEmailLink.href = `mailto:chekoksa25@gmail.com?subject=Inquiry&body=${messageValue}`;
//     sendEmailLink.click();
// })

// const image = document.querySelector('html')
function changeBG() {
    document.body.style.backgroundImage = "url('https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw')"
}