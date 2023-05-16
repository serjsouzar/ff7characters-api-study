function createCharacter(event) {
  event.preventDefault();

  const form = event.target;
  
  const data = {
    name: form.name.value,
    yearsOld: form.yearsOld.value,
    charImg: form.charImg.value
  }

  fetch('http://localhost:5000/api/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(data)
  })
  .then(response => {
    if(!response.ok) {
      throw new Error('Network response not ok')
    }
    return response.json();
  })
  .then(data => {
    if(data === {}){
      alert('Por favor preencha os campos')  
    }
    console.log(data)
    alert('✨Personagem registrado com sucesso✨')
    form.reset();
  })
  .catch(error => {
    console.log("There was a problem with the fetch operation:", error);
    alert("There was a problem creating a new character")
  })
}

const form = document.querySelector('form')
form.addEventListener('submit', createCharacter)