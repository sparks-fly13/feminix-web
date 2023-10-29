import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import useColors from "../Hooks/theme";
import {mockData} from '../data/mockData';
import Header from "../Components/Header";

function Database() {
    const colors = useColors();

    const values = [
        { field: 'id', headerName: 'Student ID' },
        { field: 'name', headerName: 'Name', flex: 1, cellClassName: "name-column--cell" },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'phone', headerName: 'Phone Number', flex: 1},
        { field: 'branch', headerName: 'Branch', flex: 1 },
        { field: 'year', headerName: 'Year'},
        { field: 'degree', headerName: 'Degree' },
        { field: 'address', headerName: 'Address', flex: 1 }
    ]

    return (
        <Box m="20px">
            <Header title="DATABASE" subtitle="View and manage the database of students" />
            <Box m="40px 0 0 0" height="71vh" width="79vw" sx={{
                '&.MuiDataGrid-root': {
                    border: "none"
                },
                '& .name-column--cell': {
                    color: colors.greenAccent[200]
                },
                '& .MuiDataGrid-columnHeaders': {
                    fontWeight: "bold",
                    backgroundColor: colors.greenAccent[700],
                    borderBottom: "none"
                },
                '& .MuiDataGrid-row': {
                    border: `1px solid ${colors.redAccent[100]}`
                },
                '& .MuiDataGrid-row.Mui-selected': {
                    backgroundColor: colors.redAccent[800]
                },
                '& .MuiDataGrid-row.Mui-selected:hover': {
                    backgroundColor: colors.redAccent[800]
                },
                '& .MuiDataGrid-footerContainer': {
                    border: "none",
                    backgroundColor: colors.greenAccent[700]
                },
                '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                    color: `${colors.primary[100]} !important`,
                    border: "none"
                }
            }}>
                <DataGrid rows={mockData} columns={values} slots={{toolbar: GridToolbar}} />
            </Box>
        </Box>
    )
}

export default Database