window.addEventListener("load", () => {
  let ocultar = document.getElementById("ocultar");
  let mostrar = document.getElementById("mostrar");
  let datos = document.getElementById("imagenes");

  mostrar.addEventListener("click", () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=20")
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        datos.innerHTML = "";

        for (rows of data) {
          datos.innerHTML += `
          <div class="col">
          <div class="card">
            <img src="${rows.url}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${rows.id}</h5>
            </div>
          </div>
        </div>
        `;
        }
      });
  });

  ocultar.addEventListener("click", () => {
    datos.innerHTML = "";
  });
});
