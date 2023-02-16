// Call the dataTables jQuery plugin
$(document).ready(function() {
//on ready
});

async function registrarUsuario(){
let data = {};
data.nombre = document.getElementById('txtNombre').value;
data.apellido = document.getElementById('txtApellido').value;
data.email = document.getElementById('txtEmail').value;
data.password = document.getElementById('txtPassword').value
let repetirPassword = document.getElementById('txtRepetirPassword').value
if(repetirPassword !== data.password ){
alert('la contrasena que escribiste es diferente');
return;
}
const response = await fetch("api/usuarios", {
method: 'POST',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json'
},
body: JSON.stringify(data)
});
alert('la cuenta fue creada con exito');
window.location.href = 'usuarios.html'

}

