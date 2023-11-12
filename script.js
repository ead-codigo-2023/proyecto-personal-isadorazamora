function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });


function nextSlide() {
    currentSlide = (currentSlide) 
    currentSlide = (currentSlide)

  currentSlide = (
1) % slides.length;
    showSlide(currentSlide);
}

// Muestra la primera diapositiva al cargar la página
showSlide(currentSlide);

// Configura el intervalo para cambiar las diapositivas automáticamente
setInterval(nextSlide, 2000); // Cambia cada 2 segundos (ajusta según sea necesario)
}();