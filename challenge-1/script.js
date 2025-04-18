'use script';

const toggleBtn = document.querySelectorAll('.toggle-circle');
const inactive = document.querySelector('.inactive');
const navLinks = document.querySelectorAll('.section-header  li');
const extensionsCard = document.querySelectorAll('.extensions-card');
const activeCardsLink = document.querySelector('.active');
const inactiveCardsLink = document.querySelector('.inactive');
const allCardsLink = document.querySelector('.all');
const removeCard = document.querySelectorAll('.remove-card');
const displayNone = document.querySelector('.error-mg');

activeCardsLink.addEventListener('click', () => {
  extensionsCard.forEach(card => {
    if (card.classList.contains('activeCard')) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

inactiveCardsLink.addEventListener('click', () => {
  extensionsCard.forEach(card => {
    if (card.classList.contains('activeCard')) {
      card.style.display = 'none';
    } else {
      card.style.display = 'block';
    }
  });
});

allCardsLink.addEventListener('click', () => {
  extensionsCard.forEach(card => {
    card.style.display = 'block';
  });
});

const removeAllActiveLinks = function (links) {
  links.forEach(link => {
    link.classList.remove('activeLink');
  });
};

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    removeAllActiveLinks(navLinks);
    link.classList.add('activeLink');
  });
});

toggleBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('turned-on');

    btn.parentElement.classList.toggle('on');

    btn.parentElement.parentElement.parentElement.classList.toggle(
      'activeCard'
    );
  });
});

removeCard.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.parentElement.remove();
  });
});
