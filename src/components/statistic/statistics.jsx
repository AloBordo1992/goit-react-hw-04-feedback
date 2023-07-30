export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  feedbackPercentage,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {feedbackPercentage}%</p>
    </div>
  );
};
