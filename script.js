function crearMalla() {
  const container = document.getElementById("malla-container");

  malla.forEach((sem) => {
    const bloque = document.createElement("div");
    bloque.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = sem.semestre;
    bloque.appendChild(titulo);

    const grid = document.createElement("div");
    grid.className = "ramos-grid";

    sem.ramos.forEach((ramo) => {
      const card = document.createElement("div");
      card.className = "ramo";

      // Colores por tipo
      if (ramo.tipo === "ingles") {
        card.style.backgroundColor = "#E2CBD3";
      } else if (ramo.tipo === "minor") {
        card.style.backgroundColor = "#F5BDDE";
      } else {
        card.style.backgroundColor = sem.color;
      }

      card.textContent = ramo.nombre;

      card.onclick = () => {
        // Alternar tachado
        card.classList.toggle("tachado");
        // Mostrar modal
        mostrarModal(ramo.nombre, ramo.descripcion || "Pronto se agregará la descripción.");
        // Aquí podrías agregar lógica para mostrar otros ramos si quieres
      };

      grid.appendChild(card);
    });

    bloque.appendChild(grid);
    container.appendChild(bloque);
  });
}
