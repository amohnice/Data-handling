document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const termsAccepted = document.getElementById('terms').checked;
    const contactMethods = Array.from(document.querySelectorAll('.contactMethod')).map(select => select.value);

    // Validate email format
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        return;
    } else {
        emailError.textContent = '';
    }

    // Validate terms acceptance
    if (!termsAccepted) {
        alert('You must accept the terms and conditions.');
        return;
    }

    // Store data in an object
    const formData = {
        name,
        email,
        contactMethods,
        termsAccepted
    };

    // Display the form summary
    displaySummary(formData);
});

// Function to display form data
function displaySummary(data) {
    const summaryDiv = document.getElementById('formSummary');
    summaryDiv.innerHTML = `
        <h3>Summary:</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Preferred Contact Method(s):</strong> ${data.contactMethods.join(', ') || 'None selected'}</p>
        <p><strong>Terms Accepted:</strong> ${data.termsAccepted ? 'Yes' : 'No'}</p>
    `;
}

// Adding more contact methods
document.getElementById('addContactMethod').addEventListener('click', function() {
    const newSelect = document.createElement('select');
    newSelect.classList.add('contactMethod');
    newSelect.required = true;
    newSelect.innerHTML = `
        <option value="">Select</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
    `;
    document.getElementById('contactMethodsContainer').appendChild(newSelect);
});
