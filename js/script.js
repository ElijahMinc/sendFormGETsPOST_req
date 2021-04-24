import { getRequest } from './request.js';


window.addEventListener('DOMContentLoaded', () => {
   const result = getRequest()
      .then(
         (result) => req(result)
      )
   function req(req) {
      req.addEventListener('readystatechange', function () {
         if (req.readyState === 4 && req.status == 200) {
            let data = JSON.parse(req.response)
            let cards = document.querySelector('.cards')
            document.querySelector('button').addEventListener('click', function () {
               let display = data.map(({ image }) => {
                  return `<div class="cards__item">
                  <div class="cards__img">
                           <img src="${image}" alt="img">
                           </div>
                        <div class="cards__content">
                              <h3>Title</h3>
                              <h2>Subtitle</h2>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores rem minima quisquam.
                                 Quas reiciendis quos quis sed velit magni iusto.</p>
                        </div>
                     </div>`
               });
               cards.innerHTML = display.join(' ')
               this.remove()
            })
         }
      })
   }
})
