import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const cols = [
    { field: "name", headerName: "name", width: 200 },
    { field: "email", headerName: "email", width: 200 },
    { field: "phone", headerName: "phone", width: 200 },
    { field: "company", headerName: "company", width: 200 },
    { field: "website", headerName: "website", width: 200 },
];

const rows = [
    { id: 1, studentName: "Radu", studentScore: 90, studentAge: 31 },
    { id: 2, studentName: "Erik", studentScore: 91, studentAge: 29 },
    { id: 3, studentName: "Heidi", studentScore: 92, studentAge: 25 }
]
const DataGridMUI = () => {
    const [users, setUsers] = useState([])

    const fetchData = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data);
            console.log(data);
        } catch (error) { }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const rowData = users?.map(user => {
        return {
            name: user?.name,
            email: user?.email,
            phone: user?.phone,
            id: user?.id,
            website: user?.website,
            phone: user?.phone,
            company: user?.company?.name,
        };
    });

    console.log(rowData)

    return (
        <div style={{ width: "100%" }}>
            <DataGrid 
                rows={rowData} 
                columns={cols} 
                pageSize={5}
                autoHeight={true}
                aaria-label='student table'
                />
        </div>
    )
}

export default DataGridMUI
