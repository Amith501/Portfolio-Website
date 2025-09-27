function scrollToOptions(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.querySelector(".contact-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contactSection.classList.add("show");
        }
      });
    },
    { threshold: 0.2 } // triggers when 20% of section is visible
  );

  if (contactSection) {
    observer.observe(contactSection);
  }
});
