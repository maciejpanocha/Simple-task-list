{
    let hiding = false;
    let tasks = [
        {
            content: "Kupić bułki",
            done: true,
        },
        {
            content: "Umyć podłogi",
            done: false,
        },
    ];

    const cleanForm = () => {
        document.querySelector(".js-newTaskContent").focus();
        document.querySelector(".js-form").reset();
    };

    const addNewTask = () => {
        const newTaskContent = document.querySelector(".js-newTaskContent").value.trim();
        if (newTaskContent === "") return;
        tasks = [
            ...tasks,
            { content: newTaskContent },
        ];
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            { ...tasks[taskIndex], done: !tasks[taskIndex].done },
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const removeTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const doneAllTasks = () => {
        tasks.forEach((task, index) => {
            tasks = [
                ...tasks.slice(0, index),
                { ...task, done: true },
                ...tasks.slice(index + 1),
            ];
        });
        render();
    };

    const hideDoneTasks = () => {
        hiding = !hiding;
        render();
    };

    const bindAddNewTaskEvent = () => {
        const newTaskButton = document.querySelector(".js-addNewTaskButton");
        newTaskButton.addEventListener("click", (event) => {
            event.preventDefault();
            addNewTask();
            cleanForm();
        });
    };

    const bindToggleTaskDoneEvent = () => {
        const toggleTaskDoneButtons = document.querySelectorAll(".js-toggleTaskDoneButton");
        toggleTaskDoneButtons.forEach((toggleTaskDoneButton, index) => {
            toggleTaskDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const bindRemoveTaskEvent = () => {
        const removeTaskButtons = document.querySelectorAll(".js-removeTaskButton");
        removeTaskButtons.forEach((removeTaskButton, index) => {
            removeTaskButton.addEventListener("click", () => {
                removeTask(index);
            })
        });
    };

    const bindDoneAllTasksEvent = () => {
        const doneAllButton = document.querySelector(".js-doneAllTasksButton");
        doneAllButton.addEventListener("click", () => {
            doneAllTasks();
        });
    };

    const bindHideDoneEvent = () => {
        const hideDoneButton = document.querySelector(".js-hideDoneTasksButton");
        hideDoneButton.addEventListener("click", () => {
            hideDoneTasks();
        });
    };

    const renderTasks = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
            <li class="list__item${hiding && task.done ? " list__item--hidden" : ""}">
                <button class="list__button list__button--toggleDone js-toggleTaskDoneButton">✔</button>
                <span class="list__span${task.done ? " list__item--done" : ""}">
                    ${task.content}
                </span>
                <button class="list__button list__button--remove js-removeTaskButton">✘</button>
            </li>
        `;
        };

        document.querySelector(".js-taskList").innerHTML = htmlString;
    };

    const renderButtons = () => {
        let htmlString = "";
        htmlString += `
            <h2 class="section__header">Lista zadań</h2>
            <button class="section__button js-hideDoneTasksButton${tasks.length > 0 ? "" : " section__button--hidden"}">
                ${hiding ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button class="section__button js-doneAllTasksButton${tasks.length > 0 ? "" : " section__button--hidden"} ${tasks.every(({ done }) => done) ? " section__button--disabled" : ""}">
                Ukończ wszystkie
            </button>
        `;

        document.querySelector(".js-buttonPanel").innerHTML = htmlString;
        bindDoneAllTasksEvent();
        bindHideDoneEvent();
    };

    const render = () => {
        renderTasks();
        renderButtons();

        bindAddNewTaskEvent();
        bindToggleTaskDoneEvent();
        bindRemoveTaskEvent();
    };

    const init = () => {
        render();
    };

    init();
};

