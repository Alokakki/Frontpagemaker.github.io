
//***********Update College & Image Logo************** */
function changeCollege() {
  // var selectElement = document.getElementById("collegelist");
  // var selectedValue = selectElement.options[selectElement.selectedIndex].text;
  // document.getElementById("finalcollege").textContent = selectedValue;
  //********************************************** */
  var selector = document.getElementById('collegeSelector');
  var heading = document.getElementById('collegeHeading');
  var image = document.getElementById('collegeImage');
  
  var selectedCollege = selector.value;
  
  
  // Update heading based on selected college
  if (selectedCollege === 'mgkvp') {
    var crrHeading = 'Mahatma Gandhi Kashi Vidyapith, Varanasi';
    heading.innerText = crrHeading;
      image.src = 'logo.jpeg';
      document.getElementById("teachercollege").textContent = crrHeading;
      document.getElementById("footercollege").textContent = crrHeading;
    } 
    else if (selectedCollege === 'upc') {
      var crrHeading = 'Udai Pratap Autonumous College, Varanasi';
      heading.innerText = crrHeading ;
      image.src = 'upclogo.jpeg';
      document.getElementById("teachercollege").textContent = crrHeading;
      document.getElementById("footercollege").textContent = crrHeading;
}
  else if (selectedCollege === 'hcpg') {
    var crrHeading = 'Harish Chandra Post Gradutation College, Varanasi';
    heading.innerText = crrHeading ;
    image.src = 'hrish.jpeg';
    document.getElementById("teachercollege").textContent = crrHeading;
      document.getElementById("footercollege").textContent = crrHeading;
  }
  else if (selectedCollege === 'rsmt') {
    var crrHeading = 'Rajarshi School of Management and Techonogy, Varanasi';
    heading.innerText = crrHeading ;
    image.src = 'rsmt.jpg';
    document.getElementById("teachercollege").textContent = crrHeading;
      document.getElementById("footercollege").textContent = crrHeading;
  }
}
// }
// document.getElementById("teachercollege").textContent = crrHeading;
// document.getElementById("footercollege").textContent = crrHeading;



//**************Update Session************** */
function updatesession() {
  var sessionvalue = document.getElementById('sessionList').value;
  document.getElementById("form_Session").textContent = sessionvalue;
}

//**************Update Session************** */
function updatesubject() {
  var subjectvalue = document.getElementById('subjectlist').value;
  document.getElementById("form_subject").textContent = subjectvalue;
}

//**************Update assignment************** */
function updateassign() {

  // Get the selected option's text content
  var assignmentlist = document.getElementById('assignmentlist').value;

  // Update the h6 element with the selected value
  document.getElementById("form_AssignmentTopic").textContent = assignmentlist;
}

//**************Update teacher Name************** */
function updateteachername() {
  var teacherfirst = document.getElementById('teacherfirst').value;
  var teacherlast = document.getElementById('teacherlast').value;
  var teachername = teacherfirst + " " + teacherlast
  document.getElementById("finalteachername").textContent = teachername;
}

//**************Update teacher Post************** */
function updateteacherpost() {
  var teacherpost = document.getElementById('teacherlist').value;
  document.getElementById("finalteacherpost").textContent = teacherpost;
}
//**************Update teacher departmnt************** */
function teacherdepartment() {
  var teacherdepartment = document.getElementById('teacherdepartlist').value;
  document.getElementById("teacherdepartmet").textContent = teacherdepartment;

}

//**************Update student Name************** */
function updatestudentname() {
  var studentfirst = document.getElementById('studentfirst').value;
  var studentlast = document.getElementById('studentlast').value;
  var studentname = studentfirst + " " + studentlast
  document.getElementById("finalstudentname").textContent = studentname;
}


//**************Update semester of student ************** */
function updatesemeter() {
  var semesterchoose = document.getElementById("semesterlist");
  var semestervalue = semesterchoose.options[semesterchoose.selectedIndex].text;
  document.getElementById("finalclass").textContent = semestervalue;

}

//**************Update reg.  roll ************** */
function updatereg() {
  var regorroll = document.getElementById('reglist').value;
  document.getElementById("reg_no").textContent = regorroll;
}
//**************Update reg.  roll ************** */
function updatedepofreg() {
  var dopvalue = document.getElementById('listofdop').value;
  document.getElementById("dop_final").textContent = dopvalue;
}





// *****************Change Image ********************

// function changeImage() {
//   var currentimage = document.getElementsByClassName("imageSelector");
//   var crimg = document.getElementById("changingImage");
//   // var currentimg = document.getElementsByClassName(changeImage.replace("changingImage", "imageSelector"));
//   // var  = document.getElementsByClassName("imageSelector");

//   // var image = document.getElementsByClassName("chan");
//   var crtimg = currentimage.value;
//   // Get the selected option value
//   // var selectedOption = selector.options[selector.selectedIndex].value;
//   // var selectedOption = currentimg.options[currentimg.selectedIndex].value;

//   // Change the image source based on the selected option
//   switch (crtimg) {
//     case "hcpg":
//       crimg.src = "hrish.jpeg";
//       break;
//     case "rsmt":
//       crimg.src = "rsmt.jpg";
//       break;
//     case "upc":
//       crimg.src = "upclogo.jpeg";
//       break;
//     // Add more cases for additional options
//     default:

//     // Default case if no match is found
//       crimg.src = ""; // Set a default image source or leave it empty
//   }
// }




// ************************GEnerate PDF *************************

//******************************* */
function nameandlogo() {
  updatecollege();
  changeImage();
}
// **************************************
// print button
function printSection() {
  // Print the page
  var printSec = document.getElementById("printkrnewala");
  printSec.style.width = '95vw';
  printSec.style.height = '104%';
  
  var collegename = document.getElementById("collegeHeading");
  collegename.style.fontSize = '50px';
  
  window.print();
  
  setTimeout(function() {
    collegename.style.fontSize = '50px';
    printSec.style.width = '50%';
  printSec.style.height = '50%';
    location.reload();
  }, 10);
}
