const shareBtn = document.querySelector('.user__share');
const shareBtnMobile = document.querySelector('.user__shareMobile');
const sharePopup = document.querySelector('.share-popup');
const sharePopupBackground = document.querySelector('.popupBackground')

shareBtn.addEventListener('mouseover', () => {
    shareBtn.classList.toggle('filter-white');  
})

shareBtn.addEventListener('click', () => {
    sharePopupBackground.classList.toggle('hidden');
    sharePopup.classList.toggle('hidden'); 
})

shareBtnMobile.addEventListener("click", ()=> alert("mr white"))