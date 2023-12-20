const todoModule = (() => {
    // Create a todo storage object
    let todoStorage = {};

    // Return Object todo
    function todoProperties(title, startTime, endTime){
        return {
            title,
            startTime,
            endTime,
        }
    }

    function addTodo(date, todo){
        if (!todoStorage[date]) {
            todoStorage[date] = [];
        }
        todoStorage[date].push(todo);
    }

    return {
        addTodo,
        todoProperties,
        todoStorage,
    }
})();

export default todoModule;

