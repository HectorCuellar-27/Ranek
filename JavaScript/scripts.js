document.addEventListener("DOMContentLoaded", function () {
  const contenedores = document.querySelectorAll(".carrusel-contenedor");

  contenedores.forEach((contenedor) => {
    const carril = document.createElement("div");
    carril.classList.add("carrusel-carril");

    const tarjetas = contenedor.querySelectorAll(".tarjeta");
    tarjetas.forEach((tarjeta) => {
      carril.appendChild(tarjeta);
    });

    // Botones
    const btnIzq = document.createElement("button");
    btnIzq.className = "boton-carrusel boton-izquierda";
    btnIzq.innerHTML = "&#10094;"; // ←

    const btnDer = document.createElement("button");
    btnDer.className = "boton-carrusel boton-derecha";
    btnDer.innerHTML = "&#10095;"; // →

    btnIzq.addEventListener("click", () => {
      carril.scrollBy({ left: -300, behavior: "smooth" });
    });

    btnDer.addEventListener("click", () => {
      carril.scrollBy({ left: 300, behavior: "smooth" });
    });

    contenedor.appendChild(btnIzq);
    contenedor.appendChild(btnDer);
    contenedor.appendChild(carril);
  });
});

//Menu hamburgesa
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const navList = document.getElementById("nav-list");

  toggleBtn.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
});
