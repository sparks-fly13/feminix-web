import {Box} from "@mui/material";
import useColors from "../Hooks/theme";

function ProgressCircle ({progress="0.75", size="40"}) {
    const colors = useColors();
    const angle = progress * 360;

    return (
        <Box sx={{
            background: `radial-gradient(${colors.primary[400]} 55%, transparent 57%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.redAccent[400]} ${angle}deg 360deg)
            ${colors.greenAccent[400]}`,
            borderRadius: "50%",
            width: `${size}px`,
            height: `${size}px`,
        }} />
    )
}

export default ProgressCircle