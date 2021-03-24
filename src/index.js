let addToy = false;
const input = document.getElementsByClassName('input-text')

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});




function fetchToys(name, image){
  console.log("in fetch toys")
  let formData = {
    name,
    image,
    likes: 0 
  }
  console.log(formData)
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }

  return fetch("http://localhost:3000/toys", configObj)
  .then(resp => resp.json())
  .then(json => { console.log(json)
    json.forEach(e => {
      const p = document.createElement('p')
      const btn = document.createElement("BUTTON")
      btn.classList.add("like-btn")
      btn.innerText = "Like"
      p.innerText = e['likes']
      const img = document.createElement('img')
      img.src = e['image']
      img.classList.add("toy-avatar")
      const h2 = document.createElement('h2')
      h2.innerText = e['name']
      const otherDiv = document.getElementById('toy-collection')
      const div = document.createElement('div')
      div.classList.add("card")
      otherDiv.appendChild(div)
      div.appendChild(h2)
      div.appendChild(img)
      div.appendChild(p)
      div.appendChild(btn)
    }
      )
  })
}

const submit = document.getElementsByClassName("submit")
submit[0].addEventListener('click', e => {
  console.log("hi")
  fetchToys(input[0].value, input[1].value)
  e.preventDefault()
})

