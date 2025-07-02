import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLay from './components/pro-Squid/RootLay';
import About from './components/pro-Squid/About';
import Trailer from './components/pro-Squid/Trailer';
import Actors from './components/pro-Squid/Actors';
import Games from './components/pro-Squid/Games';
import Homie from './components/pro-Squid/Homie';
import Regno from './components/pro-Squid/Regno';
function App(){
    const router = createBrowserRouter([
        {
            path:"",
            element:<RootLay/>,
            children : [
                {
                path:"",
                element: <Homie/>,
            },
                {
                path:"about",
                element: <About/>,
            },
            {
                path:"trailer",
                element: <Trailer/>,
            },
            {
                path:"actors",
                element: <Actors/>,
            },
            {
                path:"games",
                element:<Games/>
            }
            ,
            {
                path:"reg",
                element:<Regno/>
            }
            ],
        }
    ])

    return(
   <RouterProvider router={router}/>
   
    )
}
export default App;