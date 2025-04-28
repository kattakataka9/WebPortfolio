document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector("header");

    // Remove 'sticky' if at the top when the page loads
    if (window.scrollY === 0) {
        header.classList.remove('sticky');
    }

    // Listen for scrolling
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});

var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.fa-bars');
var closeBtn = document.querySelector('.fa-xmark');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});

let links = document.querySelectorAll('.menu .js');
links.forEach(target => {
    target.onclick = function(e) {
        e.preventDefault();
        let href = target.getAttribute('href');
        let offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top:offsetTop,
            behavior : "smooth"
        });
    };
});

// JS FOR FADED TRANSITION FOR EVERY CLASS
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal'); // Corrected class name

    for (var i = 0; i < reveals.length; i++) {
        
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 0;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// JS FOR FADED TRANSITION FOR EVERY CLASS
window.addEventListener('scroll', revealImages);

function revealImages() {
    revealElements('.reveal__img-l');
    revealElements('.reveal__img-r');
}

function revealElements(selector) {
    var elements = document.querySelectorAll(selector);

    for (var i = 0; i < elements.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = elements[i].getBoundingClientRect().top;
        var revealPoint = 0;

        if (revealTop < windowHeight - revealPoint) {
            elements[i].classList.add('active');
        } else {
            elements[i].classList.remove('active');
        }
    }
}

// SENDING EMAIL
function sendEmail() {
    // Get input values
    const nameField = document.querySelector("#name");
    const emailField = document.querySelector("#email");
    const subjectField = document.querySelector("#subject");
    const messageField = document.querySelector("#message");

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const subject = subjectField.value.trim();
    const message = messageField.value.trim();

    // Validate required fields
    if (!email || !message) {
        alert("Please fill in all required fields before sending.");
        return;
    }

    const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    emailjs
        .send("service_55g89i3", "template_xnzr81p", templateParams)
        .then(() => {
            alert("Email sent!"); // Show alert
            
            // Clear form fields after clicking "OK"
            nameField.value = "";
            emailField.value = "";
            subjectField.value = "";
            messageField.value = "";
        })
        .catch(() => alert("Email not sent!"));
}

