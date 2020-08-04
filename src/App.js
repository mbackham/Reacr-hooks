import React, { useEffect } from 'react';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom'
function Index() {
  useEffect(()=>{
    console.log('userEffect=>This is Index')
    return()=>{
      console.log('Index 走了')
    }
  },[])//解除绑定
  return (
    <h2>no!1</h2>
  )
}
function List() {
  useEffect(()=>{
    console.log('userEffect=>This is List')
  })
  return (<h2>ListPage</h2>)
}
function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link Link to='/'>首页
          </Link>
          </li>
          <li>
            <Link Link to='/list/'>列表
          </Link>
          </li>
        </ul>
        <Route path='/' exact component={Index}></Route>
        <Route path='/list/' exact component={List}></Route>

      </Router>

    </div>
  );
}

export default App;
