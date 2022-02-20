/* =================================== typing text animation =================================== */

var typed = new Typed(".typing", {
  strings: [
    "",
    "web developer",
    "web designer",
    "graphic designer",
    "freelancer",
    "writter",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
var typed = new Typed(".sendMessage", {
  strings: [
    "",
    "Send me a message! ",
    "Got tips on how to improve my coding skills? ",
    "Good anime recommendation ⬇",

    "",
  ],
  typeSpeed: 100,
  BackSpeed: 40,
  loop: true,
});
/*=================================== page changing + animation ===================================  */
const nav = document.querySelector("nav"),
  navList = nav.querySelectorAll("li"),
  allSection = document.querySelectorAll("section"),
  sectionTotal = allSection.length,
  totalNavList = navList.length,
  contactBtn = document.querySelector(".home-btn-2"),
  sadalmelik = document.querySelector("#sadalmelik");

//Handling the click on a elements
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");

  a.addEventListener("click", function () {
    //remove active class
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    // add color to active link
    this.classList.add("active");
    showSection(this);
  });
}

//Show the desired section
function showSection(element) {
  // add  hidding class to sections
  for (let i = 0; i < sectionTotal; i++) {
    allSection[i].classList.add("hidden");
  }
  const target = element.getAttribute("href").split("#")[1]; // .split methode divides a string into ol of substring stored in an array
  const id = document.querySelector("#" + target);
  //removes hidding class if present
  if (id.classList.contains("hidden")) {
    id.classList.remove("hidden");
    id.classList.add("animation");
  }
  changeTogglerIcon();
  openSideMenu();
}
//CLicking on get in touch button bring to contact page
contactBtn.addEventListener("click", () => {
  const a0 = navList[0].querySelector("a");
  const a3 = navList[3].querySelector("a");
  a0.classList.remove("active");
  a3.classList.add("active");
  allSection[0].classList.add("hidden");
  allSection[3].classList.remove("hidden");
});

// Clicking on Sadalmelik bring back to home page
sadalmelik.addEventListener("click", () => {
  for (let j = 0; j < totalNavList; j++) {
    navList[j].querySelector("a").classList.remove("active");
    allSection[j].classList.add("hidden");
  }
  navList[0].querySelector("a").classList.add("active");
  allSection[0].classList.remove("hidden");
  openSideMenu();
  changeTogglerIcon();
});

/*===================================  Nav toggler click event =================================== */

const navTogglertbn = document.querySelector(".nav__toggler");
const aside = document.querySelector("aside");
const toggler = navTogglertbn.querySelector("i");

//handles click on hamburger
navTogglertbn.addEventListener("click", () => {
  openSideMenu();
  changeTogglerIcon();
});

//Open side bar on click
function openSideMenu() {
  aside.classList.toggle("open");
  navTogglertbn.classList.toggle("open");
}
//change toggler icon when side bar open/closes
function changeTogglerIcon() {
  toggler.classList.toggle("fas");
  toggler.classList.toggle("fa-bars");
  toggler.classList.toggle("fas");
  toggler.classList.toggle("fa-times");
}

/*===================================  Form Validation =================================== */
function validateContactForm() {
  var valid = true;

  $(".info").html("");
  var userName = $("#userName").val();
  var userEmail = $("#userEmail").val();
  var subject = $("#subject").val();
  var content = $("#message").val();

  if (userName == "") {
    $("#userName-info").html("required *");
    $("#userName-info").css("color", "#ff0000");
    $("#userName-info").css("font-size", "1rem");
    $("#userName").css("border", "#e66262 1px solid");
    $("#userName").css("border-radius", "0px");
    valid = false;
  }
  if (userEmail == "") {
    $("#userEmail-info").html("required *");
    $("#userEmail-info").css("color", "#ff0000");
    $("#userEmail-info").css("font-size", "1rem");
    $("#userEmail").css("border", "#e66262 1px solid");
    $("#userEmail").css("border-radius", "0px");
    valid = false;
  }
  if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
    $("#userEmail-info").html("Invalid Email Address.");
    $("#userEmail-info").css("color", "#ff0000");
    $("#userEmail-info").css("font-size", "1rem");
    $("#userEmail").css("border", "#e66262 1px solid");
    $("#userEmail").css("border-radius", "0px");
    valid = false;
  }

  if (subject == "") {
    $("#subject-info").html("required *");
    $("#subject-info").css("color", "#ff0000");
    $("#subject-info").css("font-size", "1rem");
    $("#subject").css("border", "#e66262 1px solid");
    $("#subject").css("border-radius", "0px");
    valid = false;
  }
  if (content == "") {
    $("#userMessage-info").html("required *");
    $("#userMessage-info").css("color", "#ff0000");
    $("#userMessage-info").css("font-size", "1rem");
    $("#message").css("border", "#e66262 1px solid");
    $("#message").css("border-radius", "0px");
    valid = false;
  }
  return valid;
}
