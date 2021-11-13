import { createUseStyles } from "react-jss";

export const styles = createUseStyles({
  usersContainer: {
    width: "100%",
    height: "73vh",
    border: "2px solid #B2B2B2",
    borderRadius: 15,
    "& table": {
      width: "100%",
      //   height: "100%",
      tableLayout: "fixed",
      fontSize: "0.8rem",
      color: "#334756",
      //   padding: 10,
      "& thead": {
        height: 40,
        "& th": {
          borderBottom: "1px solid #B2B2B2",
        },
      },
      "& tbody": {
        textAlign: "center",
        "& tr": {
          height: 50,
        },
        "& tr:nth-child(odd)": {
          backgroundColor: " #FFFFFF",
        },
        "& td": {
          borderBottom: "2px solid  #B2B2B2",
          "& i": {
            margin: "0 5px",
            cursor: "pointer",
          },
        },
      },
    },
    "& .tbodyContainer": {
      height: "100%",
      // overflowY: "scroll",
    },
  },
});
