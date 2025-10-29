function getFormvalue() {
    // Prevent the form from submitting and reloading the page
    event.preventDefault();

    // Access the form using its id
    const form = document.getElementById("form1");

    // Retrieve values of first name and last name, trimming extra spaces
    const firstName = form.fname.value.trim();
    const lastName = form.lname.value.trim();

    // Concatenate first and last name
    const fullName = `${firstName} ${lastName}`.trim();

    // Show alert with full name (or handle empty input)
    if (fullName === "") {
        alert("Please enter your first and last name.");
    } else {
        alert(fullName);
    }
}
