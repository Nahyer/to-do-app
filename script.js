var todoInput = document.getElementById('todo-input');
var input = document.getElementById('todo-input');
var todoList = document.getElementById('todo-list');
var itemsLeft = document.getElementById('items-left');

document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var newTodo = input.value;

    if (newTodo) {
        var div = document.createElement('div');
        let checkbox = document.createElement('input');
        let todoText = document.createElement('span');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                todoText.style.textDecoration = 'line-through';
            } else {
                todoText.style.textDecoration = 'none';
            }
        });
        div.appendChild(checkbox);
        div.appendChild(todoText);
        todoText.textContent = newTodo;

        var div1 =document.getElementById('todo-list');
        div1.appendChild(div);
        input.value = '';
    }
    updateItemsLeft();
});

function updateItemsLeft(){
    var count = todoList.getElementsByTagName('span').length;
    var checkedItems = todoList.querySelectorAll('input[type="checkbox"]:checked');
    var checkedCount = checkedItems.length;
    var totalCount = count;
    
    if (checkedCount > 0) {
        totalCount -= checkedCount;
    }
    
    itemsLeft.textContent = totalCount;
}

let filterItems = document.querySelectorAll('.filter-item');
filterItems.forEach(function(filterItem) {
    // Add click event listener to each filter item
    filterItem.addEventListener('click', function() {
      
        filterItems.forEach(function(item) {
            item.classList.remove('selected');
        });

      
        this.classList.add('selected');

      
        let filterAction = this.textContent;
        console.log('Filter action:', filterAction);
    });
});
