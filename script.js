let inpNewTask = $('#inpNewTask');
let btnAddTask = $("#btnAddTask");
let btnResetTask = $('#btnResetTask');
let btnCleanUp = $('#btnCleanUp');
let btnSortTask = $('#btnSortTask');
let ulTasks = $('#ulTasks');
let inpNewTaskDesc = $('#inpNewTaskDesc');

//Add task
function addItem(){
    if(inpNewTask.val() == ""){
        alert("Please enter a task");
    }else{
    let listItem = $('<li>',{
        'class':'list-group-item',
        html: inpNewTask.val()+"<br> &nbsp;"+inpNewTaskDesc.val()
    })
    listItem.click(()=>{
        listItem.toggleClass('done');
    })
    ulTasks.append(listItem);
    inpNewTask.val('');
    inpNewTaskDesc.val('');
}
}

inpNewTask.keypress((e)=>{
    if(e.which == 13){
        addItem();
    }
})

inpNewTaskDesc.keypress((e)=>{
    if(e.which == 13){
        if(inpNewTask.val() == ""){
            alert("Please enter a task");
        }else{
        addItem();
    }
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
