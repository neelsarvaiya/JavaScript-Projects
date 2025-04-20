let inputElement = document.querySelector('#display-element');
let buttons = document.querySelectorAll('button');

let result = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            if (result.trim() === '') {
                inputElement.value = 'empty';
            } else {
                try {
                    result = eval(result);
                    inputElement.value = result;
                } catch (err) {
                    inputElement.value = 'Invalid Input';
                }
            }
        }
        else if (e.target.innerHTML == 'AC') {
            result = '';
            inputElement.value = result;
        } else if (e.target.innerHTML == 'DEL') {
            result = result.substring(0, result.length - 1);
            inputElement.value = result;
        }
        else {
            result += e.target.innerHTML;
            inputElement.value = result;
        }
    })
})