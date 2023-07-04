import logo from './logo.svg';
import './App.css';
import Head from './Compoents/Head';
import Body from './Compoents/Body';
import { Provider } from 'react-redux';

import store from './Utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Compoents/MainContainer';
import WatchPage from './Compoents/WatchPage';


 const appRoute = createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
    {
    path:'/',
    element:<MainContainer/>
  },
  {
  path:'watch',
  element:<WatchPage/>
  }
]

 }])
function App() {
  return (
<Provider store={store} >
<div >
     
     <Head/> 
     <RouterProvider router={appRoute} />
     
     
    
   </div>

    </Provider>
  );
}

export default App;
