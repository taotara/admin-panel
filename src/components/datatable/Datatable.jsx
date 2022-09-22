import React from 'react'
import './datatable.css'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../databasesource';

const Datatable = () => {

    const actionColumn = [
        { field: "action", headerName: "Action", Width: 200, renderCell:() => {
            return(
                <div className="cellAction">
                    <div className="veiwButton">View</div>
                    <div className="deleteButton">Delete</div>
                </div>
            )
    }}];
  return (
    <div className='datatable'>
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