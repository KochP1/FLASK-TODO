console.log('Modo oscuro')

document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Check localStorage and apply dark mode if enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            enableDarkMode();
            localStorage.setItem('darkMode', 'enabled');
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        const nav = document.querySelectorAll(".todos-nav");
        nav.forEach(nav => nav.classList.add("dark-mode"));

        const todoContainer = document.querySelectorAll(".todo__container");
        todoContainer.forEach(todos => todos.classList.add("dark-mode"));

        const todos = document.querySelectorAll(".list-input");
        todos.forEach(todos => todos.classList.add("dark-mode"));

        const topic = document.querySelectorAll(".topic-input");
        topic.forEach(topic => topic.classList.add("dark-mode"));

        const del = document.querySelectorAll(".delete-btn");
        del.forEach(del => del.classList.add("dark-mode"));

        const newTodo = document.querySelectorAll(".newTodo-form");
        newTodo.forEach(todo => todo.classList.add("dark-mode"));

        const themeIcon = document.querySelectorAll(".theme-icon");
        themeIcon.forEach( themeIcon => themeIcon.classList.add("dark-mode"));

        const taskContainer = document.querySelectorAll(".task__container");
        taskContainer.forEach( task => task.classList.add("dark-mode"));

        const trash = document.querySelectorAll(".trash-btn");
        trash.forEach( trash => trash.classList.add("dark-mode"));

        const modal = document.querySelectorAll(".modal");
        modal.forEach( modal => modal.classList.add("dark-mode"));

        const close = document.querySelectorAll(".btn-close");
        close.forEach( close => close.classList.add("dark-mode"));

    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        // Toggle dark mode off for items, info, and precio
        const nav = document.querySelectorAll(".todos-nav");
        nav.forEach(nav => nav.classList.remove("dark-mode"));

        const todoContainer = document.querySelectorAll(".todo__container");
        todoContainer.forEach(todos => todos.classList.remove("dark-mode"));

        const todos = document.querySelectorAll(".list-input");
        todos.forEach(todos => todos.classList.remove("dark-mode"));

        const topic = document.querySelectorAll(".topic-input");
        topic.forEach(topic => topic.classList.remove("dark-mode"));

        const del = document.querySelectorAll(".delete-btn");
        del.forEach(del => del.classList.remove("dark-mode"));

        const newTodo = document.querySelectorAll(".newTodo-form");
        newTodo.forEach(todo => todo.classList.remove("dark-mode"));

        const themeIcon = document.querySelectorAll(".theme-icon");
        themeIcon.forEach( themeIcon => themeIcon.classList.remove("dark-mode"));

        const taskContainer = document.querySelectorAll(".task__container");
        taskContainer.forEach( task => task.classList.remove("dark-mode"));

        const trash = document.querySelectorAll(".trash-btn");
        trash.forEach( trash => trash.classList.remove("dark-mode"));

        const modal = document.querySelectorAll(".modal");
        modal.forEach( modal => modal.classList.remove("dark-mode"));

        const close = document.querySelectorAll(".btn-close");
        close.forEach( close => close.classList.remove("dark-mode"));

    }
});


// Dark mode sidebar
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle_mobile");

    // Check localStorage and apply dark mode if enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            enableDarkMode();
            localStorage.setItem('darkMode', 'enabled');
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        const nav = document.querySelectorAll(".todos-nav");
        nav.forEach(nav => nav.classList.add("dark-mode"));

        const todoContainer = document.querySelectorAll(".todo__container");
        todoContainer.forEach(todos => todos.classList.add("dark-mode"));

        const todos = document.querySelectorAll(".list-input");
        todos.forEach(todos => todos.classList.add("dark-mode"));

        const topic = document.querySelectorAll(".topic-input");
        topic.forEach(topic => topic.classList.add("dark-mode"));

        const del = document.querySelectorAll(".delete-btn");
        del.forEach(del => del.classList.add("dark-mode"));

        const newTodo = document.querySelectorAll(".newTodo-form");
        newTodo.forEach(todo => todo.classList.add("dark-mode"));

        const themeIcon = document.querySelectorAll(".theme-icon");
        themeIcon.forEach( themeIcon => themeIcon.classList.add("dark-mode"));

        const taskContainer = document.querySelectorAll(".task__container");
        taskContainer.forEach( task => task.classList.add("dark-mode"));

        const trash = document.querySelectorAll(".trash-btn");
        trash.forEach( trash => trash.classList.add("dark-mode"));

        const side  = document.querySelectorAll(".sidebar");
        side.forEach(side => side.classList.add("dark-mode"));

        const modal = document.querySelectorAll(".modal");
        modal.forEach( modal => modal.classList.add("dark-mode"));

        const close = document.querySelectorAll(".btn-close");
        close.forEach( close => close.classList.add("dark-mode"));


    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        const nav = document.querySelectorAll(".todos-nav");
        nav.forEach(nav => nav.classList.remove("dark-mode"));

        const todoContainer = document.querySelectorAll(".todo__container");
        todoContainer.forEach(todos => todos.classList.remove("dark-mode"));

        const todos = document.querySelectorAll(".list-input");
        todos.forEach(todos => todos.classList.remove("dark-mode"));

        const topic = document.querySelectorAll(".topic-input");
        topic.forEach(topic => topic.classList.remove("dark-mode"));

        const del = document.querySelectorAll(".delete-btn");
        del.forEach(del => del.classList.remove("dark-mode"));

        const newTodo = document.querySelectorAll(".newTodo-form");
        newTodo.forEach(todo => todo.classList.remove("dark-mode"));

        const themeIcon = document.querySelectorAll(".theme-icon");
        themeIcon.forEach( themeIcon => themeIcon.classList.remove("dark-mode"));

        const taskContainer = document.querySelectorAll(".task__container");
        taskContainer.forEach( task => task.classList.remove("dark-mode"));

        const trash = document.querySelectorAll(".trash-btn");
        trash.forEach( trash => trash.classList.remove("dark-mode"));

        const side  = document.querySelectorAll(".sidebar");
        side.forEach(side => side.classList.remove("dark-mode"));

        const modal = document.querySelectorAll(".modal");
        modal.forEach( modal => modal.classList.remove("dark-mode"));

        const close = document.querySelectorAll(".btn-close");
        close.forEach( close => close.classList.remove("dark-mode"));

    }
});
