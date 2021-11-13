import { createUseStyles } from "react-jss";

export const styles = createUseStyles({
  searchContainer: {
    width: 500,
    height: 50,
    border: "1px solid #b2b2b2",
    borderRadius: 15,
    padding: 7,
    margin: "10px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& .innerContainer": {
      width: "70%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      fontSize: "1rem",
      "& input": {
        width: "100%",
        height: "100%",
        outline: "none",
        border: "none",
        background: "none",
        marginRight: 5,
        fontFamily: "Vazir",
      },
      "& svg": {},
    },
  },
});
