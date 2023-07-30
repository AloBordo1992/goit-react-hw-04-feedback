export const Feedbackoption = ({ options, onClickBtn }) => {
  return (
    <>
      <ul>
        {options.map(option => {
          return (
            <li key={option}>
              <button type="button" onClick={() => onClickBtn(option)}>
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
