import React from 'react';
import { ITask } from '../../pages/Tasks/index';
import "./Task.css";

interface ITaskProps {
    task: ITask;
    type?: string;
    handleChangeStatus?: (id: string, task: Partial<ITask>) => void;
    handleRemoveTask?: (id: string) => void;
}



export const Task = ({ task, handleChangeStatus, handleRemoveTask, type }: ITaskProps) => {
    const colorStatus = task.status === "finished" && "green"

    const onChangeStatus = () => {
        if(handleChangeStatus){
            handleChangeStatus(task._id, task)
        }
    }

    return 	<div className="task">
    <p className="task-name">{task.name}</p>
    <div className="task-right-wrapper">
        <div 
            className="check-box-task" 
            style={{
                background: colorStatus
            }}  
            onClick={onChangeStatus} 
        />
        {handleRemoveTask && <button onClick={() => handleRemoveTask(task._id)}>delete</button>}
    </div>
    {type && <p className='task-type'>{type}</p>}
</div>
}