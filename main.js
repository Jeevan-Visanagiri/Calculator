var div2=document.createElement('div');
div2.id="numberfield";
div2.class='numberbox';
var content=document.getElementById('content');
content.appendChild(div2);
var r=document.createElement('input');
r.setAttribute("type","number")
div2.appendChild(r);
var buttons=[],btext=[];
for (let i = 0; i < 10; i++) {
    buttons[i]=document.createElement('button');
    btext[i]=document.createTextNode(i);
    buttons[i].appendChild(btext[i]);
    div2.appendChild(buttons[i]);
    if(i==2|i==5|i==8|i==9)
    {
        switch(i)
        {
            case 2:
                var clear=document.createElement('button');
                let text0=document.createTextNode('<=');
                clear.appendChild(text0);
                div2.appendChild(clear);
                break;
            case 5:
                var addition=document.createElement('button');
                let text=document.createTextNode('+');
                addition.appendChild(text);
                div2.appendChild(addition);
                break;
            case 8:
                var subtraction=document.createElement('button');
                let text1=document.createTextNode('-');
                subtraction.appendChild(text1);
                div2.appendChild(subtraction);
                break;
            case 9:
                var multiplication=document.createElement('button');
                let text2=document.createTextNode('*');
                multiplication.appendChild(text2);
                div2.appendChild(multiplication);
                var division=document.createElement('button');
                let text4=document.createTextNode('/');
                division.appendChild(text4);
                div2.appendChild(division);
                let equals=document.createElement('button');
                let text5=document.createTextNode('=');
                equals.appendChild(text5);
                div2.appendChild(equals);
                break;
        }
    }
}
content.appendChild(div2);

document.body.appendChild(content);
