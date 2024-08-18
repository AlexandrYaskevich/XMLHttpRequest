// TODO: write code here
const allForm = document.querySelector('.container-tickets');
const ticketList = document.querySelector('.ticket-list');
const ticketAddButton = document.querySelector('.add-tickets');
const btnNoneShow = document.querySelector('.btn-none-show');
const showTicket = document.querySelector('.show-ticket');
const btnOkshow = document.querySelector('.btn-ok-show');
const inputShotInformation = document.querySelector('.input-shot-information');
const deleteTickets = document.querySelectorAll('.delete-ticket');
const tickets = document.querySelectorAll('.ticket');

const xhr = new XMLHttpRequest();
const data = undefined;

deleteTickets.forEach((el, index) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
      tickets[index].remove();
  });
});


ticketAddButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  ticketList.innerHTML = `
  <form class="show-ticket">
    <div class="title">Добваить тикет</div>
    <label class="shot-information" for="input-shot-information">Краткое описание</label>
    <input class="input-shot-information">
    <label class="shot-information" for="input-all-information">Подробное описание</label>
    <input class="input-all-information">
    <button class="btn-none-show">Oтмена</button>
    <button class="btn-ok-show">Ok</button>
  </form>`;
});

btnNoneShow.addEventListener('submit', (evt) => {
  evt.preventDefault();
  ticketList.remove('showTicket');
});


const body = new FormData(showTicket);

showTicket.addEventListener('submit', (e) => {
  e.preventDefault();

  
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    
    console.log(xht.responseText);
  }
  
  xhr.open('POST', 'http://localhost:7070');
  
  xhr.send(body);
});

xhr.addEventListener('load', () => {
  if (xhr.status >= 200 && xhr.status < 300) {
      try {
          const data = JSON.parse(xhr.responseText);

          btnOkshow.addEventListener('submit', (evt) => {
            evt.preventDefault();
            ticketList.insertAdjacentHTML('beforeend', `     
             <div class="ticket" id="${data.id}">
                  <input type="checkbox" class="cheked-ticket">
                  <div class="ticket-name">${data.name}</div>
                  <div class="ticket-description">${data.description}</div>
                  <div class="ticket-created">${data.created}</div>
                  <button class="add-information-ticket">&#128393</button>
                  <button class="delete-ticket">Х</button>
                </div>`);
          }); 
      } catch (e) {
          console.error(e);
      }
  }
});
