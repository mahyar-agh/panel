import { createUseStyles } from "react-jss";

export const styles = createUseStyles({
  headerContainer: {
    width: "100%",
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "2px solid #d3d3d3",
  },
  headerLabel: {
    color: "#797877",
    fontSize: "1.7rem",
  },
  headerInnerContainer: {
    display: "flex",
    alignItems: "center",
  },
  headerButton: {
    outline: "none",
    border: "none",
    borderRadius: 10,
    backgroundColor: "#e5e5e5",
    display: "flex",
    alignItems: "center",
    padding: "7px 20px",
    fontFamily: "Vazir",
    cursor: "pointer",
    marginRight: 15,
    transition: "all 100ms",
    "& i": {
      marginLeft: 5,
      "& svg": {
        display: "block",
      },
    },
    "&:hover": {
      color: "white",
    },
    "&:active": {
      transform: "translateY(-5px)",
    },
  },
});
