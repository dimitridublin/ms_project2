function bookFunction() {
    if (new Date() < new Date("2021-08-21")) {
        alert("Booterstown Travel Summer Offer: All packages are an ADDITIONAL 20% off! Offer valid till August 20th.");
    } else {
        return;
    }
}

window.onload = bookFunction();