const inputNames = ['email', 'password'];
const form = document.querySelector('form.login-form');

function onFormSubmit(event) {
    event.preventDefault();
    const formData = inputNames.reduce(
        (acc, name) => {
            return { ...acc, [name]: event.currentTarget.elements[name].value.trim()};
        },
        {},
    );
    if (Object.values(formData).some((value) => !value)) {
        alert('All form fields must be filled in');
    } else {
        console.log(formData);
        event.currentTarget.reset();
    }
}

form.addEventListener('submit', onFormSubmit);
