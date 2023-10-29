import { Box } from "@mui/material";
import Header from "../Components/Header";
import Map from "../Components/Map";
import useColors from "../Hooks/theme";

function Geography() {
    const colors = useColors();

    return (
        <Box m="20px">
            <Header title="MAP FEATURE" subtitle="Map feature to represent the ML data virtually" />
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
                <Map />
            </Box>
        </Box>
    )
}

export default Geography