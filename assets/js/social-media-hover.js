document.addEventListener("DOMContentLoaded", function () {
  const socialLinks = document.querySelectorAll(".sm-links a img");

  socialLinks.forEach((img, index) => {
    const originalSrc = img.src;
    const hoverSrc = originalSrc.replace(".png", "-hover.png");

    img.addEventListener("mouseover", function () {
      img.src = hoverSrc;
    });

    img.addEventListener("mouseout", function () {
      img.src = originalSrc;
    });
  });
});
