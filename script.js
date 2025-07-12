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
      card.onclick = () => mostrarModal(ramo.nombre, ramo.descripcion || "Pronto se agregará la descripción.");
      grid.appendChild(card);
    });

    bloque.appendChild(grid);
    container.appendChild(bloque);
  });
}

function mostrarModal(titulo, descripcion) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal-titulo").textContent = titulo;
  document.getElementById("modal-descripcion").textContent = descripcion;
}

function cerrarModal() {
  document.getElementById("modal").classList.add("hidden");
}

crearMalla();
function cerrarModal() {
  document.getElementById('modal').classList.add('hidden');
}
