const taskinput = document.getElementById("taskinput");

const addBtn = document.querySelector(".add-btn");


const taskSection = document.querySelector(".task-section");


addBtn.addEventListener("click", function () {
    console.log("add Button clicked");
    let taskValuse = taskinput.value;
    if (taskValuse.trim() !== "") {
        console.log(taskValuse);
        let newTask = document.createElement("div");

        newTask.className = "task-section-hendling";

        let title = document.createElement("h2");
        title.innerText = taskValuse;
        taskSection.appendChild(newTask);
        taskinput.value = "";
        let checkBod = document.createElement("input");
        checkBod.type = "checkbox";
        checkBod.className = "check-box";

        newTask.appendChild(checkBod);
        newTask.appendChild(title);

        checkBod.addEventListener("change", function () {
            if (checkBod.checked) {
                title.style.textDecoration = "line-through";
                title.style.color = "gray";
            }
            else {
                title.style.textDecoration = "none";
                title.style.color = "black";

            }
        });
        let actionBtn = document.createElement("div");
        actionBtn.classList = "action-button";

        let deleteButton = document.createElement("div");
        deleteButton.className = "delete-button";

        let deleteImg = document.createElement("img");
        deleteImg.src = "./bin.png";

        deleteButton.appendChild(deleteImg);
        actionBtn.appendChild(deleteButton);
        newTask.appendChild(actionBtn);

        deleteImg.addEventListener("click", function () {
            newTask.remove();
        });
    }

});

