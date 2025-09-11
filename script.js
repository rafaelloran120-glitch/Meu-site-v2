//esse vai ser pra rolar suave pae
const links = document.querySelectorAll("nav a"); // corrigido: querySelectorAll
const nav = document.querySelector("nav");        // corrigido: pegando o nav inteiro
const navHeight = nav.offsetHeight;

links.forEach(link => {                           // corrigido: forEach minúsculo
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    const targetPosition = targetSection.offsetTop - navHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});
