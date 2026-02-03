const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

let yesScale = 1;

function moveNoButton() {
  const container = document.querySelector(".container");
  const rect = container.getBoundingClientRect();

  const padding = 20;
  const maxX = rect.width - noBtn.offsetWidth - padding;
  const maxY = 220;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  yesScale += 0.12;
  yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background:linear-gradient(135deg,#ff9a9e,#fad0c4);
      font-family:Arial,sans-serif;
      text-align:center;
      padding:20px;
    ">
      <div style="
        background:white;
        padding:30px 24px;
        border-radius:18px;
        box-shadow:0 10px 30px rgba(0,0,0,0.18);
        max-width:520px;
        width:92vw;
      ">
        <h1 style="margin:0;color:#ff4d6d;">🥰 I knew it! Happy Valentine’s Day 💕</h1>
        <p style="margin:12px 0 0;font-size:18px;color:#444;">
          Adore you my little babyyyyyy ❤️❤️
        </p>
      </div>
    </div>
  `;
});
