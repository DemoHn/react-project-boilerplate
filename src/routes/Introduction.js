import React from 'react'

const Label = props => (
  <div style={{ fontSize: 14 }}>{props.children}</div>
)

const Introduction = () => (
  <div>
    <h1>React-Project-Boilerplate</h1>
    <div className="container">
      <Label>Last Updated: 2018-05-28</Label>
    </div>
    <p style={{ fontSize: 16 }}>
      Hello World!
    </p>
  </div>
)

export default Introduction
