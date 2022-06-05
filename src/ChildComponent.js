import React, { Component } from 'react'

export default class ChildComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { like: 0 }
        console.log('constructor_children')
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps_children')
        return null
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate_children')
        return true
    }

    render() {
        console.log('render_children')
        return (
            <>
                <p>ChildComponent</p>
                <p>{this.state.like}</p>
                <button onClick={() => this.setState({ like: this.state.like + 1 })}>Add like</button>
            </>
        )
    }

    // chỉ chạy một lần khi component được mount giống useEffect(()=>{},[])
    componentDidMount() {
        console.log('componentDidMount_children')
    }

    // chạy khi component re-render giống useEffect(()=>{},[deps])
    componentDidUpdate() {
        console.log('componentDidUpdate_children')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount_children')
    }
}
