document.addEventListener("DOMContentLoaded", () => {
  // Initialize marquee (only once)
  const track = document.getElementById("marquee");
  if (track && track.dataset.marqueeInitialized !== "true") {
    // Duplicate children once to enable seamless scroll
    const children = Array.from(track.children);
    const frag = document.createDocumentFragment();
    children.forEach((child) => frag.appendChild(child.cloneNode(true)));
    track.appendChild(frag);

    // Mark as initialized to avoid double-duplication
    track.dataset.marqueeInitialized = "true";

    // Set duration based on content width for consistent speed
    // Adjust speed (px/sec) to taste
    const pxPerSec = 120;

    // Compute after layout
    requestAnimationFrame(() => {
      // scrollWidth now contains both copies; half is original content width
      const halfWidth = track.scrollWidth / 2;
      const duration = halfWidth / pxPerSec;
      track.style.setProperty("--marquee-duration", `${duration}s`);
    });
  }

  // Mobile menu toggle
  const menuBtn = document.getElementById("menu-toggle");
  const nav = document.querySelector("header nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
});
