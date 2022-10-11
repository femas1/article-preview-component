const shareBtn = document.querySelector('.user__share');
const sharePopup = document.querySelector('.share-popup');

shareBtn.addEventListener('mouseenter', () => {
    shareBtn.classList.add('filter-white')
    
})
shareBtn.addEventListener('mouseleave', () => {
    shareBtn.classList.remove('filter-white')
    
})
