const $ = x => document.querySelector(x);
const $$ = x => document.querySelectorAll(x);

const API = "https://randomuser.me/api/?results=30";
let userPool = [];
fetch(API)
  .then(function ifError(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  })
  .then(function (data) {
    userPool = data.results;
  })


$('.card__photo').setAttribute('src',`url:${userPool[1].picture.large}`); 
