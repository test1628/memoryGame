export default class {
  constructor() {	
	this.figureFr = (() => {
		const  figureFr = document.createElement('figure');
		figureFr.classList.add('front');
		return figureFr;
	})();
	
	this.figureBk = (() => {
		const  figureBk = document.createElement('figure');
		figureBk.classList.add('back');
		return figureBk;
	})();
    
	this.div = (() => {
		const  div = document.createElement('div');
		div.classList.add('card');
		div.appendChild(this.figureFr);
		div.appendChild(this.figureBk);
		return div;
	})();
  }
  setPic(pic) {
	this.figureBk.innerHTML = pic;  
  }
}