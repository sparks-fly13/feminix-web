import { Box, Typography } from "@mui/material";
import useColors from "../Hooks/theme";
import ProgressCircle from "./ProgressCircle";

function Statistics({title, subtitle, progress, icon, increase = undefined, decrease = undefined}) {
    const colors = useColors();

    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    {icon}
                    <Typography variant="h4" fontWeight="bold" sx={{
                        color: colors.primary[100]
                    }}>{title}</Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={progress} />
                </Box>
            </Box>

            <Box display="flex" justifyContent="space-between">
                <Typography variant="h5" sx={{
                        color: colors.greenAccent[400]
                    }}>{subtitle}</Typography>
                <>
                    {increase && <Typography variant="h5" sx={{
                        color: colors.redAccent[400]
                    }}>+{increase}</Typography>}
                    {decrease && <Typography variant="h5" sx={{
                        color: colors.greenAccent[400]
                    }}>-{decrease}</Typography>}
                </>
            </Box>
        </Box>
    )
}

export default Statistics