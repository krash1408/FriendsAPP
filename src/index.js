const url = 'https://randomuser.me/api/?results=30&inc=gender,name,email,registered,dob,phone,id,picture';
let field = document.querySelector('.main-field');

let fieldWrapper = document.createElement('div');
fieldWrapper.classList.add('main-field__wrapper');
fieldWrapper.innerHTML = '';

let usersArr = [];


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
      data.results.forEach(element => {
        let user = new User(element);
        user.createCard();
        usersArr.push(user);
        user.appendCard(usersArr);
      });
    })
    .catch(error => console.error(error));
}


const User = function(info) {
  this.info = info;
}

User.prototype.createCard = function (  ) {
  card = document.createElement('div');
  card.classList.add('card');

  cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card__wrapper');

  cardPhoto = document.createElement('img');
  cardPhoto.classList.add('card__photo');
  cardPhoto.setAttribute('src', `${this.info.picture.large}`);

  cardName = document.createElement('div');
  cardName.classList.add('card__name');
  cardName.innerHTML = `${this.info.name.first} ${this.info.name.last}`;

  card.appendChild(cardWrapper);
  cardWrapper.appendChild(cardPhoto)
  cardWrapper.appendChild(cardName);

  this.element = card;
}
User.prototype.appendCard = function ( arr ) {
  arr.forEach(value => {
    fieldWrapper.appendChild(value.element);
  })
  field.appendChild(fieldWrapper);
}

returnObject();
