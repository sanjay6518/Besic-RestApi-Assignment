const  tasks = [];

export const findalltasks = () => {
   return tasks; 
}



export const createtask = (body) => {
    let id = tasks.length+1 ;

      const newObj = body
      newObj.id = id;        
        tasks.push(newObj);

        return tasks;
}

export const updatetask = (taskid, body) => {

    for (const task of tasks) {
            if(task.id == taskid){
                Object.assign(task, body);
                return task;
            }   
    }

    return;
}


export const deletetask = (taskid) => {
    tasks.splice(taskid-1, 1)
}