document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("in");
  });
}, {threshold: .08});

document.querySelectorAll(".case-study,.screen-card,.role,.skill-grid>div,.principle-grid>div").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

const style = document.createElement("style");
style.textContent = ".reveal{opacity:0;transform:translateY(18px);transition:opacity .65s ease,transform .65s ease}.reveal.in{opacity:1;transform:none}";
document.head.appendChild(style);
