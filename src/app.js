import { hot } from 'react-hot-loader/root'
import React from 'react'

import { Test } from './test'

import styles from './app.css'

const App = () => {
  return (
    <div className={styles.container}>
      <div> C K Bedwell</div>
      <Test />
    </div>
  )
}

export default hot(App)
