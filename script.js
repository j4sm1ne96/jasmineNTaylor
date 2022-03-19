//About Me

var typed = new Typed('#typed',{
    strings:["Creative.", "Developer.", "Programmer.", "Great Team Member!", "Collaborator.", "Coder."],
    backSpeed: 40,
    typeSpeed: 40,
    loop: true
  });

//Coding Fact

const timeContainer = document.getElementById("time-container");
const BIRTH_DAY = "04-05-1996";
const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
    const now = new Date();
    const difference = Math.floor(
        (now.getTime() - BIRTH_DAY_DATE.getTime())/1000
    );
    timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);
