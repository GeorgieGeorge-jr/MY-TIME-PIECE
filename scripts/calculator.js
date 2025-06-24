function Plus(){
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;

    var num3 = parseInt(num1) + parseInt(num2);

    document.getElementById('answer').value = num3;
}

function Multiply(){
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;

    var num3 = parseInt(num1) * parseInt(num2);

    document.getElementById('answer').value = num3;
}

function Minus(){
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;

    var num3 = parseInt(num1) - parseInt(num2);

    document.getElementById('answer').value = num3;
}

function Modulus(){
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;

    var num3 = parseInt(num1) %  parseInt(num2);

    document.getElementById('answer').value = num3;
}

function Areaoftriangle(){
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;

    var num3 = (parseInt(num1) * parseInt(num2)) / 2;

    document.getElementById('answer').value = num3;
}

