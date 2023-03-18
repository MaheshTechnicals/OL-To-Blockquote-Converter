btn.addEventListener("click", () => {


  let allli = document.querySelectorAll("li")


  const myArray = Array.from(allli).map(item => item.textContent);

  myArray.forEach((one) => {

    let b = `<blockquote class="mycard">${one}</blockquote>`

    output.value += b
  })


})