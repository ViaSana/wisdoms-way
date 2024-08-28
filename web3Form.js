const form = document.getElementById('wwContactForm');
const result = document.getElementById('result');
const thankYouMessage = document.getElementById('thank_you');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."; // Temporary message while form submits

    // Submit the form using Fetch
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status === 200) {
            result.innerHTML = "Form submitted successfully";
            thankYouMessage.style.display = "block"; // Show the thank you message
        } else {
            result.innerHTML = json.message;
        }
    })
    .catch(error => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
    })
    .then(() => {
        form.reset(); // Reset the form
        setTimeout(() => {
            result.style.display = "none";
        }, 3000); // Hide the result after 3 seconds
    });
});

// Hide the thank you message when clicked outside of it
document.addEventListener('click', function(event) {
    if (!event.target.closest("#thank_you")) {
        thankYouMessage.style.display = "none";
    }
});