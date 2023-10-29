import { Box, Button, IconButton, List, ListItem, Typography } from "@mui/material";
import useColors from "../Hooks/theme";
import Header from "../Components/Header";
import BarGraph from "../Components/BarGraph";
import PieChart from "../Components/PieChart";
import LineGraph from "../Components/LineGraph";
import Statistics from "../Components/Statistics";
import { DownloadOutlined, ArrowUpwardTwoTone, ReportOutlined } from "@mui/icons-material";
import { mockData } from "../data/mockData";
import Map from "../Components/Map";

function Dashboard() {
    const colors = useColors();

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to the dashboard" />
            
                <Box>
                    <Button sx={{
                        backgroundColor: colors.blueAccent[800],
                        color: colors.primary[100],
                        fontSize: "13px",
                        fontWeight: "bold",
                        padding: "10px 20px"
                    }}>
                        <DownloadOutlined sx={{mr: "10px"}} />
                        Download Reports
                    </Button>
                </Box>
            </Box>

            {/* Using the grid layout for the components */}
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
                
                {/* 1st ROW */}
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <Statistics title="12%" subtitle="Variation in reports" progress="0.75" increase="+15%" icon={<ArrowUpwardTwoTone sx={{color: colors.greenAccent[600], fontSize: "26px"}} />} />
                </Box>

                <Box gridColumn="span 9" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <Box width="100%" margin="0 30px">
                        <Box display="flex" justifyContent="space-between">
                            <Box>
                                <Typography variant="h4" fontWeight="bold" sx={{
                                    color: colors.primary[100],
                                    pt: "20px",
                                    textDecoration: "underline"
                                }}>Reports Received</Typography>
                            </Box>
                            <Box>
                                    <ReportOutlined sx={{color: colors.greenAccent[600], fontSize: "46px", pt: "20px"}} />
                            </Box>
                        </Box>
                        <List sx={{color: colors.redAccent[300], mb: "5px"}}>
                            <ListItem>This is the latest report and here is the news regarding it. Yes.</ListItem>
                            <ListItem>This is the second latest report and here is the news regarding it. Yes.</ListItem>
                            <ListItem>This is the third latest report and here is the news regarding it. Yes.</ListItem>
                        </List>
                    </Box>
                </Box>

                {/* 2nd ROW */}
                <Box gridColumn="span 8" gridRow="span 2" bgcolor={colors.primary[400]}>
                    <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
                        <Box>
                            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>Complaints/Issues throughout the months</Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlined sx={{color: colors.greenAccent[600], fontSize: "26px"}} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" ml>
                        <LineGraph isDashboard={true} />
                    </Box>
            </Box>

                    {/* Database */}
                    <Box gridColumn="span 4" gridRow="span 2" bgcolor={colors.primary[400]} overflow="auto">
                        <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[600]}`} color={colors.grey[100]} p="15px">
                            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                                Database
                            </Typography>
                        </Box>
                        {mockData.map((item, i) => {
                            return (
                                <Box key={`${item.id}-${i}`} display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`}>
                                    <Box>
                                        <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                                            {item.id}
                                        </Typography>
                                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                                            {item.name}
                                        </Typography>
                                    </Box>
                                    <Box color={colors.grey[100]}>{item.year}</Box>
                                    <Box bgcolor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                                        {item.degree}
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box>

                    {/* 3rd ROW */}
                    <Box gridColumn="span 4" gridRow="span 2" bgcolor={colors.primary[400]}>
                        <Typography variant="h5" fontWeight="600" sx={{p: "30px 30px 0 30px"}}>
                            Incidents to area ratio
                        </Typography>
                        <Box height="250px" mt="20px">
                            <PieChart isDashboard={true} />
                        </Box>
                    </Box>

                    <Box gridColumn="span 4" gridRow="span 2" bgcolor={colors.primary[400]}>
                        <Typography variant="h5" fontWeight="600" sx={{p: "30px 30px 0 30px"}}>
                            Area to count ratio
                        </Typography>
                        <Box height="250px" mt="-20px">
                            <BarGraph isDashboard={true} />
                        </Box>
                    </Box>

                    <Box gridColumn="span 4" gridRow="span 2" bgcolor={colors.primary[400]} p="30px">
                        <Typography variant="h5" fontWeight="600" sx={{mb: "15px"}}>
                            Geolocated Incidents
                        </Typography>
                        <Box height="200px">
                            <Map isDashboard={true} />
                        </Box>
                    </Box>

             </Box>
        </Box>
    );
}

export default Dashboard