import React, {ChangeEvent, JSX} from 'react';
import {Button} from './Button';

type TaskType = {
    taskID: string
    isDone: boolean
    title: string
    todolistID: string
    removeTaskLink: (todolistID: string, taskId: string) => void
    changeTaskStatusLink: (todolistID: string, taskId: string, isDone: boolean) => void
}

export const Task = (props: TaskType): JSX.Element => {
    const {taskID, isDone, title, todolistID, removeTaskLink, changeTaskStatusLink} = props;
    const onClickHandler = () => removeTaskLink(todolistID, taskID);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeTaskStatusLink(todolistID, taskID, e.currentTarget.checked);
    };

    return (
        <li className={isDone ? 'is-done' : ''}>
            <input type="checkbox"
                   onChange={onChangeHandler}
                   checked={isDone}/>
            <span>{title}</span>
            <Button name={'x'} callBack={onClickHandler}/>
        </li>
    );
};

