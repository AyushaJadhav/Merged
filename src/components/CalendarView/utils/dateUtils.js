export const getMonthData = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const lastDate = lastDayOfMonth.getDate();
  
    let days = [];
  
    // Add previous month's days to fill the first row
    const prevMonthLastDate = new Date(year, month, 0).getDate();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDate - i,
        isPrevMonth: true,
        isToday: false,
      });
    }
  
    // Add current month's days
    for (let i = 1; i <= lastDate; i++) {
      const isToday =
        i === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear();
  
      days.push({
        day: i,
        isPrevMonth: false,
        isToday: isToday,
      });
    }
  
    // Fill remaining slots up to 35 (7×5 Grid)
    const remainingSlots = 35 - days.length;
    for (let i = 1; i <= remainingSlots; i++) {
      days.push({
        day: i,
        isNextMonth: true,
        isToday: false,
      });
    }
  
    return days;
  };
  