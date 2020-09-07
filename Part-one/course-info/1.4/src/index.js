import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <p> {props.course} </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p> {props.part} {props.number} </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} number={props.exercises1} />
      <Part part={props.part2} number={props.exercises2} />
      <Part part={props.part3} number={props.exercises3} />
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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={parts[0].name}
        part2={parts[1].name}
        part3={parts[2].name}
        exercises1={parts[0].exercises} 
        exercises2={parts[1].exercises} 
        exercises3={parts[2].exercises}
      />
      <Total numbers={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))