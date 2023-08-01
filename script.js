var burgerEl = $(".burger");
var lunch_menuEl = $("#lunchmenu");
var dinner_menuEl = $("#dinnermenu");
var takeaway_menuEl = $("#takeawaymenu");
var buttonEl = $("button");



$(document).ready(function () {
  dinner_menuEl.hide();
  takeaway_menuEl.show();
  lunch_menuEl.hide();
});

var burger = $(".burger").hasClass("bi bi-list");

/* Toggle mobile menu */

var toggleMenu = () => {
  if (burger) {
    burgerEl.toggleClass("bi bi-x");
  } else {
    burgerEl.toggleClass("bi bi-list");
  }
};

// change lunch  to dinner and dinner to lunch
buttonEl.click(function () {
  var fired_button = $(this).val();
  if (fired_button == 2) {
    console.log(fired_button);
    dinner_menuEl.show();
    takeaway_menuEl.hide();
    lunch_menuEl.hide();
  } else if (fired_button == 1) {
    console.log(fired_button);
    dinner_menuEl.hide();
    takeaway_menuEl.hide();
    lunch_menuEl.show();
  } else {
    console.log(fired_button);
    dinner_menuEl.hide();
    takeaway_menuEl.show();
    lunch_menuEl.hide();
  }
});
