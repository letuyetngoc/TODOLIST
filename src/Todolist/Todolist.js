import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { Container } from '../Components/Container'
import { Dropdown } from '../Components/Dropdown'
import { Heading1, Heading3, Heading4 } from '../Components/Heading'
import { TextFeild } from '../Components/TextField'
import { Button } from '../Components/Button'
import { Table, Th, Tr, Thead } from '../Components/Table.js'

import _ from 'lodash'

import { BsArrowBarUp } from "react-icons/bs"
import { HiOutlinePlus } from "react-icons/hi"
import { RiDeleteBin6Line, RiEditLine, RiCheckLine } from "react-icons/ri"
import { connect } from 'react-redux'
import { addTask, completeTask, deleteTask, editTask, getThemeValue, updateTask } from '../redux/actions/TodolistActions'
import { arrTheme } from '../Themes/ManageTheme'

class Todolist extends Component {

    state = {
        taskName: '',
        isUpdateBtn: false
    }

    renderTheme = () => {
        return arrTheme.map(theme => {
            return <option key={theme.id} value={theme.id}>{theme.themeName}</option>
        })
    }

    renderNewTask = () => {
        const arrNewTask = this.props.listTask.filter(task => task.done === false)

        if (_.isEmpty(arrNewTask)) {
            return <Heading4 className='text-center'>No task</Heading4>
        } return <Table>
            <Thead>
                {arrNewTask.map(task => {
                    return (
                        <Tr key={task.id}>
                            <Th>{task.taskName}</Th>
                            <Th className='text-right'>
                                <Button className='ml-1'
                                    onClick={() => this.props.dispatch(deleteTask(task.id))}
                                ><RiDeleteBin6Line /></Button>
                                <Button className='ml-1'
                                    onClick={() => {
                                        this.setState({ ...this.state, isUpdateBtn: true }, () =>
                                            this.props.dispatch(editTask(task.id, task.taskName)))

                                    }}
                                ><RiEditLine /></Button>
                                <Button className='ml-1' onClick={() => {
                                    this.props.dispatch(completeTask(task.id))
                                }}><RiCheckLine /></Button>
                            </Th>
                        </Tr>
                    )
                })}
            </Thead>
        </Table>
    }

    renderTaskCompleted = () => {
        const arrTaskCompleted = this.props.listTask.filter(task => task.done === true)

        if (_.isEmpty(arrTaskCompleted)) {
            return <Heading4 className='text-center'>No task</Heading4>
        } return <Table>
            <Thead>
                {arrTaskCompleted.map(task => {
                    return (
                        <Tr key={task.id}>
                            <Th>{task.taskName}</Th>
                            <Th className='text-right'>
                                <Button className='ml-1'
                                    onClick={() => this.props.dispatch(deleteTask(task.id))}
                                ><RiDeleteBin6Line /></Button>
                            </Th>
                        </Tr>
                    )
                })}
            </Thead>
        </Table>
    }

    handleGetTask = () => {
        const newTask = {
            id: Date.now(),
            taskName: this.state.taskName,
            done: false
        }
        this.props.dispatch(addTask(newTask))
        this.setState({ taskName: '' })
    }

    render() {
        return (
            <ThemeProvider theme={this.props.toDoTheme} >
                <Container>
                    <Dropdown onChange={(e) => this.props.dispatch(getThemeValue(e.target.value))}>
                        {this.renderTheme()}
                    </Dropdown>

                    <Heading1 className='my-3 text-center'>To do list</Heading1>

                    <div>
                        <TextFeild
                            id='textFeild'
                            label='Task name' placeholder='Add your task here'
                            value={this.state.taskName}
                            onChange={(e) => this.setState({
                                taskName: e.target.value
                            })}
                        ></TextFeild>
                        {this.state.isUpdateBtn ? <Button className='ml-2 '
                            onClick={() => {
                                let { taskName } = this.state
                                this.setState({
                                    isUpdateBtn: false,
                                    taskName: '',
                                }, () => {
                                    this.props.dispatch(updateTask(taskName))
                                })
                            }}
                        ><BsArrowBarUp className='mb-1' /> Update Task</Button> : <Button className='ml-2 '
                            onClick={this.handleGetTask}>
                            <HiOutlinePlus className='mb-1' />Add Task</Button>}

                    </div>

                    <Heading3 className='my-4'>Task to do</Heading3>
                    {this.renderNewTask()}

                    <Heading3 className='my-4'>Task completed</Heading3>
                    {this.renderTaskCompleted()}

                </Container>
            </ThemeProvider >
        )
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.taskEdit !== prevProps.taskEdit) {
            this.setState({ taskName: this.props.taskEdit.taskName })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        toDoTheme: state.TodolistReducer.toDoTheme,
        listTask: state.TodolistReducer.listTask,
        taskEdit: state.TodolistReducer.taskEdit
    }
}

export default connect(mapStateToProps)(Todolist)
