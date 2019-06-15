//DOM elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

//Options
const showAmPm = true;

//Show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  //12hrs format
  hour = hour % 12 || 12;

  //output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;
  setTimeout(showTime, 1000);
}
//Add zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set background or greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //morning
    document.body.style.backgroundImage =
      "url('https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?cs=srgb&dl=beach-exotic-holiday-248797.jpg&fm=jpg')";
    greeting.textContent = 'Good Morning, ';
    document.body.style.color = 'White';
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage =
      "url('https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg?cs=srgb&dl=afternoon-boat-clouds-2386144.jpg&fm=jpg')";
    greeting.textContent = 'Good Afternoon, ';
  } else {
    //Evening
    document.body.style.backgroundImage =
      "url('https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?cs=srgb&dl=astronomy-beautiful-clouds-355465.jpg&fm=jpg')";
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
}
//Get name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = 'Your Name';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}
//Set name
function setName(e) {
  if (e.type === 'keypress') {
    //make sure enter is pressed
    if (e.which == 13 || e.keycode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}
//Get focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = 'Your Focus';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}
//Set focus
function setFocus(e) {
  if (e.type === 'keypress') {
    //Make sure enter is pressed
    if (e.which == 13 || e.keycode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
  }
}
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run
showTime();
setBgGreet();
getName();
getFocus();
