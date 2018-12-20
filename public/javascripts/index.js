var button = document.getElementById('start')

button.addEventListener('keyup', (event) => {
  if(event.keyCode == 13){
    location.href = "/users/start"
  }
})