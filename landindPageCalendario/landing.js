document.getElementById("open-calendar").addEventListener("click", function () {
    fetch("../calendario/calendario.html")
        .then(response => response.text())
        .then(data => {
            const container = document.getElementById("calendar-container");
            container.innerHTML = `<div class="calendar-content">${data}</div>
                                   <button class="close-calendar">Fechar</button>`;
            container.classList.add("show");

            document.querySelector(".close-calendar").addEventListener("click", function () {
                container.classList.remove("show");
                setTimeout(() => { container.innerHTML = ""; }, 300);
            });

            // Carrega o script do calendário
            let script = document.createElement("script");
            script.src = "../calendario/calendario.js";
            document.body.appendChild(script);
        });
});
