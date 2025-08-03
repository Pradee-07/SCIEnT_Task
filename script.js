function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
function open_login(){
  window.open("login.html","_blank");
}


function registered(){
 const username = document.getElementById("username").value.trim().length;
    const password = document.getElementById("password").value.trim().length;

    if ((username>= 5 && password>= 5)  ) {
        alert("Registration Successful!");
        window.open("application.html");
        window.close();
        document.getElementById("username").style.borderColor="green";
        document.getElementById("password").style.borderColor="green";
        
    } else if((username && password) >0) {
       
        if(username<5 && password>=5){
          document.getElementById("username").style.borderColor="red";
          document.getElementById("password").style.borderColor="green";
          alert("Min length of 5 required in Username!!");
        }
      else if(password<5 && username>=5){
          document.getElementById("password").style.borderColor="red";
           document.getElementById("username").style.borderColor="light-green";
            alert("Min length of 5 required in Password!!");
      }
      else {
          document.getElementById("password").style.borderColor="red";
           document.getElementById("username").style.borderColor="red";
            alert("Min length of 5 required in both Username and Password!!");
      }
    }
    else{
      
     if(username==0 && password!=0){
          document.getElementById("username").style.borderColor="red";
          document.getElementById("password").style.borderColor="green";
          alert("Username is left Blank!!");
        }
     else if(password==0 && username!=0){
          document.getElementById("password").style.borderColor="red";
           document.getElementById("username").style.borderColor="green";
            alert("Password is left Blank!!");
      }
      else{
        document.getElementById("username").style.borderColor="red";
        document.getElementById("password").style.borderColor="red"; 
        alert("Both Username and Password are left Blank!!");
      }
  }
}
function apply() {
    const roll = document.getElementById("Rollno").value.trim();
    const dept = document.getElementById("Department").value.trim();
    const course = document.getElementById("Course").value;
    const year = document.getElementById("year").value;
    const email = document.getElementById("email").value.trim();

    let isValid = true;
    if (roll.length < 8 || isNaN(roll)) {
        document.getElementById("Rollno").style.borderColor = "red";
        alert("Roll number must be numeric and at least 8 digits!");
        isValid = false;
    } else {
        document.getElementById("Rollno").style.borderColor = "green";
    }


    if (dept === "") {
        document.getElementById("Department").style.borderColor = "red";
        alert("Department cannot be empty!");
        isValid = false;
    } else {
        document.getElementById("Department").style.borderColor = "green";
    }


    if (course === "") {
        document.getElementById("Course").style.borderColor = "red";
        alert("Please select a course!");
        isValid = false;
    } else {
        document.getElementById("Course").style.borderColor = "green";
    }


    if (year === "") {
        document.getElementById("year").style.borderColor = "red";
        alert("Please select a year!");
        isValid = false;
    } else {
        document.getElementById("year").style.borderColor = "green";
    }

    if (!email.endsWith("@nitt.edu")) {
        document.getElementById("email").style.borderColor = "red";
        alert("Web-mail must end with '@nitt.edu'!");
        isValid = false;
    } else {
        document.getElementById("email").style.borderColor = "green";
    }

    if (isValid) {
        alert("Application Submitted Successfully!");
        window.close();
    }
}