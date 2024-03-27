import { styled } from "@mui/material";

const HeaderCartPrice = styled("div")(({ theme }) => (
    {
        color: "#fff",
        backgroundColor: theme.palette.themeColor.main,
        textAlign: "center",
        padding: "15px 0px",
    }
));

const VolumePerfumeBox = styled("div")(({ theme }) => (
    {
        color: theme.palette.themeColor.main,
        backgroundColor: theme.palette.themeColor.gold,
        border: `1.5px solid ${theme.palette.themeColor.Primarhy}`,
        borderRadius:"8px",
    }
));



export {
    HeaderCartPrice,
    VolumePerfumeBox,
}