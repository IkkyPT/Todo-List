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
    const monthText = document.getElementById('monthText');
    const yearText = document.getElementById('yearText');

    // Function to set default page values
    function defaultPage() {
        updateDisplay();
        calendar.getCalendar(currentMonth, currentYear);
    }

    // Function to navigate to the next month
    function nextMonth() {
        // Automatically transition to the next year when going from December to January
        if (currentMonth === 11) {
            currentMonth = (currentMonth + 1) % 12;
            nextYear();
        } else {
            currentMonth = (currentMonth + 1) % 12;
            updateDisplay();
            calendar.getCalendar(currentMonth, currentYear);
        }
    }

    // Function to navigate to the previous month
    function prevMonth() {
        currentMonth = (currentMonth - 1 + 12) % 12;
        updateDisplay();
        calendar.getCalendar(currentMonth, currentYear);
    }

    // Function to navigate to the next year
    function nextYear() {
        currentYear = currentYear + 1;
        updateDisplay();
        calendar.getCalendar(currentMonth, currentYear);
    }

    // Function to navigate to the previous year
    function prevYear() {
        currentYear = currentYear - 1;
        updateDisplay();
        calendar.getCalendar(currentMonth, currentYear);
    }

    // Function to update all displayed values
    function updateDisplay() {
        const displayDate = new Date(currentYear, currentMonth, 1);
        const formattedMonth = format(displayDate, 'MMMM');
        // Update month and year text content
        monthText.textContent = formattedMonth;
        yearText.textContent = currentYear;
    }

    // Expose functions globally for HTML buttons
    return {
        defaultPage,
        nextMonth,
        prevMonth,
        prevYear,
        nextYear,
    };
})();

// Expose functions globally for HTML buttons
window.prevMonth = pageUI.prevMonth;
window.nextMonth = pageUI.nextMonth;
window.prevYear = pageUI.prevYear;
window.nextYear = pageUI.nextYear;

// Export the pageUI module
export default pageUI;
