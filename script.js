

const text =
  "I AM GREATFUL TO HAVE YOU IN MY LIFE AND THANKYOU FOR EVERYTHING ❤️. WILL YOU BE MY VALENTINE ??  ✨";

let i = 0;

function openEnvelope() {

  // Envelope animation
  document.querySelector(".envelope").classList.add("open");

  setTimeout(() => {
    document.querySelector(".envelope-container").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    document.getElementById("music").play();

    typeWriter();
    launchConfetti();

  }, 800);
}

/* Typewriter */
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 45);
  }
}

/* Confetti */
function launchConfetti() {
  for (let j = 0; j < 120; j++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * window.innerWidth + "px";
    c.style.background =
      `hsl(${Math.random()*360}, 100%, 60%)`;
    c.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.body.appendChild(c);

    setTimeout(() => c.remove(), 5000);
  }
}

