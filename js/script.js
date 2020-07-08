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

    const addNewTask = () => {
        const newTaskContent = document.querySelector(".js-newTaskContent").value.trim();
        tasks = [
            ...tasks,
            { content: newTaskContent },
        ];
        render();
    };

    const bindAddNewTaskEvent = () => {
        const newTaskButton = document.querySelector(".js-addNewTaskButton");
        newTaskButton.addEventListener("click", (event) => {
            event.preventDefault();
            addNewTask();
        });
    };

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
            <li class="list__item">
                <span class="list__span${task.done ? " list__item--done" : ""}">
                    ${task.content}
                </span>
            </li>
        `;
        };

        document.querySelector(".js-taskList").innerHTML = htmlString;
        bindAddNewTaskEvent();
    };

    const init = () => {
        render();
    };

    init();
};

