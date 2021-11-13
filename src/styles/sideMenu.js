import { createUseStyles } from "react-jss";

export const styles = createUseStyles({
  logo: {
    width: "100%",
    height: 300,
    borderRadius: 30,
    color: "white",
    fontSize: "1.5rem",
    textAlign: "center",
    padding: "50px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    background:
      "linear-gradient(209.22deg, #FD3D39 8.18%, rgba(253, 61, 57, 0.7) 92.37%)",
    "& h2": {
      fontSize: "3rem",
    },
    "& p": {
      fontSize: "1rem",
    },
  },
  item: {
    width: "100%",
    height: 70,
    padding: "5px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: "1.1rem",
    cursor: "pointer",
    color: "#B2B2B2",
    transition: "all 200ms",
    textDecoration: "none",
    "& .icon": {
      marginLeft: 13,
      marginRight: 40,
      "& svg": {
        display: "block",
      },
    },

    "&:hover": {
      color: "gray",
    },
  },
  activeItem: {
    color: "black",
  },
});
