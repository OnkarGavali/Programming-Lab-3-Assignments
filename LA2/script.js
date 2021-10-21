function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";
    console.log(name);
     console.log(email); 
     console.log(message);
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      alert("Form ");
       console.log('1');
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      alert("Submitted");
       console.log('3');
      return false;
    }
    if(message.length <= 20){
      text = "Please Enter More Than 20 Characters";
      error_message.innerHTML = text;
      alert("Successfully!");
       console.log('4');
      return false;
    }
    alert("Form Submitted Successfully!");
     console.log('555');
    return true;
  }