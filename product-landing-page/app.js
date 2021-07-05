let shoe = document.querySelectorAll('.shoes');
let index = 0;

function next(){
    shoe[index].classList.remove('active');
    index = (index+1)% shoe.length;
    shoe[index].classList.add('active');
}

function prev(){
    shoe[index].classList.remove('active');
    index = (index1 + shoe.length) % shoe.length;
    shoe[index].classList.add('remove');
}