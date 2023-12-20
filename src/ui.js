// Import necessary functions and modules
import { add, format, getDay, getMonth, getYear } from 'date-fns';
import calendar from './calendar';
import todoModule from './todo';

// PageUI Module
const pageUI = (() => {
    // Get the current date
    const currentDate = new Date();
    let onClick = false;
    // Initialize current month and year
    let currentMonth = currentDate.getMonth();
    let currentYear = getYear(currentDate);
    // Initialize variables
    let clickedDateInfo = null;
    // Get references to HTML elements
    const dateText = document.querySelector('.date');

    // Function to set default page values
    function updateCalendar() {
        // Update the displayed month and year on the calendar
        updateDisplay();
        // Retrieve and display the calendar for the current month and year
        calendar.getCalendar(currentMonth, currentYear);
    }

    // Function to navigate to the next month
    function nextMonth() {
        // Automatically transition to the next year when going from December to January
        if (currentMonth === 11) {
            currentYear++;
            currentMonth = (currentMonth + 1) % 12;
            // Update the calendar and clicked cell information
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
        // Automatically transition to the previous year when going from January to December
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

    // Function to update all displayed values on the page
    function updateDisplay() {
        // Calculate the display date and format it
        const displayDate = new Date(currentYear, currentMonth, 1);
        const formattedDate = format(displayDate, 'MMMM' + ' ' + 'yyyy');
        // Update the month and year text content on the page
        dateText.textContent = formattedDate;
    }

    // Function to update the displayed event day information
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

    // Function to handle click events on calendar cells
    function clickCell() {
        const dayCells = document.querySelectorAll('.activeDays');

        dayCells.forEach((cell) => {
            cell.addEventListener('click', () => {
                // Retrieve date information of the clicked cell
                let clickedDate = new Date(currentYear, currentMonth, parseInt(cell.textContent));
                clickedDateInfo = clickedDate;
                // Update displayed event day information and events
                updateEventDay();
                displayEvent(format(clickedDateInfo, 'dd/MM/yyyy'), todoModule.todoStorage[format(clickedDateInfo, 'dd/MM/yyyy')]);

                const isActive = cell.classList.contains('active');

                // Toggle the 'active' class on the clicked cell
                dayCells.forEach((otherCell) => {
                    otherCell.classList.remove('active');
                });

                if (!isActive) {
                    cell.classList.add('active');
                }

                // Add or remove the 'hasEvent' class based on the presence of events
                const dateKey = format(clickedDateInfo, 'dd/MM/yyyy');
                const hasEvents = todoModule.todoStorage[dateKey] && todoModule.todoStorage[dateKey].length > 0;
                if (hasEvents) {
                    cell.classList.add('hasEvent');
                } else {
                    cell.classList.remove('hasEvent');
                }
            });
        });
    }

    // Function to show or hide the event tab
    function showEventTab() {
        const eventTab = document.querySelector('.add-event-wrapper');
        onClick = !onClick;
        if (onClick == true) {
            eventTab.classList.add('active');
        } else {
            eventTab.classList.remove('active');
        }
    }

    // Function to display events for a given date
    function displayEvent(date, todos) {
        const eventContainer = document.querySelector('.events');
        let events = '';

        // Check if there are todos for the given date
        if (todoModule.todoStorage[date] && todoModule.todoStorage[date].length > 0) {
            todoModule.todoStorage[date].forEach((todo, index) => {
                // Generate HTML for each todo
                events += `<div class="event" data-index="${index}">
                    <div class="title">
                        <i class="fa-solid fa-circle fa-xs"></i>
                        <h3 class="event-title">${todo.title}</h3>
                    </div>
                    <div class="event-time">
                        <span>${todo.startTime} - ${todo.endTime}</span>
                    </div>
                </div>`;
            });
        } else {
            events = `<div class="no-event">
                        <h3>No Events</h3>
                    </div>`;
        }

        // Update the HTML content of the events container
        eventContainer.innerHTML = events;

        // Add click event listener to each todo in the .events container
        const todoElements = eventContainer.querySelectorAll('.event');

        todoElements.forEach((todoElement, index) => {
            todoElement.addEventListener('click', () => {
                // Get the index of the clicked todo
                const index = todoElement.getAttribute('data-index');

                // Call the deleteEvent function with the index of the clicked todo
                deleteEvent(index);
            });
        });
    }

    // Function to handle the creation of a new event
    function createBtn() {
        const addButton = document.querySelector('.add-event-btn');
        const eventNameInput = document.querySelector('.event-name');
        const startTimeInput = document.querySelector('.event-start');
        const endTimeInput = document.querySelector('.event-end');
        const dayCell = document.querySelector('.activeDays.active');

        const eventName = eventNameInput.value.trim();
        const startTime = startTimeInput.value.trim();
        const endTime = endTimeInput.value.trim();

        // Check if the event name is not empty and a date is selected
        if (eventName != '' && clickedDateInfo) {
            // Format the clicked date as a key
            let keyDate = format(clickedDateInfo, 'dd/MM/yyyy');
            // Create a new todo object
            let newTodo = todoModule.todoProperties(eventName, startTime, endTime);
            // Add the new todo to the storage
            todoModule.addTodo(keyDate, newTodo);
            // Display the events for the selected date
            displayEvent(format(clickedDateInfo, 'dd/MM/yyyy'), todoModule.todoStorage[format(clickedDateInfo, 'dd/MM/yyyy')]);

            // Clear input fields
            eventNameInput.value = '';
            startTimeInput.value = '';
            endTimeInput.value = '';
        }

        // Show or hide the event tab
        showEventTab();
        // Add 'hasEvent' class to the selected day cell
        dayCell.classList.add('hasEvent');
    }

    // Function to handle the deletion of an event
    function deleteEvent(index) {
        const clickedDateKey = format(clickedDateInfo, 'dd/MM/yyyy');

        // Check if there are events for the clicked date
        if (todoModule.todoStorage[clickedDateKey] && todoModule.todoStorage[clickedDateKey].length > 0) {
            // Ask for confirmation before deleting an event
            if (confirm("Are you sure you want to delete this event?")) {
                // Remove the clicked event from the array
                todoModule.todoStorage[clickedDateKey].splice(index, 1);

                // Update the display to reflect the changes
                displayEvent(clickedDateKey, todoModule.todoStorage[clickedDateKey]);

                // Update the 'hasEvent' class based on whether there are remaining events
                const hasRemainingEvents = todoModule.todoStorage[clickedDateKey].length > 0;
                const activeDayCell = document.querySelector('.activeDays.active.hasEvent');

                if (activeDayCell) {
                    if (hasRemainingEvents) {
                        activeDayCell.classList.add('hasEvent');
                    } else {
                        activeDayCell.classList.remove('hasEvent');
                    }
                }
            }
        }
    }

    // Expose functions globally for HTML buttons
    return {
        updateCalendar,
        nextMonth,
        prevMonth,
        clickCell,
        updateEventDay,
        showEventTab,
        createBtn,
    };
})();

// Expose functions globally for HTML buttons
window.prevMonth = pageUI.prevMonth;
window.nextMonth = pageUI.nextMonth;
window.showEventTab = pageUI.showEventTab;
window.createBtn = pageUI.createBtn;
window.deleteEvent = pageUI.deleteEvent;

// Export the pageUI module
export default pageUI;
