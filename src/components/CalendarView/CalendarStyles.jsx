import { makeStyles } from "@fluentui/react";

export const useCalendarStyles = makeStyles({
  calendarWrapper: {
    fontFamily: "'Segoe UI', sans-serif",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  calendarContainer: {
    backgroundColor: "#17181c",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 24px",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  /** ✅ Month Switcher Styles **/
  monthSwitcher: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "6px 12px",
    borderRadius: "6px",
  },

  switcherButton: {
    backgroundColor: "#23262e",
    color: "white",
    border: "none",
    padding: "4px 4px", // Reduced button size
    borderRadius: "4px",
    fontSize: "14px", // Adjusted font size
    cursor: "pointer",
    transition: "background-color 0.2s ease, color 0.2s ease",
    "&:hover": {
      backgroundColor: "#525a69",
      color: "#ffffff",
    },
  },

  switcherLabel: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#a4aec1",
    backgroundColor: "#23262e",
    padding: "6px 12px", // Increased height
    borderRadius: "4px",
    minHeight: "20px", // Ensuring label has a proper height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarGroup: {
    display: "flex",
    alignItems: "center",
  },
  customAvatar: {
    border: "2px solid white",
    marginLeft: "-8px",
    borderRadius: "50%",
    "&:first-child": {
      marginLeft: "0",
    },
  },
  overflowAvatar: {
    backgroundColor: "#313b3f",
    color: "#a4aec1",
    fontSize: "12px",
    fontWeight: "500",
    border: "1px solid #ddd",
    marginLeft: "-6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "32px",
    width: "32px",
    borderRadius: "50%",
  },
  addPersonButton: {
    backgroundColor: "#23262e",
    color: "#a4aec1",
    borderRadius: "50%",
    width: "40px",
    height: "30px",
    marginLeft: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#525a69",
    },
  },

  todayButton: {
    fontSize: "16px",
    backgroundColor: "#23262e",
    color: "#a4aec1",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: "#525a69",
    },
  },

  gridContainer: {
    backgroundColor: "#202329",
    marginLeft: "20px",
    marginRight: "20px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "3px",
    border: "1px solid #313639",
  },
  headerCell: {
    textAlign: "center",
    padding: "12px 0",
    fontSize: "16px",
    fontWeight: "600",
    color: "#9a9fa5",
  },
  dayCell: {
    height: "100px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #313639",
    backgroundColor: "#202329",
  },
  prevMonthDay: {
    color: "#666a70",
    opacity: "0.5",
  },
  todayCircle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    backgroundColor: "rgba(116, 128, 152, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  dayContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },
  dayNumber: {
    position: "absolute",
    top: "6px",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#9a9fa5",
  },
  weekdayHeader: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    textAlign: "center",
    fontWeight: "bold",
    padding: "4px 0",
    borderBottom: "1px solid #5a5d63",
    height: "28px",
    backgroundColor: "#202329",
  },
  weekdayCell: {
    padding: "6px",
    borderRight: "1px solid #5a5d63",
    borderBottom: "1px solid #5a5d63",
    color: "#9a9fa5",
  },
  weekRow: {
    display: 'flex',
    width: '100%',
    position: 'relative'
  },
  taskContainer: {
    position: 'absolute',
    top: '-24px', // Below the day number
    left: '0',
    width: '100%',
    zIndex: 5
  },
  taskBar: {
    margin: '2px 0',
    height: '18px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  
});