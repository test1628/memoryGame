import Card from './Card';

const wrapper = document.querySelector('.wrapper');
const timerEl = document.querySelector('.timerEl');
const info_wrapper = document.querySelector('.info_wrapper');

export default class {
  constructor(pics, handler) {
	this.pics = pics.concat(pics);
	this.cards = [];
	this.restTime = 25;
	this.handler = handler;
	for (let i=0; i<this.pics.length; i++) {
		this.cards.push(new Card());
	}
	this.cards.forEach(card => wrapper.appendChild(card.div));
  }
  
  shufflePics() {
	this.pics.sort(() => Math.random() - 0.5);  
  }
   
  startGame() {
	this.shufflePics();
	for (let i=0; i<this.pics.length; i++) {
		this.cards[i].setPic(this.pics[i]);
	}
	timerEl.innerHTML = 'Времени осталось: ' + this.restTime;
	wrapper.addEventListener('click', this.handler);
  }
  
  restart() {
	info_wrapper.classList.remove('active');
	this.restTime = 25;
	this.cards.forEach(card => {
		card.div.className = '';
		card.div.classList.add('card');
	});
	setTimeout(this.startGame.bind(this), 500);
  }

}
