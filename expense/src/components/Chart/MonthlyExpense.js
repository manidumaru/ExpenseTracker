import "./MonthlyExpense.css";

const MonthlyExpense = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="expense-filter__months">
      {months.map((item) => {
        return (
          <div key = {item} className="months-holder">
            <div className="months__bar"></div>
            <div className="months__name">{item}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MonthlyExpense;
