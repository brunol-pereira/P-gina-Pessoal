function enviarForm() {
  alert('Enviado')
}

var env_Form = document.getElementById('enviar')
env_Form.addEventListener('click', enviarForm)

function zoom() {
  minhaFoto.style.borderRadius = '50px'
  minhaFoto.style.width = '500px'
}

var minhaFoto = document.getElementById('foto')
minhaFoto.addEventListener('click', zoom)

function deszoom() {
  minhaFoto.style.borderRadius = '200px'
  minhaFoto.style.width = '200px'
}

minhaFoto.addEventListener('dblclick', deszoom)
