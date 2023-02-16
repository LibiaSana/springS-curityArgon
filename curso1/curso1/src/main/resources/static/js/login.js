// Call the dataTables jQuery plugin
$(document).ready(function() {
//on ready
});

async function iniciarSesion(){
let data = {};
data.email = document.getElementById('txtEmail').value;
data.password = document.getElementById('txtPassword').value;

const response = await fetch("api/login", {
method: 'POST',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json'
},
body: JSON.stringify(data)
});
const respuesta = await response.text();
if(respuesta != 'FAIL'){
console.log('token', respuesta);
    localStorage.token = respuesta;
    localStorage.email = data.email;
    window.location.href = 'usuarios.html'
}else{
alert('las credenciales son incorrectas. Por favor intente nuevamente')
}
}