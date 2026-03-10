// validationScript.js
// JavaScript code for form validation

// Retrieve the form and input elements
const form = document.querySelector('form');           // assumes there's one <form> on the page
const input = document.querySelector('input[type="text"]');  // the single alphanumeric input field
const errorDiv = document.createElement('div');       // we'll create a place for error messages

// Style the error message (red and visible)
errorDiv.style.color = 'red';
errorDiv.style.marginTop = '8px';
errorDiv.style.fontSize = '14px';

// Insert the error div right after the input field
input.parentNode.insertBefore(errorDiv, input.nextSibling);

// Regular expression pattern for alphanumeric only (letters and numbers, at least 1 character)
const alphanumericPattern = /^[a-zA-Z0-9]+$/;

// Add event listener to the form's submit event
form.addEventListener('submit', function(event) {
    // Always prevent default first — we decide later if we allow submission
    event.preventDefault();

    // Get the current value and trim whitespace
    const value = input.value.trim();

    // Clear any previous message
    errorDiv.textContent = '';

    // Check if input matches alphanumeric pattern
    if (alphanumericPattern.test(value)) {
        // Valid input → show confirmation
        alert('Input is valid! Form would be submitted now.\n(the wct server is not set up for processing)');

        // If you want to actually allow submission (though server won't process it):
        // form.submit();   // uncomment only if instructor requires it

        // Optional: you can also display confirmation in the page instead of alert
        // errorDiv.style.color = 'green';
        // errorDiv.textContent = 'Valid alphanumeric value — form submitted!';
    } else {
        // Invalid input → show error and prevent submission (already prevented)
        errorDiv.textContent = 'Error: Please enter only alphanumeric characters (letters and numbers, no spaces or symbols).';
        input.focus();   // put cursor back in the field
    }
});