// Ecwid scroll fix & basic debug for variation/gallery handling
document.addEventListener("DOMContentLoaded", function () {
  console.log("Custom JS loaded ✅");

  // Disable Ecwid's automatic scroll
  if (typeof Ecwid !== "undefined") {
    Ecwid.OnPageLoaded.add(function (page) {
      Ecwid.ScrollToTop = function () {
        console.log("ScrollToTop prevented 🚫");
      };

      // Optional: Scroll to top smoothly when opening a product
      if (page.type === "PRODUCT") {
        window.scrollTo({
          top: 200, // adjust if needed
          behavior: "smooth"
        });
      }
    });
  }

  // Optional: Check if variation images are changing (debug only)
  const observer = new MutationObserver(() => {
    const activeImage = document.querySelector(".ecwid-productGallery__image");
    if (activeImage) {
      console.log("Active product image changed 🎯", activeImage.src);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
