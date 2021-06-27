let ulTasks= $('#ulTasks')
let btnAdd= $('#btnAdd')
let btnReset= $('#btnReset')
let inpNewTask= $('#inpNewTask')
let btnCleanup= $('#btnCleanup')
let btnSort= $('#btnSort')

function addItem(){
        let listItem=$('<li>',{
                'class':'list-group-item',
                text:inpNewTask.val().trim()

        })
        listItem.click(()=>{
               listItem.toggleClass('done')
        })
        if(inpNewTask.val().trim()) ulTasks.append(listItem)
        inpNewTask.val("")
        toggleInpBtn()
}
function toggleInpBtn()
{ 
    btnReset.prop('disabled',inpNewTask.val()=='')
    btnAdd.prop('disabled',inpNewTask.val()=='')
    btnCleanup.prop('disabled',ulTasks.children().length < 1)
    btnSort.prop('disabled',ulTasks.children().length < 1)
  
}

inpNewTask.on('input',toggleInpBtn)
function ClearDone(){
       $('#ulTasks .done').remove()
       toggleInpBtn()
}
function SortTask()
{
        $('#ulTasks .done').appendTo(ulTasks)
}
inpNewTask.keypress((e)=>{
        if (e.which==13) addItem()
})

btnAdd.click(addItem)
btnSort.click(SortTask)
btnReset.click(()=>{
        inpNewTask.val('')
        toggleInpBtn()
})
btnCleanup.click(ClearDone)