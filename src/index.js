import {getDay, getYear, getMonth, startOfMonth, endOfMonth, getDaysInMonth, getWeeksInMonth, lastDayOfMonth} from 'date-fns'
import { da, el } from 'date-fns/locale';

const calendar = (() => {
    function getCalendar(month, year) {
        const tableBody = document.querySelector('.calendarBody');
        tableBody.innerHTML = "";

        const firstDay = startOfMonth(new Date(year, month - 1, 1));
        const startingDayOfWeek = firstDay.getDay();
        const totalDays = getDaysInMonth(new Date(year, month - 1));
        const totalWeeks = getWeeksInMonth(new Date(year, month - 1));
        const lastMonthDay = (endOfMonth(new Date(year, month - 2, 1))).getDate();
        const nextMonthDay = (startOfMonth(new Date(year, month + 2, 1))).getDate();

        console.log(lastMonthDay)

        // Loop through weeks
        for (let i = 0; i < totalWeeks; i++) {
            const row = document.createElement('tr');
            row.classList.add('rowWeek');
        
            for (let day = 1; day <= 7; day++) {
                const indexDay = i * 7 + day - startingDayOfWeek ;
        
                if (indexDay > 0 && indexDay <= totalDays) {
                    const dayCell = document.createElement('td');
                    dayCell.textContent = indexDay;
                    row.appendChild(dayCell);
                } else if (indexDay <= 0 && i === 0) {
                    const emptyCell = document.createElement('td');
                    const adjustedPrevDay = indexDay + lastMonthDay;
                    emptyCell.textContent = adjustedPrevDay;
                    row.appendChild(emptyCell);
                }
                else {
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

calendar.getCalendar(12,2033)