import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Tasks.css"
import { Task } from "../../components/Task/index";

export interface ITask {
	_id: string;
	name: string;
	status: `in progress` | `finished`;
}

export const TasksPage = () => {
    const [tasks, setTasks] = useState<any[]>([]);
	const [fieldTask, setFieldTask] = useState("")

    useEffect(() => {
        ;(async () => {
            await handleGetTasks();
        })();
    }, [])

	const onChangeFieldTaskValue = (value: string) => setFieldTask(value)

    const handleGetTasks = async () => {
        try{
            const result = await axios.get("http://localhost:3010/api/tasks", { withCredentials: true })

			if(!result?.data?.tasks?.length) return;

            setTasks(result.data.tasks);
        } catch(err) {
            console.error(err)
        }
    }

    const handleAddTask = async (e: any) => {
		e.preventDefault();
		if(!tasks) return;

		try {
			const result = await axios.post("http://localhost:3010/api/tasks", {
				name: fieldTask
			}, { withCredentials: true })

			if(!result?.data?.task) return;
			
			setTasks((prev) => [...prev, result.data.task])
		} catch(err) {
			console.error(err)
		}
    }

	const handleUpdateTask = async (id: string, task: Partial<ITask>) => {
		try {
			const result = await axios.patch(`http://localhost:3010/api/tasks/${id}`, { ...task }, { withCredentials: true });

			if(!result?.data?.task) return;

			const copyTasks = [...tasks]

			const indexToReplace = copyTasks.findIndex((task) => task._id === id)

			copyTasks.splice(indexToReplace, 1, result?.data?.task)

			setTasks(copyTasks)		
		} catch (err) {
			console.log(err);
		}
	}

	const handleChangeStatus = async (id: string, task: Partial<ITask>) => {
		const taskInProgress = task.status === "in progress";

		await handleUpdateTask(id, {
			status: taskInProgress ? "finished" : "in progress",
		});
	}

	const handleRemoveTask = async (id: string) => {
		try {
			await axios.delete(`http://localhost:3010/api/tasks/${id}`, { withCredentials: true });

			const copyTasks = [...tasks]

			const indexToReplace = copyTasks.findIndex((task) => task._id === id)

			copyTasks.splice(indexToReplace, 1)

			setTasks(copyTasks)		
		} catch (err) {
			console.log(err);
		}
	}	

    return  <>
        <form className="tasks-header-wrapper" onSubmit={handleAddTask}>
            <input type="text" id="taskField" onChange={(e) => onChangeFieldTaskValue(e.target.value)} placeholder="Enter task name" />
            <input type="submit" value="Add" />
        </form>
        <div className="tasks-wrapper" id="tasks">
            {
                tasks.map((task, index) => {
                    return <Task 
						key={`task : ${index}`} 
						task={task} 
						handleChangeStatus={handleChangeStatus} 
						handleRemoveTask={handleRemoveTask}
					/>
                })
            }
        </div>
    </>
}
