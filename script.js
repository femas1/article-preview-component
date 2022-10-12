const shareBtn = document.querySelector('.user__share');
const sharePopup = document.querySelector('.share-popup');
const sharePopupBackground = document.querySelector('.popupBackground')

shareBtn.addEventListener('mouseenter', () => {
    shareBtn.classList.add('filter-white');
    sharePopupBackground.classList.remove('hidden');
    sharePopup.classList.remove('hidden');
    
})
shareBtn.addEventListener('mouseleave', () => {
    shareBtn.classList.remove('filter-white');
    sharePopupBackground.classList.add('hidden');
    sharePopup.classList.add('hidden');
    
})

sharePopupBackground.addEventListener('mouseenter', () => {
    shareBtn.classList.add('filter-white');
    sharePopupBackground.classList.remove('hidden');
    sharePopup.classList.remove('hidden');
    
})

sharePopup.addEventListener('mouseleave', () => {
    shareBtn.classList.remove('filter-white');
    sharePopupBackground.classList.add('hidden');
    sharePopup.classList.add('hidden');
})