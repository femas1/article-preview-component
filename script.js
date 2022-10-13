const shareBtn = document.querySelector('.user__share');
const sharePopup = document.querySelector('.share-popup');
const sharePopupBackground = document.querySelector('.popupBackground')

shareBtn.addEventListener('mouseover', () => {
    shareBtn.classList.toggle('filter-white');  
})

shareBtn.addEventListener('click', () => {
    sharePopupBackground.classList.toggle('hidden');
    sharePopup.classList.toggle('hidden'); 
})