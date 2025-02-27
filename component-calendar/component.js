const events = [
    { DATA: '2025-06-16', NOME: 'Treinamento de Segurança', COR: 'event-yellow', DETALHES: 'Treinamento obrigatório para segurança no trabalho.', DATA_FIM: '2025-06-16' },
    { DATA: '2025-06-16', NOME: 'Almoço de Integração', COR: 'event-orange', DETALHES: 'Integração com os novos colaboradores.' },
    { DATA: '2025-02-10', NOME: 'Treinamento de Segurança', COR: 'event-yellow', DETALHES: 'Treinamento obrigatório para segurança no trabalho.' },
    { DATA: '2025-02-15', NOME: 'Workshop de Saúde', COR: 'event-gray', DETALHES: 'Dicas e práticas para uma vida mais saudável.' },
    { DATA: '2025-02-20', NOME: 'Palestra Motivacional', COR: 'event-orange', DETALHES: 'Palestra inspiradora com especialistas.' },
];

let currentMonth = new Date().getMonth();
let currentYear = 2025;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("month-selector").value = currentMonth;
    renderCalendar();
});

function changeMonth() {
    currentMonth = parseInt(document.getElementById("month-selector").value);
    renderCalendar();
}

function formatDate(dateStr) {
    const parts = dateStr.split('-');
    return `${parts[2]}/${parts[1]}`;
}

function renderCalendar() {
    const calendarDays = document.getElementById("calendar-days");
    const dynamicLegend = document.getElementById("dynamic-legend");
    calendarDays.innerHTML = "";
    dynamicLegend.innerHTML = "";

    document.getElementById("year-display").textContent = currentYear;

    let firstDay = new Date(currentYear, currentMonth, 1).getDay();
    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        calendarDays.appendChild(document.createElement("div"));
    }

    for (let day = 1; day <= daysInMonth; day++) {
        let dayDiv = document.createElement("div");
        dayDiv.textContent = day;
        dayDiv.classList.add("day");

        events.forEach(event => {
            if (event.DATA === `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`) {
                dayDiv.classList.add(event.COR);
            }
        });

        calendarDays.appendChild(dayDiv);
    }
}
