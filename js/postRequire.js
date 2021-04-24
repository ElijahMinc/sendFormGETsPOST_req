var servResponse = document.querySelector('#response')

document.forms.ourForm.onsubmit = function (e) {
   e.preventDefault()
   let userInput = document.forms.ourForm.ourForm__inp.value
   let userInput2 = document.forms.ourForm.ourForm__inp2.value

   userInput = encodeURIComponent(userInput)

   let xhr = new XMLHttpRequest();

   // xhr.open("GET", "form.php?" + "ourForm__inp=" + userInput)

   xhr.open("POST", "form.php")
   xhr.setRequestHeader('Content-Type',
      'application/x-www-form-urlencoded')

   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status == 200) {
         servResponse.textContent = xhr.responseText
      }
   }
   xhr.send(`ourForm__inp=${userInput}&ourForm__inp2=${userInput2}`)
}