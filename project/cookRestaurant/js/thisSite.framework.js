var menu = [
    {
        cost: 22,
        thumbNailImage: '../img/dish%20(1).png'
    },
    {
        cost: 50,
        thumbNailImage: '../img/dish%20(2).png'
    },
    {
        cost: 12,
        thumbNailImage: '../img/dish%20(3).png'
    },
    {
        cost: 32,
        thumbNailImage: '../img/dish%20(4).png'
    }
]


function isEven(n) {
  n = parseInt(n);
  return n === 0 || !!(n && !(n%2));
}
function plusOne () {
    var num_units = Number(this.parentElement.querySelector('.random-2356').textContent);
    num_units = num_units + 1;
    this.parentElement.querySelector('.random-2356').textContent = num_units.toString();
}
function minusOne () {
    var num_units = parseInt(this.parentElement.querySelector('.random-2356').textContent);
    num_units = num_units - 1;
    if (num_units<0) {num_units = 0;}
    this.parentElement.querySelector('.random-2356').textContent = num_units.toString();
}
function deleteThisPanel (argument) {
    this.parentElement.parentElement.parentElement.remove();
    
} 
function countCost (argument) {
    var subTotalAmount = 0, grandTotalAmount;
    var xx = document.getElementsByClassName('random-2356');
    for (var i = 0; i < xx.length; i++) {
        subTotalAmount += Number(xx[i].textContent) * menu[i].cost;
    }
    grandTotalAmount = subTotalAmount + shippingFreeAmount -disCountAmount;
    if(grandTotalAmount<0) grandTotalAmount=0;
    document.getElementById('div-subTotalAmount').textContent = subTotalAmount;
    document.getElementById('div-grandTotalAmount').textContent = grandTotalAmount;
}

function addFunc_likeOrDislike (argument) {
   document.querySelector('.icon-ic-heart').addEventListener('click', function () {
    var classList = this.classList
        if (classList.contains('_liked')) {
            classList.remove('_liked');
        }else{
            classList.add('_liked');
        }
   })
}
