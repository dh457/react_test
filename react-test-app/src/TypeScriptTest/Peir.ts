
export class ToDo{
    
    title : string | undefined;
    description : string | undefined;
};

export function updateToDo(todo : ToDo, fiedsToUpdate : Partial<ToDo>){
    return { ...todo, ...fiedsToUpdate };
};


