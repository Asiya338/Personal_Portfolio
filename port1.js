var tablinks = document.getElementsByClassName("tablinks");

var tabcontents = document.getElementsByClassName("tabcontents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("activelink");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("activetab");
  }
  event.currentTarget.classList.add("activelink");
  document.getElementById(tabname).classList.add("activetab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-150px";
}

// JavaScript for activating animations when scrolling
window.addEventListener("scroll", function () {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const triggerBottom = (window.innerHeight / 5) * 4;

  timelineItems.forEach((item) => {
    const boxTop = item.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      item.classList.add("active");
    }
  });
});

// JavaScript to animate the skill bars on page load
// JavaScript to animate the skill bars on page load
window.addEventListener("load", function () {
  const bars = document.querySelectorAll(".bar-fill");

  bars.forEach((bar) => {
    const skillLevel = bar.getAttribute("data-skill-level");
    bar.style.width = skillLevel;
  });
});

// Function to open the modal
function openModal(img) {
  let modal = document.getElementById("certificateModal");

  // If modal does not exist, create it once
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "certificateModal";
    modal.className = "modal";
    modal.innerHTML = `
          <span class="close" onclick="closeModal()">&times;</span>
          <img class="modal-content" id="modalImg">
          <div id="caption"></div>
      `;
    document.body.appendChild(modal);
  }

  // Set modal image and caption
  const modalImg = document.getElementById("modalImg");
  const caption = document.getElementById("caption");

  modal.style.display = "flex";
  modalImg.src = img.src;
  caption.innerHTML = img.alt;
}

// Function to close the modal
function closeModal() {
  document.getElementById("certificateModal").style.display = "none";
}
