const events = {
    '2025-06-16': { title: 'Treinamento de Segurança', color: 'event-red', start: '09:00', end: '12:00', description: 'Treinamento obrigatório para segurança no trabalho.', location: 'Auditório SEST SENAT' },
    '2025-01-10': { title: 'Treinamento de Segurança', color: 'event-red', start: '09:00', end: '12:00', description: 'Treinamento obrigatório para segurança no trabalho.', location: 'Auditório SEST SENAT' },
    '2025-02-10': { title: 'Treinamento de Segurança', color: 'event-red', start: '09:00', end: '12:00', description: 'Treinamento obrigatório para segurança no trabalho.', location: 'Auditório SEST SENAT' },
    '2025-02-15': { title: 'Workshop de Saúde', color: 'event-green', start: '14:00', end: '17:00', description: 'Dicas e práticas para uma vida mais saudável.', location: 'Sala 02 SEST SENAT' },
    '2025-02-20': { title: 'Palestra Motivacional', color: 'event-blue', start: '10:00', end: '11:30', description: 'Palestra inspiradora com especialistas.', location: 'Salão Principal' }
};

let currentMonth = new Date().getMonth();
let currentYear = 2025;

function prevMonth() {
    if (currentMonth > 0) {
        currentMonth--;
    } else if (currentYear > 2025) {
        currentYear--;
        currentMonth = 11;
    }
    renderCalendar();
}

function nextMonth() {
    if (currentMonth < 11) {
        currentMonth++;
    } else if (currentYear < 2025) {
        currentYear++;
        currentMonth = 0;
    }
    renderCalendar();
}

function renderCalendar() {
    const monthYear = document.getElementById("month-year");
    const calendarDays = document.getElementById("calendar-days");
    const legend = document.getElementById("legend");
    calendarDays.innerHTML = "";
    legend.innerHTML = "";

    let firstDay = new Date(currentYear, currentMonth, 1).getDay();
    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let monthName = new Date(currentYear, currentMonth).toLocaleString('pt-BR', { month: 'long' });
    monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);
    monthYear.textContent = `${monthName} ${currentYear}`;

    for (let i = 0; i < firstDay; i++) {
        let emptyDiv = document.createElement("div");
        calendarDays.appendChild(emptyDiv);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        let dateStr = `2025-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        let formattedDate = `${String(day).padStart(2, '0')}/${String(currentMonth + 1).padStart(2, '0')}/2025`;
        let dayDiv = document.createElement("div");
        dayDiv.textContent = day;
        dayDiv.classList.add("day");
        dayDiv.onclick = () => showEvent(dateStr, dayDiv, formattedDate);
        
        if (events[dateStr]) {
            dayDiv.classList.add(events[dateStr].color);
            let legendDate = `${String(day).padStart(2, '0')}/${String(currentMonth + 1).padStart(2, '0')}`;
            legend.innerHTML += `<div class="legend-item"><div class="legend-color ${events[dateStr].color}"></div> ${legendDate} - ${events[dateStr].title}</div>`;
        }
        calendarDays.appendChild(dayDiv);
    }
}

function showEvent(date, element, formattedDate) {
    document.querySelectorAll('.day').forEach(day => day.classList.remove('selected'));
    element.classList.add('selected');
    const eventDetails = document.getElementById("event-details");

    if (events[date]) {
        const event = events[date];
        eventDetails.innerHTML = `${formattedDate} - <strong>${event.title}</strong><br>
            <strong>Horário:</strong> ${event.start} - ${event.end}<br>
            <strong>Descrição:</strong> ${event.description}<br>
            <strong>Local:</strong> ${event.location}`;
        eventDetails.style.display = "block";
    } else {
        eventDetails.textContent = `Nenhum evento marcado para o dia ${formattedDate}.`;
        eventDetails.style.display = "block";
    }
}

renderCalendar();
