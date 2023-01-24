import React from 'react';
import { Link } from 'react-router-dom';
function StudentsPage() {
    return (
        <div id="nav-head">
            <div id="head">
                <h1>Students Details</h1>
                <button>Add new student</button>
            </div>
            <div id="table">
                <table border={1}cellSpacing={0}>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>26</td>
                        <td>MERN</td>
                        <td>October</td>
                        <td><Link to="">Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Doe</td>
                        <td>24</td>
                        <td>MERN</td>
                        <td>November</td>
                        <td><Link to="">Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Biden</td>
                        <td>26</td>
                        <td>MERN</td>
                        <td>September</td>
                        <td><Link to="">Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Barar</td>
                        <td>25</td>
                        <td>MERN</td>
                        <td>November</td>
                        <td><Link to="">Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Christ</td>
                        <td>23</td>
                        <td>MERN</td>
                        <td>October</td>
                        <td><Link to="">Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Elent</td>
                        <td>24</td>
                        <td>MERN</td>
                        <td>September</td>
                        <td><Link to="">Edit</Link></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default StudentsPage;