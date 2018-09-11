document.addEventListener('DOMContentLoaded', function() {
    let form = document.forms.form1,
        nameField = form.elements.name,
        ageField = form.elements.age,
        texts = form.querySelectorAll('p');

    nameField.addEventListener('focus', function() {
        this.style.boxShadow = '0 0 3px blue';
    });

    nameField.addEventListener('blur', function() {
        validate(this, texts[0], /\D/);
    });

    ageField.addEventListener('change', function() {
        validate(this, texts[1], /\d/);
    });

    document.querySelector('select').addEventListener('change', function() {
        // сработает, только если был выбран другой option!
        alert(this.value);
        this.nextElementSibling.innerHTML = this[this.selectedIndex].text;
    });

    document.querySelector('input[name=test]').addEventListener('input', function() {
        this.nextElementSibling.innerHTML = this.value;
    });

    function validate(element, logElement, reg) {
        let value = element.value;

        if (value && reg.test(value)) {
            element.style.boxShadow = '0 0 3px green';
            logElement.innerHTML = 'Correct!';
        } else {
            element.style.boxShadow = '0 0 3px red';
            logElement.innerHTML = 'Wrong value: ' + (value || 'empty');
        }
    }
});


//   form submit


document.addEventListener('DOMContentLoaded', function() {
    let form = document.forms.loginForm,
        inputs = form.querySelectorAll('input[data-valid]'),
        text = form.querySelector('p');

    form.addEventListener('submit', function (e) {
        let index = 0,
            max = inputs.length,
            value, isNonValid, input;

        for (; index < max; index++) {
            input = inputs[index];
            value = input.value;
            if (!value || value.indexOf(' ') !== -1) {
                isNonValid = true;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }
        }

        if (isNonValid) {
            e.preventDefault();
            text.innerHTML = 'Login or password is invalid!';
        }
    });
});
// === 3

document.addEventListener('DOMContentLoaded', function () {
    let form = document.forms.form1;

    Array.prototype.forEach.call(form.elements, function (element) {
        let tags = ['INPUT', 'SELECT'],
            paragraph, value;

        if (tags.indexOf(element.tagName) > -1) {
            paragraph = document.createElement('p');
            if (element.tagName !== 'SELECT') {
                value = element.checked || element.value;
            } else {
                value = 'выбран' + element.selectedIndex + '-й option, значение - ' + element.options[element.selectedIndex].text;
            }
            paragraph.innerHTML = '<em>значение поля:</em> ' + value;
            element.parentElement.appendChild(paragraph);
        }
    });
});