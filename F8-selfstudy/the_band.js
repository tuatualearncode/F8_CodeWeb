const buyBtns = document.querySelectorAll('.js-buy-ticket');  // get element button BuyTickets

let modal = document.querySelector('#modal');   // get element Modal
console.log(modal)
let js_modal_container = document.querySelector('.js-modal-container')
console.log(js_modal_container)

let modal_close = document.querySelector('.modal-close');   // get element modal-close
console.log(modal_close)


function showModal()
{
    modal.classList.add('open')
}
for ( const buyBtn of buyBtns) // lặp qua từng phần tử của nodelist buyBtns
{
    buyBtn.addEventListener('click', showModal); // nhúng hành vi click với lệnh showModal
               
}


function closeModal()
{
   modal.classList.remove('open');
}
modal_close.addEventListener('click', closeModal)  //nhúng hành vi click vào nút close với lệnh closeModal

modal.addEventListener('click', closeModal); // khi click vào thì sẽ gọi đến sự kiện closeModal
// nhưng lúc này bấm vào chỗ nào là element con của modal thì nó cũng mất hết, để sử lý : 
js_modal_container.addEventListener('click', function(event)
            {
                event.stopPropagation(); // hàm này ngăn bọt biển
            })
