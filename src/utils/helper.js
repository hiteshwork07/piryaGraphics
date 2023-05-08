export const getFormatedData = (dateInfo) =>{
    const dateStr = dateInfo;

    const date = new Date(dateStr);
  
    const options = { year: "numeric", month: "short", day: "numeric" };
  
   return date.toLocaleDateString("en-US", options);
}