const url = 'https://randomuser.me/api/?results=30&inc=gender,name,email,dob,phone,picture';
let userPool = [];

function returnObject() {
  fetch(url)
    .then(function ifError(response) {
      if (response.ok) {
        return response.json();
      }
      else {
        throw Error(response.statusText);
      }
    })
    .then(function (data) {
      userPool = data.results;
    })
    .catch(error => console.error(error));
}
returnObject();

function friendsApp () {
  
}

card = document.createElement('div')
cardWrapper = document.createElement('div');
cardPhoto = document.createElement('img');
cardInfo = document.createElement('div');
card.classList.add('card');
cardWrapper.classList.add('card__wrapper');
cardPhoto.classList.add('card__photo');
cardInfo.classList.add('card__info');
card.appendChild(cardWrapper);
cardWrapper.appendChild(cardPhoto);
cardWrapper.appendChild(cardInfo);
// cardPhoto.setAttribute('src',`url('${userPool[0].picture.large}')`);
