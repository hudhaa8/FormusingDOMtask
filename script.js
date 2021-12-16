
var form = document.createElement('form');

var label1 = document.createElement('label');
label1.innerHTML = "First Name"
label1.setAttribute('for', 'fname');
var br1 = document.createElement('br')
var input1 = document.createElement('input');
input1.setAttribute('type', 'fname');
input1.setAttribute('id', 'fname');

var br2 = document.createElement('br')

var label2 = document.createElement('label');
label2.innerHTML = "Middle Name"
label2.setAttribute('for', 'mname');
var br3= document.createElement('br')
var input2 = document.createElement('input');
input2.setAttribute('type', 'mname');
input2.setAttribute('id', 'mname');

var br4 = document.createElement('br')

var label3 = document.createElement('label');
label3.innerHTML = "Last Name"
label3.setAttribute('for', 'lname');
var br5 = document.createElement('br')
var input3 = document.createElement('input');
input3.setAttribute('type', 'lname');
input3.setAttribute('id', 'lname');

var br6= document.createElement('br')

var label4 = document.createElement('label');
label4.innerHTML = "Email"
label3.setAttribute('for', 'email');
var br7 = document.createElement('br')
var input4 = document.createElement('input');
input4.setAttribute('type', 'email');
input4.setAttribute('id', 'email');

var br8= document.createElement('br')

var button1 = document.createElement('button');
button1.innerHTML = "Submit"
button1.addEventListener('click', foo)

function foo() {
    var firstname = document.getElementById('fname').value
    var middlename = document.getElementById('mname').value
    var lastname = document.getElementById('lname').value
    var email = document.getElementById('email').value
    console.log(firstname);
    console.log(middlename);
    console.log(lastname);
    console.log(email)
}

form.append(label1,br1, input1, br2, label2,br3 ,input2, br4, label3,br5, input3, br6, label4,br7, input4, br8, button1);

document.body.append(form)