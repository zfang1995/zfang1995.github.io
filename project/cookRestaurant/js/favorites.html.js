var $_setOf_numericalSetter = $('.numericalSetter .random-8974');
var $_setOf_panels = $('.deleteThisPanel');

for(var i = 0, length1 = $_setOf_numericalSetter.length; i < length1; i++){
    if(isEven(i+1)){
        $_setOf_numericalSetter[i].addEventListener('click', plusOne);
    }else {
        $_setOf_numericalSetter[i].addEventListener('click', minusOne);
    }
}

for(var i = 0, length1 = $_setOf_panels.length; i < length1; i++){
    $_setOf_panels[i].addEventListener('click', deleteThisPanel);
}


