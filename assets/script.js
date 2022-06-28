const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".login__button");
console.log(typeof(inputs))
console.log(inputs)

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add("span-active")
}

const handleFocusOut = ({ target }) => {

    if(target.value === ''){
        const span = target.previousElementSibling;
        span.classList.remove("span-active")
    }
}

const handleChange = () => {
    const [username, password] = inputs;
    // = const username = inputs[0]
    // = const password = inputs[1]

    if(username.value && password.value.length >= 8){
        button.removeAttribute("disabled");
    }
    else{
        button.setAttribute("disabled", '');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus)); // Para cada elemento do array inputs, passa uma função anônima no forEach() que recebe como parâmetro os elementos do array
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut)); // For each vai executar a função passada 1 vez para cada elemento do array
inputs.forEach((input) => input.addEventListener('input', handleChange));
