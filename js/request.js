export function getRequest() {
   return new Promise((resolve) => {
      let request = new XMLHttpRequest();
      request.open('GET', "http://localhost:3000/products");
      request.setRequestHeader("Content-type", "application/json; charset=utf-8");
      request.send()
      resolve(request)
   })
}