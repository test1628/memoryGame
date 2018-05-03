import Card from './Card';
import Game from './Game';
 
const info_wrapper = document.querySelector('.info_wrapper');
const msg = info_wrapper.querySelector('.msg');
const restart = info_wrapper.querySelector('.restart');
const wrapper = document.querySelector('.wrapper');
const timerEl = document.querySelector('.timerEl');
let timer;
let needNewTimer = true;
const arr = ['🐶', '🐭', '🐹', '🐰', '🐻', '🐼'];

let previous;
let needCheck = false;
let count = arr.length;

const handler = ({ target }) => {
	const card = target.parentNode;
	if (!card.classList.contains('card') || target.classList.contains('back')) {
		return;
	}
	
	if (needNewTimer) {
		timerEl.innerHTML = 'Времени осталось: ' + mygame.restTime;
		timer = setInterval(timeStep, 1000);
		needNewTimer = false;
	}
	
	const wrongCards = wrapper.querySelectorAll('.wrong');
	if (wrongCards.length > 0) {
		wrongCards.forEach(card => card.classList.remove('flipped'));
		setTimeout(()=> {wrongCards.forEach(card => card.classList.remove('wrong'))}, 500);
	}
	card.classList.toggle("flipped");
	
	if (needCheck) {

		if (card.querySelector('.back').innerHTML === previous.querySelector('.back').innerHTML) {
			card.classList.add('disabled');
			previous.classList.add('disabled');
			count -= 1;
			if (count === 0) {
				setResult('Вы выиграли!');
			}
		} else {
			card.classList.add('wrong');
			previous.classList.add('wrong');
		}
		needCheck = false;
		return;
	}
	
	needCheck = true;
	previous = card;
};

const mygame = new Game(arr, handler);
mygame.startGame();

const timeStep = () => {
	mygame.restTime -= 1;
	timerEl.innerHTML = `Времени осталось: ${mygame.restTime}`;
	if (mygame.restTime === 0) {
		setResult('Вы проиграли(');
		needCheck = false;
	}
};

const setResult = (txt) => {
	clearInterval(timer);
	info_wrapper.classList.add('active');
	msg.innerHTML = txt;
	wrapper.removeEventListener('click', handler);
	needNewTimer = true;
	count = arr.length;
};

restart.addEventListener('click', mygame.restart.bind(mygame));
