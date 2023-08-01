var btn_page_submitEl = $("#btn_page_submit2");


display1_message =() => {
  $(".form_submited_text").css("display", "block");

};

page2_validation = () => {

  var inputEl1 = $("#exampleInput1").val();
  var inputEl2 = $("#exampleInput2").val();
  var inputEl3 = $("#exampleInput3").val(); //choose
  var inputEl4 = $("#exampleInput4").val();
  var inputEl5 = $("#exampleInput5").val();

console.log(inputEl5); //

  // error messages page 1
  var error_messageEl1 = $("#invalid_content_1");
  var error_messageEl2 = $("#invalid_content_2");
  var error_messageEl3 = $("#invalid_content_3");
  var error_messageEl4 = $("#invalid_content_4");
  var error_messageEl5 = $("#invalid_content_5");



  let user_input_values = [
    inputEl1,
    inputEl2,
    inputEl3,
    inputEl4,
    inputEl5
   
    
  ];

  let display_input_errors = [
    error_messageEl1,
    error_messageEl2,
    error_messageEl3,
    error_messageEl4,
    error_messageEl5
   
    
  ];

  var display_page1 = [];

  for (let index = 0; index < user_input_values.length; index++) {
    if (user_input_values[index] == "") {
      display_input_errors[index].show();
      display_input_errors[index] = false;
    } else if (user_input_values[index] == "Choose...") {
      display_input_errors[index].show();
      display_input_errors[index] = false;
    } else {
      display_input_errors[index].hide();
      display_page1.push((display_input_errors[index] = true)); // push the value to empty array
    }
  }

  if (
    // getting the valuw form array
    display_page1[0] == true &&
    display_page1[1] == true &&
    display_page1[2] == true &&
    display_page1[3] == true &&
    display_page1[4] == true &&
    display_page1[5] == true 
 
  ) {
   display_message();
    return true;
  } else {
    return true;
  }
};

btn_page_submitEl.on("click", (event) => {
  event.preventDefault();
  
  page2_validation();
});