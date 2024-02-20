import "./MonthlyExpense.css";

const MonthlyExpense = (props) => {
  let totalMaximum = 0;

  for (const item of props.chartDatapoints) {
    if (item.value > totalMaximum) {
      totalMaximum = item.value;
    }
  }
  var index = 0
  for (const expense of props.chartDatapoints) {
    props.chartDatapoints[index].value = Math.round((expense.value / totalMaximum) * 150);
    index++;
  }

  return (
    <div className="expense-filter__months">
      {props.chartDatapoints.map((item) => {
        return (
          <div key = {item.label} className = "months-holder">
            <div className="bar-holder">
              <div className="months__bar" style = {{ height: item.value }}></div>
              <div className="months__bar-fill"></div>
            </div>
            <div className="months__name">{item.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MonthlyExpense;
