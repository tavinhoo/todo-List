const form = document.getElementById("formContent");
const listOftasks = document.querySelector("#listOfTasks");

form.addEventListener('submit', event => {
    event.preventDefault();

    const taskValue = document.querySelector("#taskContent")
    addTask(taskValue.value)
    form.reset()
});



function addTask(taskValue) {
    console.log("Entrou aqui")
    const arrayOfTasks = [];
    arrayOfTasks.push(taskValue);

    console.log(arrayOfTasks[0]);
    arrayOfTasks.forEach(element => {

        // Criando tarefa
        let newBlock = document.createElement('li');
        let taskText = document.createTextNode(element);
        newBlock.appendChild(taskText);

        // Criando botão de exlcusão
        let removeButton = document.createElement('button');
        removeButton.textContent = "X";

        removeButton.addEventListener("click", event => {
            newBlock.remove();
        });

        newBlock.appendChild(removeButton);



        listOftasks.appendChild(newBlock);
    });
}




