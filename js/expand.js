document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll(".category-btn");
    const contentSections = document.querySelectorAll(".category-content");
  
    categoryButtons.forEach(button => {
      button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-bs-target");
        const targetSection = document.querySelector(targetId);
        const currentlyOpen = document.querySelector(".category-content.show");
  
        // If clicking the same open section, toggle it closed
        if (currentlyOpen === targetSection) {
          targetSection.classList.remove("show");
          setTimeout(() => targetSection.style.maxHeight = "0px", 500);
          return; // Stop execution to prevent opening again
        }
  
        // Close any currently open section before opening a new one
        if (currentlyOpen) {
          currentlyOpen.classList.remove("show");
          setTimeout(() => currentlyOpen.style.maxHeight = "0px", 500);
        }
  
        // Open the selected section
        targetSection.style.maxHeight = targetSection.scrollHeight + "px";
        targetSection.classList.add("show");
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".copyright").innerHTML =
      "&copy; " + new Date().getFullYear() + " Brett Huffman. All rights reserved.";
  });