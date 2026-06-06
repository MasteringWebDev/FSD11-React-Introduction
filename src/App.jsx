import { useState } from 'react'
import './App.css'
// import Child1 from './components/Child1'
// import Child2 from './components/Child2'
// import Student1 from './components/Student1'
// import Student2 from './components/Student2'
// import Student from './components/Student'
// import Employee from './components/Employee'
import Count from './components/Count'

function App() {
  // const arr = ['Kibbe', 'Jesse', 'Sonny', 'Dara', 'Nick']

  // function handleClick() {
  //   console.log('This was clicked')
  // }

  // function handleClick2(number) {
  //   console.log('Number: ', number)
  // }

  // let [count, setCount] = useState(0)

  // function handleIncrement() {
  //   setCount(count + 1)
  // }

  // function handleDecrement() {
  //   setCount(count - 1)
  // }

  // const [studentName, setStudentName] = useState('Jane')

  return (
    <div className='box' style={{ textAlign: 'center' }}>
      {/* <h1>{studentName}</h1>
      <button onClick={() => setStudentName('Lisa')}>Update student name</button> */}

      <Count />


      {/* <h1>State</h1>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button> */}

      {/* <h1>Events</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClick2(1)}>Number 1 clicked</button>
      <button onClick={() => handleClick2(2)}>Number 2 clicked</button> */}

      {/* {arr.map((element, index) => (
        <div key={index}>
          <h1>{element}</h1>
        </div>
      ))} */}

      {/* <h1>Students</h1>
      <Student 
        name='Jane' 
        image='https://plus.unsplash.com/premium_photo-1739786996040-32bde1db0610?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D' 
        isPremium={false}
        isMale={false}
      />
      <Student 
        name='Sonny' 
        image='https://plus.unsplash.com/premium_photo-1739786996022-5ed5b56834e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D' 
        isPremium={true}
        isMale={true}
      />
      <Student 
        name='Monita' 
        image='https://plus.unsplash.com/premium_photo-1739786995552-0a2ccfa62ba5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8' 
        isPremium={false}
        isMale={false}
      /> */}

      {/* <hr />
      <h1>Employees</h1>
      <Employee 
        name='Kibbe'
        email='kibbe@gmail.com'
        isPrivate={false}
      />
      <Employee
        name='Dara'
        email='dara@gmail.com'
        isPrivate={true}
      /> */}


      {/* <Student1 />
      <Student2 /> */}

      {/*
        <h1>We are learning React.js</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eum? Aperiam expedita accusantium impedit enim rem perferendis officiis hic deserunt, optio a totam quasi laudantium ea unde, aliquid, magnam omnis?</p>
          <Child1 />
          <Child2 />
      */}
    </div>
  )
}

export default App