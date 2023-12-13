import { format, getMonth, getYear } from 'date-fns';
import calendar from './calendar';

// PageUI Module
const pageUI = (() => {
    // Get the current date
    const currentDate = new Date();
    // Initialize current month and year
    let currentMonth = currentDate.getMonth();
    let currentYear = getYear(currentDate);
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
        } else {
            currentMonth = (currentMonth + 1) % 12;
            updateCalendar();
        }
    }

    // Function to navigate to the previous month
    function prevMonth() {
        if (currentMonth === 0) {
            currentYear--;
            currentMonth = (currentMonth + 12) % 12;
            updateCalendar();
        }
        currentMonth = (currentMonth - 1 + 12) % 12;
        updateCalendar();
    }

    // Function to update all displayed values
    function updateDisplay() {
        const displayDate = new Date(currentYear, currentMonth, 1);
        const formattedDate = format(displayDate, 'MMMM' + ' ' + 'yyyy');
        // Update month and year text content
        dateText.textContent = formattedDate;
    }

    // Expose functions globally for HTML buttons
    return {
        updateCalendar,
        nextMonth,
        prevMonth,
    };
})();

// Expose functions globally for HTML buttons
window.prevMonth = pageUI.prevMonth;
window.nextMonth = pageUI.nextMonth;
// Export the pageUI module
export default pageUI;
