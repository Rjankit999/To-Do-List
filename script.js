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

        let category = document.createElement("select");
        category.className = "category-section";

        let option1 = document.createElement("option");
        option1.value = "";
        option1.innerText = "Select Category";

        let option2 = document.createElement("option");
        option2.value = "Important";
        option2.innerText = "⭐Important";

        let option3 = document.createElement("option");
        option3.value = "Work";
        option3.innerText = "Work";

        let option4 = document.createElement("option");
        option4.value = "Study";
        option4.innerText = "Study";

        let option5 = document.createElement("option");
        option5.value = "Project";
        option5.innerText = "Project";


        let option6 = document.createElement("option");
        option6.value = "Other";
        option6.innerText = "Other";

        category.appendChild(option1);
        category.appendChild(option2);
        category.appendChild(option3);
        category.appendChild(option4);
        category.appendChild(option5);
        category.appendChild(option6);
        category.appendChild(option6);
        newTask.appendChild(category);


        // add date secstion.....
        let dueDate = document.createElement("input");
        dueDate.type = "date";
        dueDate.className = "task-date";

        newTask.appendChild(dueDate);

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


        let editButton = document.createElement("div");
        editButton.className = "edit-button";

        let editImg = document.createElement("img");
        editImg.src = "./edit.png";

        editButton.appendChild(editImg);
        actionBtn.appendChild(editButton);

        editImg.addEventListener("click", function () {
            let updateTask = prompt("Enter new task name:");
            if (updateTask !== null && updateTask.trim() !== "") {
                title.innerText = updateTask;
            }
        });


    }


});

// Category section .......

let fillterCategory = document.querySelector(".fillter-category");
fillterCategory.addEventListener("change", function () {
    let selectCategory = fillterCategory.value;
    let allTaks = document.querySelectorAll(".task-section-hendling");

    allTaks.forEach(function (task) {
        let taskCategory = task.querySelector(".category-section").value;
        if (selectCategory === "All" || selectCategory === taskCategory) {
            task.style.display = "flex";
        }
        else {
            task.style.display = "none";
        }
    });
});




