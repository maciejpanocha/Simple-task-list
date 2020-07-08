{
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

    const renderTask = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
            <li class="list__item">
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

    const render = () => {
        renderTask();

        bindAddNewTaskEvent();
        bindToggleTaskDoneEvent();
        bindRemoveTaskEvent();
    };

    const init = () => {
        render();
    };

    init();
};

