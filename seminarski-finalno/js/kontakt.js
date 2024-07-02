function validateForm(e) {
    e.preventDefault();
    document.getElementById("tacno").style.display = "none";
    document.querySelectorAll(".error").forEach((error) => {
      error.style.display = "none";
    });
    document.getElementById("ime").style.border = "#576d94 1px solid";
    document.getElementById("ime").style.backgroundColor = "transparent";
    document.getElementById("prezime").style.border = "#576d94 1px solid";
    document.getElementById("prezime").style.backgroundColor = "transparent";
    document.getElementById("email").style.border = "#576d94 1px solid";
    document.getElementById("email").style.backgroundColor = "transparent";
    document.getElementById("poruka").style.border = "#576d94 1px solid";
    document.getElementById("poruka").style.backgroundColor = "transparent";
  
    let wrong = false;
    let name1 = document.getElementById("ime").value;
    let surname = document.getElementById("prezime").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("poruka").value;
    if (name1 === "") {
      document.getElementById("ime").style.border = "2px solid red";
      document.getElementById("ime").style.backgroundColor =
        "rgba(255, 0, 0, 0.2)";
      document.getElementById("ime-greska").style.display = "block";
      wrong = true;
    }
    if (name1.length < 3) {
      document.getElementById("ime").style.border = "2px solid red";
      document.getElementById("ime").style.backgroundColor =
        "rgba(255, 0, 0, 0.2)";
      document.getElementById("ime-greska1").style.display = "block";
      wrong = true;
    }
    if (name1 !== name1.replace(/[^a-zA-Z]/g, "")) {
      document.getElementById("ime").style.border = "2px solid red";
      document.getElementById("ime").style.backgroundColor =
        "rgba(255, 0, 0, 0.2)";
      document.getElementById("ime-greska2").style.display = "block";
      wrong = true;
    }
    if (surname === "") {
      document.getElementById("prezime").style.border = "2px solid red";
      document.getElementById("prezime").style.backgroundColor =
        "rgba(255, 0, 0, 0.2)";
      document.getElementById("prezime-greska2").style.display = "block";
      wrong = true;
    }
    if (surname.length < 3) {
      document.getElementById("prezime").style.border = "2px solid red";
      document.getElementById("prezime").style.backgroundColor =
        "rgba(255, 0, 0, 0.2)";
      document.getElementById("prezime-greska").style.display = "block";
      wrong = true;
    }
    if (surname !== surname.replace(/[^a-zA-Z]/g, "")) {
      document.getElementById("prezime").style.border = "2px solid red";
      document.getElementById("prezime").style.backgroundColor =
        "rgba(255, 0, 0, 0.2)";
      document.getElementById("prezime-greska1").style.display = "block";
      wrong = true;
    }
    if (email === "") {
      document.getElementById("email").style.border = "2px solid red";
      document.getElementById("email").style.backgroundColor =
        "rgba(255, 0, 0, 0.2)";
      document.getElementById("email-greska").style.display = "block";
      wrong = true;
    }
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      document.getElementById("email").style.border = "2px solid red";
      document.getElementById("email").style.backgroundColor =
        "rgba(255, 0, 0, 0.2)";
      document.getElementById("email-greska1").style.display = "block";
      wrong = true;
    }
    if (message === "") {
      document.getElementById("poruka").style.border = "2px solid red";
      document.getElementById("poruka").style.backgroundColor =
        "rgba(255, 0, 0, 0.2)";
      document.getElementById("poruka-greska").style.display = "block";
      wrong = true;
    }
    document.getElementById("ime").value = "";
    document.getElementById("prezime").value = "";
    document.getElementById("email").value = "";
    document.getElementById("poruka").value = "";
    if (wrong) {
      return false;
    }
    document.getElementById("tacno").style.display = "block";
    return true;
  }
  const btn = document.querySelector(".btn-submit");
  
  btn.addEventListener("click", validateForm);
  