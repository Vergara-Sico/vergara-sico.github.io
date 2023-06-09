var el = document.getElementsByClassName("hidden-js");
var dot = document.getElementsByTagName("li");
var _index = 0;

function goLeft() {
	if (_index != 0) {
		dot[_index].className = "";
		dot[_index-1].className = "current"
		el[_index].style.display = "none";
		el[_index-1].style.display = "";
		_index = _index - 1;
		if (_index == 0) document.getElementById("left").style.display = "none";
		else document.getElementById("right").style.display = "";
	}
}

function goRight() {
	if (_index < el.length - 1) {
		dot[_index].className = "";
		dot[_index+1].className = "current"
		el[_index].style.display = "none";
		el[_index+1].style.display = "";
		_index = _index + 1;
		if (_index == el.length - 1) document.getElementById("right").style.display = "none";
		else document.getElementById("left").style.display = "";
	}
}

let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
	if (window.innerWidth < 960 && Math.abs(touchendX - touchstartX) > 50)
	  if (touchendX < touchstartX) goRight();
	  if (touchendX > touchstartX) goLeft();
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  checkDirection();
})

function toLeftRight(_dir) {
	if (_dir == "l") goLeft();
	else goRight();
}

function dotNav(_number) {
	if (_number != _index) {
		dot[_index].className = "";
		dot[_number].className = "current"
		el[_index].style.display = "none";
		el[_number].style.display = "";
		_index = _number;
	}
}