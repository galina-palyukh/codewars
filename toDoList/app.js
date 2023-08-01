document.addEventListener("DOMContentLoaded", function () {    let table = document.querySelector(".todo__table");    let addBtn = document.querySelector(".box-add__btn");    addBtn.addEventListener("click", addTask);    function addTask(e) {        e.preventDefault();        let value = document.querySelector(".box-add__field").value;        if (table.style.display !== "table") {            table.style.display = "table";        }        table.style.display = "table";        let row = document.createElement("tr");        table.appendChild(row);        let col = document.createElement("td");        row.appendChild(col);        col.innerText = value;        document.querySelector(".box-add__field").value = " ";        let actions = document.createElement("td");        actions.innerHTML = '<div class="todo__table-actions"><a href ="#" class="todo__table-btn-remove">Delete</a><a href ="#" class="todo__table-btn-edit">Edit</a></div>';        row.appendChild(actions);        let removeBtn = actions.querySelector(".todo__table-btn-remove");        removeBtn.addEventListener("click", removeTask);        let editBtn = actions.querySelector(".todo__table-btn-edit");        editBtn.addEventListener("click", editTask)    }    function removeTask(e) {        e.preventDefault();        this.closest("tr").remove();    }    function editTask(e) {        e.preventDefault();        alert("cdCSD");    }});