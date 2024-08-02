function submitForm() {
  var salutation = document.getElementById("Salutation").value;
    var firstname = document.getElementById("FirstName").value;
    var secondname = document.getElementById("SecondName").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var qualification = document.getElementById("qualification").value;
    var high = document.getElementById("High").value;
    var applyfor = document.getElementById("applyFor").value;
    var experience = document.getElementById('experience').value;
    var dob = document.getElementById("DOB").value;
    var address = document.getElementById("Address").value;
    // You can perform additional validation if needed
  if (confirm("Recheck") == true) {
    var responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = `Thank you, ${salutation}${firstname}! Your application has been submitted. We will contact you shortly.`;

   /* localStorage.setItem("DB",firstname);
    document.getElementById("demo").innerHTML = localStorage.getItem("DB");
 */
  } else { 

  }
  
    // You can also add code here to send the form data to a server using AJAX or fetch API
  }
  