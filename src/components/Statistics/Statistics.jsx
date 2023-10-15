import { Wrapper } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Wrapper>
      {/* <h2>Statistics</h2> */}
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total feedback: {total}</li>
      <li>Positive feedback: {positivePercentage.toFixed(2)}%</li>
    </Wrapper>
  );
};
