// about page enquiry form button change to confirm form submission
function formSubmitted() {
    buttonSubmitted = document.getElementById("submit");
    buttonSubmitted.style.backgroundColor = "red";
    buttonSubmitted.textContent = "Enquiry Form Submitted";
};

// about page enquiry form submission script, code adapted from example provided in CI "Sending Emails Using EmailJS" tutorial
function respondMail(aboutForm) {
    emailjs.send("service_schssol", "template_hjzgsre", {
                "fname": aboutForm.fname.value,
                "lname": aboutForm.lname.value,
                "email": aboutForm.email.value,
                "phone": aboutForm.phone.value,
                "textarea": aboutForm.textarea.value
            },
            "user_ju6XNhfQ2GvTtTiZnwhiT")
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    formSubmitted();
    return false; // Block browser from reloading page on form submission
}