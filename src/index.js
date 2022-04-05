import { QuestionProvider } from 'context/QuestionContext'
import React from 'react'
import  ReactDOM  from 'react-dom'
import { App } from './App'
import './index.css'

ReactDOM.render(
<QuestionProvider>

<App/>
</QuestionProvider>


,document.getElementById('root'))