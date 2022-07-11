const buttonOnAddBook = document.getElementById("newBtn");
const table = document.getElementById("tableId");
var counter = 0;

buttonOnAddBook.addEventListener("click", function () {
    const newRow = document.createElement("div");
    const input_one = document.createElement("input");
    const input_two = document.createElement("input");
    const lastRowField = document.createElement("div");
    ++counter;

    input_one.className = "inputElement";
    input_one.id = "inputOne_" + counter;
    input_two.className = "inputElement";
    input_two.id = "inputTwo_" + counter;
    newRow.className = "row2";

    newRow.id = "row_" + counter;

    const saveBtn = document.createElement("div");
    saveBtn.className = "btns";
    saveBtn.id = "save_" + counter;
    saveBtn.onclick = () => onClickSaveButton(newRow.id, table.id, counter);
    saveBtn.textContent = "Save";

    const removeBtn = document.createElement("div");
    removeBtn.className = "btns";
    removeBtn.id = "remove_" + counter;
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => onRemoveButton(newRow.id, table.id);

    lastRowField.className = "btnsField";
    lastRowField.appendChild(saveBtn);
    lastRowField.appendChild(removeBtn);

    newRow.appendChild(input_one);
    newRow.appendChild(input_two);
    newRow.appendChild(lastRowField);

    table.appendChild(newRow);
});

const onClickSaveButton = (rowId, tableId, counter) => {
    const divOne = document.createElement("div");
    const divTwo = document.createElement("div");
    const text1 = document.createElement("p");
    const text2 = document.createElement("p");

    divOne.className = "rowTextField";
    divTwo.className = "rowTextField";

    let row = document.getElementById(rowId);

    let rowObject = {
        ip1: row.childNodes[0].value,
        ip2: row.childNodes[1].value,
    };

    text1.innerText = rowObject.ip1;
    text2.innerText = rowObject.ip2;

    divOne.appendChild(text1);
    divTwo.appendChild(text2);

    const editBtn = document.createElement("div");
    editBtn.className = "btns";
    editBtn.id = "edit_" + counter;
    editBtn.onclick = () =>
        onEditButton(rowId, tableId, rowObject.ip1, rowObject.ip2, counter);
    editBtn.textContent = "Edit";

    row.removeChild(row.childNodes[0]);
    row.removeChild(row.childNodes[0]);
    const btnsFieldInstance = row.childNodes[0];
    btnsFieldInstance.removeChild(btnsFieldInstance.firstChild);
    btnsFieldInstance.prepend(editBtn);
    row.prepend(divTwo);
    row.prepend(divOne);
};

const onRemoveButton = (rowId, tableId) => {
    let table = document.getElementById(tableId);
    let row = document.getElementById(rowId);
    table.removeChild(row);
};

const onEditButton = (rowId, tableId, text1, text2, counter) => {
    const input_one = document.createElement("input");
    const input_two = document.createElement("input");
    const row = document.getElementById(rowId);

    input_one.className = "inputElement";
    input_one.id = "inputOne_" + counter;
    input_two.className = "inputElement";
    input_two.id = "inputTwo_" + counter;

    input_one.value = text1;
    input_two.value = text2;

    const saveBtn = document.createElement("div");
    saveBtn.className = "btns";
    saveBtn.id = "save_" + counter;
    saveBtn.onclick = () => onClickSaveButton(rowId, tableId, counter);
    saveBtn.textContent = "Save";
    row.removeChild(row.childNodes[0]);
    row.removeChild(row.childNodes[0]);
    const btnsFieldInstance = row.childNodes[0];
    btnsFieldInstance.removeChild(btnsFieldInstance.firstChild);
    btnsFieldInstance.prepend(saveBtn);
    row.prepend(input_two);
    row.prepend(input_one);
};
