import "../assets/styles/Spinner.scss";
import "../assets/styles/index.scss";

const Spinner = () => {
  return (
    <div className="center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
