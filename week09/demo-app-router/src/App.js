import {BrowserRouter, Route, Routes, Outlet, useNavigate, NavLink, useParams} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}/>
      <Route path='/'>
        <Route index element={<h1>Home</h1>}/>
        <Route path='about' element={<h2>About page</h2>}/>
      </Route>
      <Route path='help'>
        <Route index element={<h2>Help page</h2>} />
        <Route path='contents' element={<h2>Content list of helps</h2>} />
        <Route path='*' element={<h2>Invalid topic</h2>}/>
        <Route path='topic/:topicName' element={<HelpByTopic />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

function HelpByTopic(){
  const params = useParams();
  return <>
    <h2>Help by topic</h2>
    <p>This is the topic... {params.topicName}</p>
  </>
}

function Layout(props){
  const navigate = useNavigate();
  return <>
    <h1>Website title</h1>
    <hr />
    <ul>
      <li><NavLink to='/about' className={(isActive) => (isActive ? 'activeButton' : '')}> About</NavLink></li>
      <li><NavLink to='/help'> Help </NavLink></li>
    </ul>
    <button onClick={() => {navigate('/about')}}> About</button>
    <hr />
    <Outlet />
  </>
}

export default App;
