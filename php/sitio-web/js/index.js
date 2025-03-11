window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const scrolled = window.scrollY > 70;
  
    navbar.classList.toggle("scrolled", scrolled);
    document.querySelectorAll(".nav-link").forEach(item =>
      item.classList.toggle("text-scrolled", scrolled)
    );
  });
  