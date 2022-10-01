import React from 'react'
import './datatable.css'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../databasesource';
import { Link } from 'react-router-dom';

const Datatable = () => {

    const actionColumn = [
        { field: "action", headerName: "Action", Width: 200, renderCell:() => {
            return(
                <div className="cellAction">
                    <Link to="/users/test" style={{ textDecoration: "none" }}>
                      <div className="veiwButton">View</div>
                    </Link>
                    
                    <div className="deleteButton">Delete</div>
                </div>
            )
    }}];
  return (
    <div className='datatable'>
        <div className="datatableTitle">
          Add New User
          <Link to="/users/new"  className='link'>
            Add New
          </Link>
        </div>
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable