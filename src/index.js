let wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
wrapper.style.width = '300px';
wrapper.style.height = '500px';
wrapper.style.border = '1px solid black';
document.querySelector('main').appendChild(wrapper);

let URL = "https://randomuser.me/api/?results=30";
let DATA = [];


function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

fetch(URL)
  .then(handleErrors)
  .then(response => response.json())
  .then(data => {
    DATA = data.results;
  });
