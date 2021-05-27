function bookFunction() {
    if (new Date() < new Date("2021-08-21")) {
        alert("Booterstown Travel Summer Offer: All packages are an ADDITIONAL 20% off! Offer valid till August 20th.");
    } else {
        return;
    }
}
window.onload = bookFunction();

// Function to handle form submit in absence of functionality to provide user with available packages (feature to be implemented)
function formSubmit(event) {
    event.preventDefault();
    let htmlBook = `<div class="col-12 d-block alert alert-warning mt-5">
    <h1 class="text-center">Online Booking System currently Under Construction</h1>
    <p class="text-center">Please contact our office by telephone: 01-6070808 or email: hello@booterstowntravel.ie</p></div>`
    $("section").append(htmlBook);
};

let form = document.getElementById("book-form");
form.addEventListener("submit", formSubmit);