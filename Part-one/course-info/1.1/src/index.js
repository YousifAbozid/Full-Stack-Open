import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <p> {props.course} </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p> {props.part1} {props.number1} </p>
      <p> {props.part2} {props.number2} </p>
      <p> {props.part3} {props.number3} </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.numbers} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} 
      number1={exercises1} number2={exercises2} number3={exercises3} />
      <Total numbers={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))