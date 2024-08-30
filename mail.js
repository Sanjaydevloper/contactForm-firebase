const firebaseConfig = {
    apiKey: "AIzaSyAgZ5TnYc5TPIzOiNrtRBuM8_725n05Y9o",
    authDomain: "contactfrom-19c79.firebaseapp.com",
    databaseURL: "https://contactfrom-19c79-default-rtdb.firebaseio.com",
    projectId: "contactfrom-19c79",
    storageBucket: "contactfrom-19c79.appspot.com",
    messagingSenderId: "939680689430",
    appId: "1:939680689430:web:7f39b618c520eb05b73437"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };