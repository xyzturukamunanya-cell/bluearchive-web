const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {

    cards.forEach((item) => {
      item.classList.remove('active');
    });

    card.classList.add('active');
  });
});
// AGE WARNING

const enterBtn = document.getElementById('enterBtn');
const ageWarning = document.getElementById('ageWarning');

// cek apakah user sudah enter
if(localStorage.getItem('ageConfirmed')){
  ageWarning.style.display = 'none';
}

enterBtn.addEventListener('click', () => {

  // simpan status
  localStorage.setItem('ageConfirmed', 'true');

  // hilangkan popup
  ageWarning.style.display = 'none';
});
 //Test Reset
 localStorage.removeItem('ageConfirmed');