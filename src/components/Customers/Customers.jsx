import React from 'react'
import { Link } from "react-router-dom";

export const Customers = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Customers</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <th scope="row"></th>
                
                <td>
                  <Link class="btn btn-primary mr-2">
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2">
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger" >
                    Delete
                  </Link>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Customers;


