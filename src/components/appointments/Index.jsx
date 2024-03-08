import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'
import Header from './header/index'

const AppointmentList = ({ token , setToken}) => {
  const [appointments, setAppointments] = useState([""]);
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAppointments(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Appointments error:', error);
      }
    };

    fetchAppointments();
  }, [token]);

  const handleLogout = () => {
    setToken('');
  };

  return (
    <>
      <div className="header">
      <div className="logo">
      <h1><span>c</span><span className='c-to-o'>c</span>ript</h1>
      </div>

      <div className="logout">
        <button onClick={handleLogout}><i className="bi bi-box-arrow-right my-bi"></i></button>
      </div>
    </div>

    <div className='table'>
    <table>
        <tr>
            <th><i className="bi bi-arrow-clockwise"></i></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
        </tr>
        <tbody>
          {
            appointments.map((user , index)=>{
              return <tr key={index}>
                <td>{user.id}</td>
                <td>{user.category}</td>
                <td>{user.price}</td>
                <td>{user.category}</td>
                <td>{user.price}</td>
                <td>{user.category}</td>
                <td>{user.id}</td>
                <td>{user.price}</td>

              </tr>
              
            })
          }
        </tbody>

        {/* <tr>
            <td>8:00pm</td>
            <td><span>hh</span></td>
            <td>  </td>
            <td>  </td>
            <td>  </td>
            <td>  </td>
            <td>  </td>
            <td>  </td>
        </tr>
        <tr>
            <td>9:00pm</td>
            <td>19</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
        </tr>
        <tr>
            <td>10:00pm</td>
            <td>  </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>  </td>
        </tr>
        <tr>
            <td>10:00pm</td>
            <td>  </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>  </td>
        </tr>
        <tr>
            <td>10:00pm</td>
            <td>  </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>  </td>
        </tr>
        <tr>
            <td>10:00pm</td>
            <td>  </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>  </td>
        </tr>
        <tr>
            <td>10:00pm</td>
            <td>  </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>  </td>
        </tr> */}
    </table>
    </div>
    </>
    
  );
};

export default AppointmentList;
