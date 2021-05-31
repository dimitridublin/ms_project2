// Function to handle form submit in absence of functionality to provide user with available packages (feature to be implemented)
function formSubmit(event) {
    //prevent default action on form submission
    event.preventDefault();
    let htmlBook = `<div class="col-12 d-block alert alert-warning mt-5">
    <h1 class="text-uppercase text-center">Online Booking System currently Under Construction</h1>
    <p class="text-center">Please contact our office by telephone: 01-6070808 or email: hello@booterstowntravel.ie</p></div>`;
    $("#book-form").hide("fast");
    $("section").append(htmlBook);
}

let form = document.getElementById("book-form");
form.addEventListener("submit", formSubmit);