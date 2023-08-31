import React, { useEffect, useState } from 'react';
import axios from '../../../node_modules/axios/index';
import { Task } from '../../components/Task/index';
import { ITask } from '../Tasks/index';
import "./Histories.css"

export interface IHistories {
	_id: string;
	type: string;
	task: ITask;
}

export const HistoriesPage = () => {
    const [tasks, setTasks] = useState<IHistories[]>([])

    useEffect(() => {
        ;(async () => {
            await handleGetHistories()
        })();
    }, [])

    const handleGetHistories = async () => {
        try {
            const result = await axios.get("http://localhost:3010/api/histories", { withCredentials: true })
            
            if(!result?.data?.histories?.length) return;
            
            setTasks(result.data.histories)
        } catch (error) {
            console.error(error);
        }
    }

    return <>
        {
           tasks.reverse().map((history, index) => {
            return <Task 	
                key={`task : ${index}`} 
                task={history.task} 
                type={history.type}
            />
           })
        }
    </>
}

