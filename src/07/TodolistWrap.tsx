import React, {JSX, useState} from 'react';
import './TodolistWrap.css';
import {TaskType, Todolist} from './components/Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TasksType = {
    [id: string]: TaskType[]
}

export const TodolistWrap = (): JSX.Element => {
    const todolistID1 = v1();
    const todolistID2 = v1();

    const [todolists, setTodolists] = useState<TodolistsType[]>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to practice', filter: 'all'},
    ]);

    const [tasks, setTasks] = useState<TasksType>({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS2', isDone: true},
            {id: v1(), title: 'JS2', isDone: true},
            {id: v1(), title: 'ReactJS2', isDone: false},
            {id: v1(), title: 'Rest API2', isDone: false},
            {id: v1(), title: 'GraphQL2', isDone: false},
        ]
    });


    const removeTask = (todolistID: string, taskID: string) => {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(el => el.id !== taskID)});
    };

    const removeTodolist = (todolistID: string) => {
        setTodolists(todolists.filter(el => el.id !== todolistID));
        delete tasks[todolistID];
    };

    const addTask = (todolistID: string, title: string) => {
        const newTask = {id: v1(), title, isDone: false};
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]});
    };

    const changeStatus = (todolistID: string, taskID: string, isDone: boolean) => {
        setTasks({
            ...tasks, [todolistID]: tasks[todolistID].map(el => el.id === taskID
                ? {...el, isDone} : el)
        });
    };

    const changeFilter = (todolistID: string, filter: FilterValuesType) => {
        setTodolists(todolists.map(el => el.id === todolistID ? {...el, filter} : el));
    };

    return (
        <div className={'TodolistWrap'}>
            {todolists.map(tl => {
                let tasksForTodolist = tasks[tl.id];

                if (tl.filter === 'active') {
                    tasksForTodolist = tasks[tl.id].filter(t => !t.isDone);
                }
                if (tl.filter === 'completed') {
                    tasksForTodolist = tasks[tl.id].filter(t => t.isDone);
                }

                // то же но через функцию, а не условия
                // const getFilteredTasks = (allTasks: TaskType[], filterValue: FilterValuesType): TaskType[] => {
                //     switch (filterValue) {
                //         case 'completed':
                //             return allTasks.filter(el => el.isDone);
                //         case 'active':
                //             return allTasks.filter(el => !el.isDone);
                //         default:
                //             return allTasks;
                //     }
                // };
                // const tasksForTodolist = getFilteredTasks(tasks[tl.id], tl.filter);

                return (
                    <Todolist
                        key={tl.id}
                        todolistID={tl.id}
                        titleTodolist={tl.title}
                        filter={tl.filter}
                        tasks={tasksForTodolist}
                        removeTaskLink={removeTask}
                        removeTodolistLink={removeTodolist}
                        changeFilterLink={changeFilter}
                        addTaskLink={addTask}
                        changeTaskStatusLink={changeStatus}
                    />
                );
            })}
        </div>
    );
};
