
document.addEventListener('DOMContentLoaded', function () {
    const daysContainer = document.getElementById('days');
    const monthYearDisplay = document.getElementById('month-year');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const holidays = {
        "1-1": "New Year's Day",
        "14-1": "Makar Sankranti/Pongal",
        "26-1": "Republic Day",
        "13-2": "Maha Shivaratri",
        "2-3": "Holi",
        "25-3": "Good Friday",
        "1-5": "Labour Day",
        "15-8": "Independence Day",
        "22-8": "Raksha Bandhan",
        "29-8": "Janmashtami",
        "2-10": "Gandhi Jayanti",
        "19-10": "Dussehra",
        "4-11": "Diwali",
        "25-12": "Christmas Day",
        "14-11": "Children's Day",
        // Regional Holidays
        "14-4": "Ambedkar Jayanti",
        "1-4": "Bank Holiday",
        "7-4": "Ugadi",
        "13-4": "Baisakhi",
        "21-4": "Ram Navami",
        "29-4": "Mahavir Jayanti",
        "10-5": "Buddha Purnima",
        "21-7": "Bakrid/Eid ul-Adha",
        "15-8": "Pateti",
        "22-8": "Onam",
        "17-9": "Ganesh Chaturthi",
        "2-11": "Karva Chauth",
        "6-11": "Bhai Dooj",
        "9-11": "Chhath Puja",
        "20-11": "Eid-e-Milad",
        "25-12": "Christmas",
        "31-12": "New Year's Eve"};

    let currentDate = new Date();

    function renderCalendar(date) {
        daysContainer.innerHTML = '';
        const month = date.getMonth();
        const year = date.getFullYear();
        const firstDayIndex = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();
        const prevLastDay = new Date(year, month, 0).getDate();

        monthYearDisplay.textContent = `${months[month]} ${year}`;

        for (let x = firstDayIndex; x > 0; x--) {
            daysContainer.innerHTML += `<div class="disabled">${prevLastDay - x + 1}</div>`;
        }

        for (let i = 1; i <= lastDay; i++) {
            const dayKey = `${i}-${month + 1}`;
            const isHoliday = holidays[dayKey] !== undefined;
            const dayClass = isHoliday ? 'holiday' : '';
            daysContainer.innerHTML += `<div class="${dayClass}" title="${holidays[dayKey] || ''}">${i}</div>`;
        }
    }

    prevButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});