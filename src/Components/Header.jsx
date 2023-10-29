import { Typography, Box} from "@mui/material";
import useColors from "../Hooks/theme";

function Header({title, subtitle}) {
    const colors = useColors();
    
    return (
        <Box mb="30px">
            <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{mb: "5px"}}>{title}</Typography>
            <Typography variant="h5" color={colors.redAccent[400]}>{subtitle}</Typography>
        </Box>
    )
}

export default Header