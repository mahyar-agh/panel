import { createUseStyles } from "react-jss";

export const styles = createUseStyles({
  itemContainer: {
    position: "relative",
    padding: "30px 30px",
    boxShadow: "0px 4px 24px rgba(34, 34, 34, 0.16)",
    width: "fit-content",
    borderRadius: 15,
    margin: "30px 20px",
    "& .item": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.4rem",
      "& *": {
        margin: "0 10px",
      },
      "& svg": {
        fontSize: "2rem",
      },
    },
    "& input": {
      outline: "none",
      width: 300,
      height: 35,
      border: "1px solid gray",
      borderRadius: 15,
      margin: "15px auto",
      display: "block",
      fontFamily: "Vazir",
      padding: 5,
    },
    "& .buttonContainer": {
      display: "flex",
      justifyContent: "center",
    },
    "& .edit": {
      position: "absolute",
      left: 20,
      top: 10,
      color: "blue",
      cursor: "pointer",
      fontSize: "0.7rem",
      display: "flex",
      alignItems: "center",
      "& svg": {
        // display: "inline-block",
        marginLeft: 5,
      },
    },
  },
});
