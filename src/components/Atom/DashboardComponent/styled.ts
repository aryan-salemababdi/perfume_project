import { styled } from "@mui/material";

const HeaderCard = styled("div")(({ theme }) => (
    {
        color: "#fff",
        background: "linear-gradient(267.81deg, #333366 26.56%, rgba(51, 51, 102, 0.75) 100%)",
        textAlign: "center",
        padding: "15px 0px",
    }
));

const CustomerClub = styled("div")(({ theme }) => (
    {
        color: theme.palette.themeColor.main,
        backgroundColor: theme.palette.themeColor.gold,
        border: `4px solid ${theme.palette.themeColor.Primarhy}`,
        borderRadius: "100px",
        width: "90px",
        textAlign: "center",
    }
));
const SuccesAlertBox = styled("div")(({ theme }) => (
    {
        color: theme.palette.themeColor.succes,
        backgroundColor: "#F0F0F0",
        border: `2px solid ${theme.palette.themeColor.succes}`,
        borderRadius: "12px",

    }
));
const RedAlertBox = styled("div")(({ theme }) => (
    {
        color: theme.palette.themeColor.main,
        backgroundColor: theme.palette.themeColor.gold,
        border: `4px solid ${theme.palette.themeColor.Primarhy}`,
        borderRadius: "100px",
        width: "90px",
        textAlign: "center",
    }
));
const ExpiredBox = styled("div")(({ theme }) => (
    {
        color: theme.palette.themeColor.main,
        backgroundColor: theme.palette.themeColor.gold,
        border: `4px solid ${theme.palette.themeColor.Primarhy}`,
        borderRadius: "100px",
        width: "90px",
        textAlign: "center",
    }
));


export {
    HeaderCard,
    CustomerClub,
    SuccesAlertBox,
    RedAlertBox,
    ExpiredBox
};