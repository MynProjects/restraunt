var submit_btnEl = $("#submit_btn");



var nameEl = document.querySelector("#validationCustom01");
var phone_numberEl = document.querySelector("#validationCustom02");
var dateEl = document.querySelector("#validationCustom03");
var timeEl = document.querySelector("#validationCustom04");
var menuEl = document.querySelector("#validationCustom05");

nameEl.innerHTML = localStorage.getItem("name_client")
console.log(nameEl.innerHTML)



var name_client = () => {

  if (nameEl.value == "") {
    $("#invalid1").css("display", "block");
    name_error = false;
  } else {
    $("#invalid1").css("display", "none");
    name_error = true;

  };
}
var phone_number = () => {

  if (phone_numberEl.value == "") {
    $("#invalid2").css("display", "block");
    phone_number_error = false;

    return false;
  } else {
    $("#invalid2").css("display", "none");

    phone_number_error = true;
  }
};

var date = () => {

  if (dateEl.value == "") {
    $("#invalid3").css("display", "block");
    date_error = false;


    return false;
  } else {
    $("#invalid3").css("display", "none");


    date_error = true;
  }
};

var time = () => {

  if (timeEl.value == "") {
    $("#invalid4").css("display", "block");
    time_error = false;

    return false;
  } else {
    $("#invalid4").css("display", "none");
    time_error = true;

  }
};
var menu_new = () => {
  if (menuEl.value == 0) {
    $("#invalid5").css("display", "block");
    menu_error = false;
    return false;
  } else {
    $("#invalid5").css("display", "none");
    menu_error = true;

  }
};

submit_btnEl.on("click", function (event) {
  event.preventDefault();

  name_client();
  phone_number();
  date();
  time();
  menu_new();

  if (
    (name_error == true &&
      phone_number_error == true &&
      date_error == true &&
      time_error == true,
      menu_error == true)
  ) {

    store_data();

    return true;
  } else {
    return true;
  }
});

var store_data =()=>{
  
  localStorage.setItem("name_client", nameEl.value);
  localStorage.setItem("phone_client", phone_numberEl.value);
  localStorage.setItem("order_date", dateEl.value);
  localStorage.setItem("order_time", timeEl.value);
  localStorage.setItem("order_value", menuEl.value);

};

//on reloaded display the stored variables


