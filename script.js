document.getElementById('dob').addEventListener('change', function () {
    var dob = new Date(this.value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    document.getElementById('age').value = age;
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registration Successful!');
    // Here you might want to do something like sending data to a server
});
