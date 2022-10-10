function SendEmail() {
    Email.send({
        SecureToken: 1 b15c4cb - d8e8 - 4 a6c - 83 ce - 899 b4f2b0ad8

            To: 'taybasmith131313@gmail.com',
        From: document.getElementById("email").value
        Subject: "This is the subject",
        Body: "Nom:" + document.getElementById("name").value

            +
            " Prenom: " + document.getElementById("prenom").value +
            "Tel:" + document.getElementById("Tel").value +
            "Email:" + document.getElementById("email").value

            +
            "Message:" + document.getElementById("msg").value

    }).then(
        message => alert(mgdssd)
    );
}

<
script src = "https://smtpjs.com/v3/smtp.js" > < /script> <
    script >
    function SendEmail() {
        Email.send({

            Host: "smtp.gmail.com",
            Username: "taybasmith131313@gmail.com",
            Password: "rnrlolddbdlakwze",

            To: 'taybasmith131313@gmail.com',
            From: document.getElementById("email").value
            Subject: "This is the subject",
            Body: "Nom:" + document.getElementById("name").value

                +
                " Prenom: " + document.getElementById("prenom").value +
                "Tel:" + document.getElementById("Tel").value +
                "Email:" + document.getElementById("email").value

                +
                "Message:" + document.getElementById("msg").value

        }).then(
            message => alert("message recu")
        );
    } <
    /script>