document.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.getElementById("bg-music");
    if (bgMusic) {
      bgMusic.volume = 0.3;
      bgMusic.play().catch(() => {
        console.warn("Autoplay blocked until interaction.");
      });
    }
  
    // 🎁 Gift Reveal Function
    window.revealGift = function (giftName) {
      const giftDivs = document.querySelectorAll(".gift");
  
      giftDivs.forEach((gift) => {
        const imgAlt = gift.querySelector(".wrapped").alt;
        if (imgAlt.includes(giftName)) {
          gift.querySelector(".wrapped").style.display = "none";
          const content = gift.querySelector(".gift-content");
          content.style.display = "block";
          content.style.animation = "fadeInGift 1s ease forwards";
        }
      });
    };
  
    // 💡 LED String + Bulbs
    const ledContainer = document.querySelector(".led-string");
    if (ledContainer) {
      const wire = document.createElement("div");
      wire.classList.add("led-wire");
      ledContainer.appendChild(wire);
  
      const bulbCount = 10;
      for (let i = 0; i < bulbCount; i++) {
        const bulb = document.createElement("div");
        bulb.classList.add("bulb");
        bulb.style.left = `${(i / (bulbCount - 1)) * 100}%`;
        bulb.style.backgroundColor = i % 2 === 0 ? "#a170ff" : "#ff4fc8";
        bulb.style.boxShadow = `0 0 10px ${bulb.style.backgroundColor}`;
        ledContainer.appendChild(bulb);
      }
    }
  });