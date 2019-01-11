var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://randomuser.me/api/', true);

xhr.send();
person = {};

xhr.ready = function() {
  if (this.readyState != 4) return;

  // по окончании запроса доступны:
  // status, statusText
  // responseText, responseXML (при content-type: text/xml)

  if (this.status != 200) {
    // обработать ошибку
    console.error('ошибка. хз че делать')
    return;
  }

  // получить результат из this.responseText или this.responseXML
  let str = this.responseText;
  function obj(x) {
    let y = '';
    for (var i = 1; i < x.length; i++) {
      y = y + x.charAt(i);
    }
    return y;
  }
  let person = obj(str);
  
  return person;
}
