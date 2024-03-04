import React, {ChangeEvent, JSX, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from '../TodolistWrap';
import {useAutoAnimate} from '@formkit/auto-animate/react';
import {Button} from './Button';
import {Task} from './Task';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistType = {
    todolistID: string
    titleTodolist: string
    filter: FilterValuesType
    tasks: Array<TaskType>
    removeTaskLink: (todolistID: string, taskID: string) => void
    removeTodolistLink: (todolistID: string) => void
    changeFilterLink: (todolistID: string, value: FilterValuesType) => void
    addTaskLink: (todolistID: string, title: string) => void
    changeTaskStatusLink: (todolistID: string, taskID: string, isDone: boolean) => void
}

export const Todolist = (props: TodolistType): JSX.Element => {
    const {
        titleTodolist, todolistID, tasks, filter,
        removeTaskLink, removeTodolistLink, changeFilterLink, addTaskLink, changeTaskStatusLink
    } = props;

    const [title, setTitle] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [listRef] = useAutoAnimate<HTMLUListElement>();

    const addTask = () => {
        if (title.trim() !== '') {
            addTaskLink(todolistID, title.trim());
            setTitle('');
        } else {
            setError('Title is required');
        }
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    };
    const removeTodolistHandler = () => {
        removeTodolistLink(todolistID);
    };

    const onClickFilterHandler = (valueFilter: FilterValuesType) => {
        changeFilterLink(todolistID, valueFilter);
    };

    const getClassName = (nameFilter: FilterValuesType) => {
        return filter === `${nameFilter}` ? 'active-filter' : 'filter';
    };

    return <div className={'Todolist'}>
        <header className={'Header'}>
            <h3>{titleTodolist}</h3>
            <Button name={'X'} callBack={removeTodolistHandler}/>
        </header>

        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? 'error' : ''}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
        <ul ref={listRef}>
            {tasks.map(t => {
                return <Task key={t.id}
                             taskID={t.id}
                             isDone={t.isDone}
                             title={t.title}
                             todolistID={todolistID}
                             removeTaskLink={removeTaskLink}
                             changeTaskStatusLink={changeTaskStatusLink}/>;
            })}
        </ul>
        <div>
            <Button name={'All'} callBack={() => onClickFilterHandler('all')}
                    className={getClassName('all')}/>
            <Button name={'Active'} callBack={() => onClickFilterHandler('active')}
                    className={getClassName('active')}/>
            <Button name={'Completed'} callBack={() => onClickFilterHandler('completed')}
                    className={getClassName('completed')}/>
        </div>
    </div>;
};
