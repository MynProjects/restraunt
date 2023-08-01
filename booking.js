
var btn_page_submitEl = $("#btn_page_submit");

display_message =() => {
    $(".form_submited_text").css("display", "block");
  
  };
  
  page_validation = () => {
  
    var inputEl1 = $("#exampleFormControlInput1").val();
    var inputEl2 = $("#exampleFormControlInput2").val();
    var inputEl3 = $("#exampleFormControlInput3").val(); //choose
    var inputEl4 = $("#exampleFormControlInput4").val();
    var inputEl5 = $("#exampleFormControlInput5").val();
    var inputEl6 = $("#exampleFormControlInput6").val();
    var inputEl7 = $("#exampleFormControlInput7").val(); //choose
    var inputEl8 = $("#exampleFormControlInput8").val();
    var inputEl9 = $("#exampleFormControlInput9").val(); //choose
    var inputEl10 = $("#exampleFormControlInput10").val(); //choose
  
  
    // error messages page 1
    var error_messageEl1 = $("#invalid_1");
    var error_messageEl2 = $("#invalid_2");
    var error_messageEl3 = $("#invalid_3");
    var error_messageEl4 = $("#invalid_4");
    var error_messageEl5 = $("#invalid_5");
    var error_messageEl6 = $("#invalid_6");
    var error_messageEl7 = $("#invalid_7");
    var error_messageEl8 = $("#invalid_8");
    var error_messageEl9 = $("#invalid_9");
    var error_messageEl10 = $("#invalid_10");
  
  
    let user_input_values = [
      inputEl1,
      inputEl2,
      inputEl3,
      inputEl4,
      inputEl5,
      inputEl6,
      inputEl7,
      inputEl8,
      inputEl9,
      inputEl10,
      
    ];
  
    let display_input_errors = [
      error_messageEl1,
      error_messageEl2,
      error_messageEl3,
      error_messageEl4,
      error_messageEl5,
      error_messageEl6,
      error_messageEl7,
      error_messageEl8,
      error_messageEl9,
      error_messageEl10,
      
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
      display_page1[5] == true &&
      display_page1[6] == true &&
      display_page1[7] == true &&
      display_page1[8] == true &&
      display_page1[9] == true 
      
    ) {
     display_message();
      return true;
    } else {
      return true;
    }
  };
  
  btn_page_submitEl.on("click", (event) => {
    event.preventDefault();
    page_validation();
  });