let display = document.querySelector("#display");
let input = document.querySelector("#input")

let btn = document.querySelector("#btn")

let output = document.querySelector("#output")

let btn2 = document.querySelector("#copy")



btn.addEventListener("click", () => {

  display.innerHTML = input.value
  getCode()
})



btn2.addEventListener("click", () => {

  if (output.value == "") {


    btn2.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`
    btn2.style.background = "red"
    btn2.style.color = "white"

    setTimeout(() => {

      btn2.innerHTML = "Copy Code"
      btn2.style.background = "transparent"
      btn2.style.color = "black"
    }, 2000)


  }

  else {
    navigator.clipboard.writeText(output.value)

    btn2.innerHTML = `<i class="fa-solid fa-check"></i>`
    btn2.style.background = "green"
    btn2.style.color = "white"

    setTimeout(() => {

      btn2.innerHTML = "Copy Code"
      btn2.style.background = "transparent"
      btn2.style.color = "black"
      output.value = ""
    }, 20000)
  }
})



let getCode = () => {

  // Get a reference to the ordered list element
  const orderedList = document.querySelector('ol');

  // Get a reference to all the list item elements
  const listItems = orderedList.querySelectorAll('li');

  // Use map to extract the text content of each list item element and store it in an array
  const listArray = Array.from(listItems).map(item => item.textContent);


  listArray.forEach((each) => {
    let a = `<blockquote class="mycard">${each}</blockquote>`


    output.value += a
    input.value = ""

  })




}