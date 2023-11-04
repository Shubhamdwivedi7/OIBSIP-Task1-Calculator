//selectors
let string = " ";
const body = document.querySelector('body');
const button = document.getElementsByClassName('button');
// const string = document.getElementById('screen-nums');
// const div = document.createElement('div');
// div.classList.add('div-style');
// body.append(div);

Array.from(button).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }else if(e.target.innerHTML == 'C'){
            string = eval(string);
            document.querySelector('input').value = string;
        }else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

