import {getDay, getYear, getMonth, startOfMonth, endOfMonth, getDaysInMonth, getWeeksInMonth, lastDayOfMonth} from 'date-fns'


const calendar = (() => {

    // Function to get a calendar for a specific month and year
    function getCalendar(month = getMonth(new Date()), year = getYear(new Date())) {
        const tableBody = document.querySelector('.calendarBody');
        tableBody.innerHTML = "";

        // Calculate various date-related values
        const firstDay = startOfMonth(new Date(year, month, 1));
        const startingDayOfWeek = firstDay.getDay();
        const totalDays = getDaysInMonth(new Date(year, month));
        const totalWeeks = getWeeksInMonth(new Date(year, month));
        const lastMonthDay = (endOfMonth(new Date(year, month - 2, 1))).getDate();
        const nextMonthDay = (startOfMonth(new Date(year, month + 2, 1))).getDate();

        // Loop through weeks to populate the calendar
        for (let i = 0; i < totalWeeks; i++) {
            const row = document.createElement('tr');
            row.classList.add('rowWeek');
        
            // Loop through days in the week
            for (let day = 1; day <= 7; day++) {
                const indexDay = i * 7 + day - startingDayOfWeek ; // Calculate the index of the day in the overall calendar grid
                if (indexDay > 0 && indexDay <= totalDays) {
                    // Display days of the current month
                    const dayCell = document.createElement('td');
                    dayCell.textContent = indexDay;
                    row.appendChild(dayCell);
                } else if (indexDay <= 0 && i === 0) {
                    // Display adjusted days from the previous month
                    const emptyCell = document.createElement('td');
                    const adjustedPrevDay = indexDay + lastMonthDay;
                    emptyCell.textContent = adjustedPrevDay;
                    row.appendChild(emptyCell);
                }
                else {
                    // Display adjusted days from the next month
                    const emptyCell = document.createElement('td');
                    const adjustedNextDay = indexDay - totalDays + nextMonthDay - 1;
                    emptyCell.textContent = adjustedNextDay;
                    row.appendChild(emptyCell);
                }
            }
            tableBody.appendChild(row);
        }
    }

    

    return {
        getCalendar,
    }
})();

export default calendar;