// selected elements
var navTrigger = document.getElementById('nav-trigger');
var nav = document.getElementById('nav');
var header = document.getElementById('header');
var heading = document.getElementById('heading');
var labels = document.getElementsByClassName('nav-label');

// Event Listening
navTrigger.addEventListener('click', navToggle);
window.addEventListener('resize', resize);
window.onload = resize;

function resize() {
  var windowWidth = window.innerWidth;

  if (windowWidth >= 1024) {
    nav.className = 'in';
  } else {
    nav.className = 'out';
  }

  if (windowWidth < 1024) {
    var windowHeight = window.innerHeight;
    var fontSize = windowHeight * 0.1;
    var headingSize = windowWidth * 0.1;
    headingSize = Math.min(headingSize, windowHeight * 0.3);

    for (var i = 0; i < labels.length; i++) {
      labels[i].style.fontSize = fontSize + 'px';
      labels[i].style.height = fontSize + 'px';
      labels[i].style.marginTop = '-' + fontSize * 0.6 + 'px';
    }

    header.style.height = windowHeight + 'px';
    heading.style.fontSize = headingSize + 'px';
    heading.style.height = headingSize + 'px';
    heading.style.marginTop = '-' + headingSize * 0.6 + 'px';
  } else {
    revertChanges();
  }
}

function revertChanges() {
  for (var i = 0; i < labels.length; i++) {
    labels[i].style.fontSize = '';
    labels[i].style.height = '';
    labels[i].style.marginTop = '';
  }

  header.style.height = '';
  heading.style.fontSize = '';
  heading.style.height = '';
  heading.style.marginTop = '';
}

function navToggle(e) {
  var closed = navTrigger.classList.contains('close');
  navTrigger.className = 'nav-trigger ' + (closed ? 'open' : 'close');
  nav.className = closed ? 'out' : 'in';
}

//Header posicionamiento
window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollThreshold = 0; // Posición de desplazamiento desde donde se cambia el color

  if (scrollTop > scrollThreshold) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});

