import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class Lifecircle extends Component {

    // được gọi trước khi component được mount
    constructor(props) {
        super(props)
        this.state = { number: 0 }
        console.log('constructor_parent')
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps_parent')
        return null
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate_parent')
        return true
    }

    render() {
        console.log('render_parent')
        return (
            <>
                <div>{this.state.number}</div>
                <button onClick={() => this.setState({ number: this.state.number + 1 })} className='btn btn-success'>+</button>
                <ChildComponent />
            </>
        )
    }

    // được gọi ngay lập tức khi component được mount, giống useEffect(()=>{},[])
    // đặt side effect
    componentDidMount() {
        console.log('componentDidMount_parent')
    }

    // chạy khi component re-render giống useEffect(()=>{},[deps])
    // được gọi ngay lập tức sau khi quá trình cập nhật diễn ra. Phương thức này không được gọi cho lần render đầu tiên.
    componentDidUpdate(prevProps, prevState) {
        // so sánh props hiện tại this.props với props trước đó prevProps
        console.log('componentDidUpdate_parent')
    }

    // được gọi trước khi component unmount giống useEffect có return
    componentWillUnmount() {
        console.log('componentWillUnmount_parent')
    }
}
