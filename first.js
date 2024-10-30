const noButton = document.getElementById("NO");
// Array of romantic phrases for the button click
const romanticPhrases = [
  "No, darling!",
  "Not now, sweetheart!",
  "No, my love!",
  "Not today, beautiful!",
  "No way, cutie!",
  "Not a chance, love!",
  "Never with you, dear!",
  "Not this time, honey!",
  "Not without your smile!",
  "No, gorgeous!",
  "Only if you say so, my love!",
  "You're too charming to say no!",
  "You know I can’t resist you!",
  "I could never say no to you!",
  "You're too adorable to say no!",
  "You're too sweet to say no!",
  "You're too lovely to say no!",
  "You're too pretty to say no!",
  "You're too cute to say no!",
  "You're too beautiful to say no!",
  "You're too amazing to say no!",
  "You're too wonderful to say no!",
  "You're too fantastic to say no!",
  "You're too fabulous to say no!",
  "You're too incredible to say no!",
  "Please, don't make me say no!",
  "Sorry, I can't say no to you!",
];
let currentIndex = 0; // To track the current phrase index

noButton.addEventListener("click", function (e) {
  e.preventDefault();
  noButton.textContent = romanticPhrases[currentIndex];
  currentIndex++;
  if (currentIndex == romanticPhrases.length) {
    noButton.style.transition = "opacity 3s";
    noButton.style.opacity = "0"; // Fade out
    setTimeout(() => {
      noButton.style.display = "none"; // Hide the button
    }, 3000);
  }
});

// Set up the YES button functionality
document.getElementById("YES").addEventListener("click", function (e) {
  e.preventDefault();
  const targetDate = new Date("November 01, 2024 00:00:00").getTime();
  const now = new Date().getTime();

  if (now >= targetDate) {
    // Show firecracker animation before redirecting
    showFirecrackerAnimation(() => {
      window.location.href = "show.html";
    });
  } else {
    // Show countdown with a cute message
    const text = document.getElementById("info");
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const remainingTime = targetDate - currentTime;
      e.target.style.display = "none";
      noButton.style.display = "none";
      if (remainingTime <= 0) {
        clearInterval(interval);
        text.innerHTML = "It's time to see the surprise!";
        showFirecrackerAnimation(() => {
          window.location.href = "show.html";
        });
      } else {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        text.innerHTML = `Hold on! Just <br> ${days}d ${hours}h <br> ${minutes}m ${seconds}s left!`;
      }
    }, 1000);
  }
});

function showFirecrackerAnimation(callback) {
  const firecracker = document.querySelector(".firecracker");
  firecracker.style.display = "block";

  setTimeout(() => {
    firecracker.style.display = "none";
    callback();
  }, 2000); // Duration of firecracker animation
}
