import React from "react";

import EditList from './EditList';

function FormDataList({ list, deleteHandle, editHandle }) {
  return (
    <>
      <div>
        <h2>Data List</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Task Name</th>
              <th>Start Date</th>
              <th>Category</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.category}</td>
                  <td>{item.status}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => 
                        {editHandle(
                          item.name,
                          item.date,
                          item.category,
                          item.status
                          )
                      }}
                    >
                      Edit
                    </button>
                    {/* <!-- Modal --> */}

                    <EditList></EditList>
                    <button
                      type="button"
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteHandle(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FormDataList;
