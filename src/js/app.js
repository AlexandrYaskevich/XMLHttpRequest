// TODO: write code here
const ticketList = document.querySelector('.ticket-list');
const ticketAddButton = document.querySelector('.add-tickets');
const btnNoneShow = document.querySelector('.btn-none-show');
const showTicket = document.querySelector('.show-ticket');
const btnOkshow = document.querySelector('.btn-ok-show');
const inputShotInformation = document.querySelector('.input-shot-information');
const deleteTickets = document.querySelectorAll('.delete-ticket');
const tickets = document.querySelectorAll('.ticket');


deleteTickets.forEach((el, index) => {
  el.addEventListener('click', () => {
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

btnOkshow.addEventListener('submit', (evt) => {
  evt.preventDefault();
  ticketList.insertAdjacentHTML('beforeend', `     
   <div class="ticket">
        <input type="checkbox" class="cheked-ticket">
        <div class="ticket-name">${inputShotInformation.value}</div>
        <button class="add-information-ticket">&#128393</button>
        <button class="delete-ticket">Х</button>
      </div>`);
}); 