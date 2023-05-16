let charName = ''
let charYearsOld = null
let charImg = ''

fetch('http://localhost:5000/api/characters')
  .then(response => response.json())
  .then(data => {
    const cards = document.getElementById('cards')

     data.map((character) => {
      charName = document.createElement('p')
      charName.textContent = `Nome: ${character.name}`

      charYearsOld = document.createElement('p')
      charYearsOld.textContent = `Idade: ${character.yearsOld}`

      
      charImg = document.createElement('img')
      charImg.src = character.charImg

      let charInfo = document.createElement('div')

      for(let i = 0; i <= data.length; i++){
        charInfo.appendChild(charName)
        charInfo.appendChild(charYearsOld)
        charInfo.appendChild(charImg)
        cards.appendChild(charInfo)
      }
    })
  });

  