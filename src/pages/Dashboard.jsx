import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../components/context';
import axios from 'axios';

function Dashboard() {
    const { user } = useContext(UserContext);
    const [data, setData] = useState([])
    if (!user) {
        return <div>Loading...</div>;
    }

    // useEffect(() => {
    //     const fetchStudents = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:4000/userAPI');
    //             setData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching student data:', error);
    //         }
    //     };
    //     fetchStudents();
    // }, []);






    return (

        // <>
        // {data.map((item)=>{
        //     return  <h2>{item.firstName}</h2>
        // })}
        // </>
        <div className="container mt-4 text-center">
            <h2 >Dashboard</h2>
            <div className="card p-4">
                <h3>Welcome, {user.firstName} {user.lastName}</h3>
                <p>Email: {user.email}</p>
            </div>
        </div>
    );
}

export default Dashboard;
