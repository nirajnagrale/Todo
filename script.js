let inpNewTask = $('#inpNewTask');
let btnAddTask = $("#btnAddTask");
let btnResetTask = $('#btnResetTask');
let btnCleanUp = $('#btnCleanUp');
let btnSortTask = $('#btnSortTask');
let ulTasks = $('#ulTasks');

//Add task
function addItem(){
    if(inpNewTask.val() == ""){
        alert("Please enter a task");
    }else{
    let listItem = $('<li>',{
        'class':'list-group-item',
        text: inpNewTask.val()
    })
    listItem.click(()=>{
        listItem.toggleClass('done');
    })
    ulTasks.append(listItem);
    inpNewTask.val('');
}
}

inpNewTask.keypress((e)=>{
    if(e.which == 13){
        addItem();
    }
})

function enableResetButton(enabled){
    if(enabled){
        btnResetTask.prop('disabled',false);
    }else{
        btnResetTask.prop('disabled',true);
    }
}

inpNewTask.keyup(()=>{
    enableResetButton(inpNewTask.val() != "");
})

btnAddTask.click(addItem);

btnResetTask.click(()=>{
    inpNewTask.val('');
})


btnCleanUp.click(()=>{
    ulTasks.children('li.done').remove();
});

btnSortTask.click(()=>{
    ulTasks.children('li.done').appendTo(ulTasks);
})
