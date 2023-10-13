import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {router}  from './routes/index'
import DefaultComponent from './components/DefaultComponent/defaultComponent'

export function App() {

  return (
    <div>
      
      <Router>
        <Routes>
          {router.map((router) =>{
            const Page=router.page
            const Layout= router.isShowHeader ? DefaultComponent : Fragment
            return(
               <Route path={router.path} element={
                  <Layout>
                    <Page/>
                  </Layout>
              }/>
               
            ) 
          })}
        </Routes>
      </Router>
    </div>
  )
}
export default App