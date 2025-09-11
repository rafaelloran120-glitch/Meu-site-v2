// Scroll suave quando clicar no menu
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 20, // margem do topo
      behavior: "smooth"
    });
  });
});
