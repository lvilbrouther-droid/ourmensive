// ================= RESET SAAT REFRESH =================
window.onload = function () {
  window.scrollTo(0, 0);

  // langsung tampil slide opening
  goToSlide(1);
};

// ================= NAVIGASI SLIDE =================
function goToSlide(n) {

  // semua slide disembunyikan dulu
  document.getElementById("slide1").style.display = "none";
  document.getElementById("slide2").style.display = "none";
  document.getElementById("slide3").style.display = "none";
  document.getElementById("slide4").style.display = "none";
  document.getElementById("slide5").style.display = "none";
  document.getElementById("slide6").style.display = "none";

  document.getElementById("scrollWrapper").style.display = "none";

  // ================= SLIDE 2 + 4 =================
  if (n === 2) {

    document.getElementById("scrollWrapper").style.display = "block";

    document.getElementById("slide2").style.display = "block";
    document.getElementById("slide4").style.display = "block";

    document.body.style.overflowY = "auto";
  }

  // ================= SLIDE 3 =================
  else if (n === 3) {

    document.getElementById("slide3").style.display = "block";

    document.body.style.overflow = "hidden";
  }

  // ================= SLIDE 5 =================
  else if (n === 5) {

    document.getElementById("slide5").style.display = "block";

    document.body.style.overflowY = "auto";

    renderLetters();
  }

  // ================= SLIDE 6 =================
  else if (n === 6) {

    document.getElementById("slide6").style.display = "block";

    document.body.style.overflowY = "auto";
  }

  // ================= SLIDE 1 =================
  else {

    document.getElementById("slide1").style.display = "block";

    document.body.style.overflow = "hidden";
  }

  window.scrollTo(0, 0);
}

// ================= BUTTON JAR =================
function klikJar() {
  goToSlide(3);
}

// ================= BUTTON MAILBOX =================
function openLetter() {
  goToSlide(5);
}

// ================= DATA LETTER =================
let letters = JSON.parse(localStorage.getItem("letters")) || [];

// ================= SIMPAN LETTER =================
function saveLetter() {

  const message = document.getElementById("letterMessage").value;
  const name = document.getElementById("letterName").value;

  if (!message || !name) {
    alert("Isi surat dan nama dulu ya 💖");
    return;
  }

  letters.push({
    name,
    message
  });

  localStorage.setItem("letters", JSON.stringify(letters));

  document.getElementById("letterMessage").value = "";
  document.getElementById("letterName").value = "";

  goToSlide(5);
}

// ================= RENDER LETTER =================
function renderLetters() {

  const list = document.getElementById("lettersList");

  list.innerHTML = "";

  letters.forEach((letter, index) => {

    list.innerHTML += `
  <div class="letter-item" onclick="openPopup(${index})">

    <div class="letter-name">
      ${letter.name}
    </div>

    <img
      class="letter-envelope"
      src="assets/envelope.jpg"
    >

  </div>
`;
  });
}

// ================= OPEN POPUP =================
function openPopup(index) {

  document.getElementById("popupLetter").style.display = "flex";

  document.getElementById("popupName").innerText = letters[index].name;

  document.getElementById("popupMessage").innerText = letters[index].message;
}

// ================= CLOSE POPUP =================
function closePopup() {
  document.getElementById("popupLetter").style.display = "none";
}

