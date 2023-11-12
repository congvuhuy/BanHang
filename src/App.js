import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {router}  from './routes/index'
import DefaultComponent from './components/DefaultComponent/defaultComponent'


export function App() {

  return (
    <div>
      <Router>
        <Routes>
          {router.map((r,index) =>{
            const Page=r.page;
            console.log(Page);
            const Layout= r.isShowHeader ? DefaultComponent : Fragment
            return(
               <Route key={index} path={r.path} element={
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