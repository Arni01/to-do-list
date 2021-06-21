function BoilingVerdict({ celsius }) {
  let messege = '';
  celsius >= 100
    ? (messege = <p>Вода закипит.</p>)
    : (messege = <p>Вода не закипит.</p>);
  return messege;
}

export default BoilingVerdict;
