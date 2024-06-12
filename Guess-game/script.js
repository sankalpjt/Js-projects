'use strict';

const secretNum = Math.trunc(Math.random() * 20 + 1);

// event handler
const checkClicked = () => {
  console.log('hello');

  document.querySelector('.number').textContent =
    document.querySelector('.guess').value;

  if (document.querySelector('.score').textContent > 1) {
    if (document.querySelector('.guess').value > secretNum) {
      console.log(document.querySelector('.message').textContent);

      document.querySelector('.score').textContent =
        document.querySelector('.score').textContent - 1;
      document.querySelector('.message').textContent = 'too high';
    } else if (document.querySelector('.guess').value < secretNum) {
      document.querySelector('.score').textContent =
        document.querySelector('.score').textContent - 1;

      document.querySelector('.message').textContent = 'too low';
    } else {
      document.querySelector('.message').textContent = 'great you won !!!';
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
        document.querySelector('body').style.backgroundColor='#60b347'
    }
  }

  else{

    document.querySelector('.message').textContent= 'you lost'
  }
};
const againClicked=()=>{
    document.querySelector('.score').textContent='20';
    document.querySelector('.message').textContent='guess'
    document.querySelector('.number').textContent='?'
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.guess').value=''
}
document.querySelector('.check').addEventListener('click', checkClicked);
document.querySelector('.again').addEventListener('click',againClicked)