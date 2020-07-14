var div2=document.createElement('div');
div2.id="numberfield";
div2.class='numberbox';
var content=document.getElementById('content');
content.appendChild(div2);
var r=document.createElement('input');
r.setAttribute("type","text")
div2.appendChild(r);
    var number1=document.createElement('button');
    var text1=document.createTextNode("1");
    number1.appendChild(text1);
    div2.appendChild(number1);
    var number2=document.createElement('button');
    var text2=document.createTextNode("2");
    number2.appendChild(text2);
    div2.appendChild(number2);
    var number3=document.createElement('button');
    var text3=document.createTextNode("3");
    number3.appendChild(text3);
    div2.appendChild(number3);
    var clear=document.createElement('button');
    let ctext=document.createTextNode('<=');
    clear.appendChild(ctext);
    div2.appendChild(clear);
    var number4=document.createElement('button');
    var text4=document.createTextNode("4");
    number4.appendChild(text4);
    div2.appendChild(number4);
    var number5=document.createElement('button');
    var text5=document.createTextNode("5");
    number5.appendChild(text5);
    div2.appendChild(number5);            
    var number6=document.createElement('button');
    var text6=document.createTextNode("6");
    number6.appendChild(text6);
    div2.appendChild(number6);            
    var addition=document.createElement('button');
    let addtext=document.createTextNode('+');
    addition.appendChild(addtext);
    div2.appendChild(addition);
    var number7=document.createElement('button');
    var text7=document.createTextNode("7");
    number7.appendChild(text7);
    div2.appendChild(number7);
    var number8=document.createElement('button');
    var text8=document.createTextNode("8");
    number8.appendChild(text8);
    div2.appendChild(number8);
    var number9=document.createElement('button');
    var text9=document.createTextNode("9");
    number9.appendChild(text9);
    div2.appendChild(number9);      
    var subtraction=document.createElement('button');
    let subtext=document.createTextNode('-');
    subtraction.appendChild(subtext);
    div2.appendChild(subtraction);
    var number0=document.createElement('button');
    var text0=document.createTextNode("0");
    number0.appendChild(text0);
    div2.appendChild(number0);                    
    var multiplication=document.createElement('button');
    let multext=document.createTextNode('*');
    multiplication.appendChild(multext);
    div2.appendChild(multiplication);
    var division=document.createElement('button');
    let divtext=document.createTextNode('/');
    division.appendChild(divtext);
    div2.appendChild(division);
    let equals=document.createElement('button');
    let eqitext=document.createTextNode('=');
    equals.appendChild(eqitext);
    div2.appendChild(equals);
content.appendChild(div2);
document.body.appendChild(content);

number0.onclick=calc("0");
number1.onclick=calc("1");
number2.onclick=calc("2");
number3.onclick=calc("3");
number4.onclick=calc("4");
number5.onclick=calc("5");
number6.onclick=calc("6");
number7.onclick=calc("7");
number8.onclick=calc("8");
number9.onclick=calc("9");
addition.onclick=calc('+');
subtraction.onclick=calc('-');
multiplication.onclick=calc('*');
division.onclick=calc('/');
clear.onclick=clr();
equals.onclick=exp();
function calc(num)
{
    r.value +=num;
}
function clr()
{
    r.value="";
}
function exp()
{
    r.value=eval(r.value);
}
