class LoginForm {
    constructor(formId) {
        this.form = document.getElementById(formId);

        if (!this.form) return;

        this.emailInput = document.getElementById('email');
        this.passwordInput = document.getElementById('password');

        this.emailError = document.getElementById('emailError');
        this.passwordError = document.getElementById('passwordError');

        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.emailInput.addEventListener('input', () => this.clearError(this.emailInput, this.emailError));
        this.passwordInput.addEventListener('input', () => this.clearError(this.passwordInput, this.passwordError));
    }

    handleSubmit(event) {
        event.preventDefault();
        const isEmailValid = this.validateEmail();
        const isPasswordValid = this.validatePassword();

        if (isEmailValid && isPasswordValid) {
            const formData = {
                email: this.emailInput.value,
                password: this.passwordInput.value
            };
            console.log('Formulář byl úspěšně odeslán:', formData);
            alert('Formulář byl úspěšně odeslán!');
            this.form.reset();
        }

    }

    validateEmail() {
        const emailValue = this.emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === '') {
            this.showError(this.emailInput, this.emailError, 'Email je povinný.');
            return false;
        }

        if (!emailRegex.test(emailValue)) {
            this.showError(this.emailInput, this.emailError, 'Email nemá platný formát.');
            return false;
        }

        return true;
    }

    validatePassword() {
        const passwordValue = this.passwordInput.value.trim();

        if (passwordValue === '') {
            this.showError(this.passwordInput, this.passwordError, 'Heslo je povinné.');
            return false;
        }

        if (passwordValue.length < 6) {
            this.showError(this.passwordInput, this.passwordError, 'Heslo musí mít alespoň 6 znaků.');
            return false;
        }

        return true;
    }

    showError(inputElement, errorElement, message) {
        inputElement.classList.add('invalid');
        errorElement.textContent = message;
    }

    clearError(inputElement, errorElement) {
        inputElement.classList.remove('invalid');
        errorElement.textContent = '';
    }

    clearError(inputElement, errorElement) {
        inputElement.classList.remove('invalid');
        errorElement.textContent = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LoginForm('loginForm');
});