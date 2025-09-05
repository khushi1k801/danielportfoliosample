
    const slides = document.querySelector(".slides");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const totalSlides = document.querySelectorAll("figure").length;
    let index = 0;

    function showSlide(i) {
      if (i < 0) index = totalSlides - 1;
      else if (i >= totalSlides) index = 0;
      else index = i;
      slides.style.transform = `translateX(${-index * 100}%)`;
    }

    prev.addEventListener("click", () => showSlide(index - 1));
    next.addEventListener("click", () => showSlide(index + 1));
