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
    };

    const init = () => {
        render();
    };

    init();
};

