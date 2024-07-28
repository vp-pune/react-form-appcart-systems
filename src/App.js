import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './components/context';
import { router } from './router/router';

function App() {

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const responce = await fetch("http://localhost:5000/userAPI")
    //             const data = await responce.json();
    //             console.log(data)
    //         }
    //         catch (err) {
    //             console.log(err, 'err')
    //         }
    //     }
    //     fetchData()
    // },[])
    return (
        <>
            <UserProvider>
                <RouterProvider router={router} />
            </UserProvider>
        </>
    );
}

export default App;
