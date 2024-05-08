let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("pass");
let passwordInput2 = document.getElementById("pass2");
let photoInput = document.getElementById("imageInput");
let errorMessage = document.getElementById('errorMessage');

function SignIn() {
    let name = nameInput.value;
    let email = emailInput.value;
    let pass = passwordInput.value;
    let pass2=passwordInput2.value;
    let photo = photoInput.files[0]; // Get the selected file
    let data = new FormData();

    if (!photo) {
        errorMessage.innerText = 'Please select an image.';
        return;
    }

    let fileType = photo.type;
    let validExtensions = ['image/jpeg', 'image/jpg'];
    if (!validExtensions.includes(fileType)) {
        errorMessage.innerText = 'Please upload a JPG or JPEG image.';
        return;
    }

    errorMessage.innerText = '';
    data.append("fullname", name);
    data.append("email", email);
    data.append("password", pass);
    data.append("PasswordConfirm",pass2)
    data.append("avatar", photo);
    fetch('https://finsh-pro.onrender.com/api/user/register', {
        method: 'POST',
        body: data,
    })
    .then(response => {
        console.log("my response", response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Response:', data);
        window.location.href="./home2/home2.html";
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    SignIn();
});
