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
        borderRadius: "8px",
    }
));


const OfferBox = styled("div")(({ theme }) => (
    {
        color: "#FBFBFB",
        backgroundColor: "#EC5951",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        display: "flex",
        justifyContetn: "center",
        alignItems: "center",
        textAlign: "center",

    }
));


const ProductCounter = styled("div")(({ theme }) => (
    {
        color: "#FBFBFB",
        backgroundColor: theme.palette.themeColor.dark,
        width: "100px",
        borderRadius: "8px",
        textAlign:"center",
        padding:"5px"
    }
));



export {
    HeaderCartPrice,
    VolumePerfumeBox,
    OfferBox,
    ProductCounter
}