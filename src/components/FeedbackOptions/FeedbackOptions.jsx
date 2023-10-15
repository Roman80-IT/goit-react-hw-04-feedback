const { Wrapper, Btn } = require('./FeedbackOptions.styled');

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <Btn key={option} name={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Btn>
      ))}
    </Wrapper>
  );
};
