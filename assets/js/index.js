
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById('todo');
    const button = document.getElementById('push');
    const tasks = document.getElementById('tasks');
    let warning = document.getElementById('warning')
    let taskInfo = document.getElementById('taskinfo');
    const alert = document.getElementById('alert');
    let complete = document.getElementById('completed');
    let uncomplete = document.getElementById('uncompleted');

    function generateRandomColor() {
        let randomColor = "";
        const colors = ['red', 'blue', 'orange', 'yellow', 'purple', 'pink', 'green'];
        randomColor += Math.floor(Math.random() * colors.length);
        return colors[randomColor];

    }
    


    button.addEventListener("click", () => {
        let inputValue = input.value.trim();
        if (inputValue === "") {
            warning.textContent = 'Please Enter a valid Task';
            return;
        }

        taskInfo.textContent = "";
        warning.textContent = "";
        tasks.innerHTML += `
    <div id='task'>
    <input type='checkbox' class='check'>
    <div class='taskname'>${inputValue}</div>
    <span class='delete'><i class="fa-regular fa-circle-xmark"></i></span>
    </div>`;

        input.value = "";
        input.focus();

        let deleteBtn = document.querySelectorAll('.delete');
        deleteBtn.forEach((btn) => { btn.addEventListener("click", deletTask) });

        function deletTask() {
            if(confirm('doy you want to delete this task')){
            this.parentNode.remove();
            updateCounters();
            }
            
            
        };

        let checkBox = document.querySelectorAll('.check');
        checkBox.forEach((box) => { box.addEventListener("click", lineTrough) });

        function lineTrough() {
            // this.parentNode.classList.toggle('line');
    
                if (this.checked) {
                    this.parentNode.style.textDecoration = "line-through";
                    this.parentNode.style.textDecorationColor = generateRandomColor();
                    this.parentNode.style.textDecorationThickness = '3px'; 
                    this.parentNode.classList.add('line'); 
                    this.setAttribute('checked', true);
                } else {
                    this.parentNode.style.textDecoration = "none"; // Remove line-through effect
                    this.parentNode.classList.remove('line'); 
                }
                updateCounters()
        };
        function updateCounters() {
            const completedTasks = document.querySelectorAll(".line").length;
            const uncompletedTasks = document.querySelectorAll("#task:not(.line)").length;
          
            complete.textContent = completedTasks;
            uncomplete.textContent = uncompletedTasks;
          }
          updateCounters();
    });
    
});
