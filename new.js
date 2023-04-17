btn.addEventListener("click", () => {

  let obj = []
  let allli = document.querySelectorAll("li")


  const myArray = Array.from(allli).map(item => item.textContent);

  myArray.forEach((one) => {
    obj.push(one)
    let b = `<blockquote class="mycard">${one}</blockquote>`



  })


  let uniqueArr = obj.filter((name, index) => {
    return obj.indexOf(name) === index;
  });




  uniqueArr.forEach((every) => {


    let c = `<blockquote class="mycard">${every}</blockquote>`

    output.value += c
  })




})