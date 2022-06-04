import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Container } from '../Components/Container'
import { DarkTheme } from '../Themes/DarkTheme'
import { LightTheme } from '../Themes/LightTheme'
import { PrimaryTheme } from '../Themes/PrimaryTheme'
import { Dropdown } from '../Components/Dropdown'
import { Heading1, Heading2, Heading3 } from '../Components/Heading'
import { TextFeild } from '../Components/TextField'
import { Button } from '../Components/Button'
import { Table, Tbody, Th, Tr, Td, Thead } from '../Components/Table.js'

import { BsArrowBarUp } from "react-icons/bs"
import { HiOutlinePlus } from "react-icons/hi"
import { RiDeleteBin6Line, RiEditLine, RiCheckLine } from "react-icons/ri"

export default function Todolist() {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Container className='w-50'>
                <Dropdown>
                    <option>Light Theme</option>
                    <option>Dark Theme</option>
                    <option>Primary Theme</option>
                </Dropdown>
                <Heading1 className='my-3 text-center'>To do list</Heading1>
                <div>
                    <TextFeild label='Task name'></TextFeild>
                    <Button className='ml-2'><HiOutlinePlus className='mb-1' /> Add Task</Button>
                    <Button className='ml-2'><BsArrowBarUp className='mb-1' /> Update Task</Button>
                </div>
                <Heading3 className='my-4'>Task to do</Heading3>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Task 1</Th>
                            <Th className='text-right'>
                                <Button className='ml-1'><RiDeleteBin6Line /></Button>
                                <Button className='ml-1'><RiEditLine /></Button>
                                <Button className='ml-1'><RiCheckLine /></Button>
                            </Th>
                        </Tr>
                        <Tr>
                            <Th>Task 1</Th>
                            <Th className='text-right'>
                                <Button className='ml-1'><RiDeleteBin6Line /></Button>
                                <Button className='ml-1'><RiEditLine /></Button>
                                <Button className='ml-1'><RiCheckLine /></Button>
                            </Th>
                        </Tr>
                    </Thead>
                </Table>
                <Heading3 className='my-4 '>Task completed</Heading3>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Task 1</Th>
                            <Th className='text-right'>
                                <Button><RiDeleteBin6Line /></Button>
                            </Th>
                        </Tr>
                        <Tr>
                            <Th>Task 1</Th>
                            <Th className='text-right'>
                                <Button><RiDeleteBin6Line /></Button>
                            </Th>
                        </Tr>
                    </Thead>
                </Table>

            </Container>
        </ThemeProvider>
    )
}
