import { makeStyles } from "@fluentui/react";

export const useDayCellStyles = makeStyles({
  moreButton: {
    backgroundColor: "#e0e0e0",
    color: "#333",
    fontSize: "11px",
    padding: "2px 5px",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0px 1px 2px rgba(0,0,0,0.1)",
    border: "none",
  },
  taskListItem: {
    padding: "8px",
    margin: "5px 0",
    borderRadius: "4px",
    color: "#13280d",
    cursor: "pointer",
  },
  taskDialogContainer: {
    backgroundColor: "#252b30",
    color:"#b7bdc1",
    padding: "16px",
    borderRadius: "4px",
    maxHeight: "300px",
    overflowY: "auto",
    transform: "translateX(130px)", 
  },
  
  taskDialogContent: {
    maxHeight: "300px",
    overflowY: "auto",
    padding: "8px",
    borderRadius: "4px",
  },
  taskDialogFooter: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "10px",
  },
  
});
