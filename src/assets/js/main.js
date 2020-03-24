// Show header text
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    const headerText = document.querySelector('.camlab-story');
    const courses = document.querySelector('.camlab-courses');
    headerText.classList.remove('hidden-text');
    headerText.classList.add('slideLeft');
    courses.classList.remove('hidden-text');
    courses.classList.add('slideRight');
  }, 1000);
});

// Responsive navbar
mobileNav();

function mobileNav() {
  const hamburger = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('.nav-content');
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('animated');
    nav.classList.toggle('display-none');
    nav.classList.toggle('slideLeft');
    closeNav();
  });
}

function closeNav() {
  const hamburger = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('.nav-content');
  let links = document.querySelectorAll('.closeNavJs');
  links = Array.from(links);
  links.forEach(function(elem) {
    elem.addEventListener('click', function() {
      hamburger.classList.remove('animated');
      nav.classList.remove('slideLeft');
      nav.classList.add('display-none');
    });
  });
}

// Dropdown menu
openDrop();

function openDrop() {
  const drop = document.querySelector('.dropdown');
  const content = document.querySelector('.content');
  drop.addEventListener('click', function() {
    content.classList.toggle('open');
    content.classList.toggle('slideDown');
  });
}

// Courses

showInfo();

function showInfo() {
  let corsi = document.querySelectorAll('.getInfoJs');
  corsi = Array.from(corsi);
  let info = document.querySelectorAll('.showInfoJs');
  info = Array.from(info);
  corsi.forEach(function(el, index) {
    el.addEventListener('click', function() {
      info[index].classList.toggle('display-none');
      info[index].classList.toggle('slideDown');
    });
  });
}

// prenotazione corso wizard form
// let currentTab = 0;
// showTab(currentTab);

// const showTab = n => {
//   const tab = document.getElementsByClassName('tab');
//   tab[n].style.display = 'block';

//   if (n === 0) {
//     document.querySelector('#prevBtn').style.display = 'none';
//   } else {
//     document.querySelector('#prevBtn').style.display = 'inline';
//   }

//   if (n === tab.length - 1) {
//     document.querySelector('#nextBtn').innerHTML = 'Prenota';
//   } else {
//     document.querySelector('#nextBtn').innerHTML = 'Continua';
//   }

//   fixStepIndicator(n);
// };

// function nextPrev(n) {
//   const tab = document.getElementsByClassName('tab');
//   if (n === 1) return false;

//   tab[currentTab].style.display = 'none';
//   currentTab = currentTab + n;

//   if (currentTab >= tab.length) {
//     document.querySelector('#prenotazione-corso-form').submit;
//     return false;
//   }
//   showTab(currentTab);
// }

// function fixStepIndicator(n) {
//   let i,
//     step = document.getElementsByClassName('step');
//   for (i = 0; i < step.length; i++) {
//     step[i].className = step[i].className.replace('active', '');
//   }
//   step[n].className += ' active';
// }

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName('tab');
  x[n].style.display = 'flex';
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById('prevBtn').style.display = 'none';
  } else {
    document.getElementById('prevBtn').style.display = 'inline';
  }
  if (n == x.length - 1) {
    document.getElementById('nextBtn').innerHTML = 'Prenota';
  } else {
    document.getElementById('nextBtn').innerHTML = 'Continua';
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName('tab');
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = 'none';
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById('prenotazione-corso-form').submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName('tab');
  y = x[currentTab].getElementsByTagName('input');
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == '') {
      // add an "invalid" class to the field:
      y[i].className += ' invalid';
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName('step')[currentTab].className += ' finish';
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName('step');
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(' active', '');
  }
  //... and adds the "active" class to the current step:
  x[n].className += ' active';
}
