import { format, getDay, getMonth, getYear } from 'date-fns';
import calendar from './calendar';

// PageUI Module
const pageUI = (() => {
    // Get the current date
    const currentDate = new Date();
    // Initialize current month and year
    let currentMonth = currentDate.getMonth();
    let currentYear = getYear(currentDate);
    // Initialize variables
    let clickedDateInfo = null;
    // Get references to HTML elements
    const dateText = document.querySelector('.date');


    // Function to set default page values
    function updateCalendar() {
        updateDisplay();
        calendar.getCalendar(currentMonth, currentYear);
    }

    // Function to navigate to the next month
    function nextMonth() {
        // Automatically transition to the next year when going from December to January
        if (currentMonth === 11) {
            currentYear++;
            currentMonth = (currentMonth + 1) % 12;
            updateCalendar();
            clickCell();
        } else {
            currentMonth = (currentMonth + 1) % 12;
            updateCalendar();
            clickCell();
        }
    }

    // Function to navigate to the previous month
    function prevMonth() {
        if (currentMonth === 0) {
            currentYear--;
            currentMonth = (currentMonth + 12) % 12;
            updateCalendar();
            clickCell();
        }
        currentMonth = (currentMonth - 1 + 12) % 12;
        updateCalendar();
        clickCell();
    }

    // Function to update all displayed values
    function updateDisplay() {
        const displayDate = new Date(currentYear, currentMonth, 1);
        const formattedDate = format(displayDate, 'MMMM' + ' ' + 'yyyy');
        // Update month and year text content
        dateText.textContent = formattedDate;
    }

    function updateEventDay() {
        const eventDay = document.querySelector('.event-day');
        const eventDate = document.querySelector('.event-date');
        // Check if clickedDateInfo is set
        if (clickedDateInfo) {
            eventDay.textContent = format(clickedDateInfo, 'EEE');
            eventDate.textContent = format(clickedDateInfo, 'do' + ' ' + 'MMMM' + ' ' + 'yyyy');
        } else {
            // Use currentDate if clickedDateInfo is not set
            eventDay.textContent = format(currentDate, 'EEE');
            eventDate.textContent = format(currentDate, 'do' + ' ' + 'MMMM' + ' ' + 'yyyy');
        }
    }

    // Function to retrieve date information of current cell of calendar
    function clickCell() {
        const dayCells = document.querySelectorAll('.activeDays');
        
        dayCells.forEach(cell => {
            cell.addEventListener('click', () => {
                const clickedDate = new Date(currentYear, currentMonth, parseInt(cell.textContent));
                clickedDateInfo = clickedDate;
                updateEventDay();
                
                const isActive = cell.classList.contains('active');
                
                dayCells.forEach(otherCell => {
                    otherCell.classList.remove('active');
                });

                if (!isActive) {
                    cell.classList.add('active');
                }
            });
        });
    }

    // Expose functions globally for HTML buttons
    return {
        updateCalendar,
        nextMonth,
        prevMonth,
        clickCell,
        updateEventDay,
    };
})();

// Expose functions globally for HTML buttons
window.prevMonth = pageUI.prevMonth;
window.nextMonth = pageUI.nextMonth;
// Export the pageUI module
export default pageUI;
