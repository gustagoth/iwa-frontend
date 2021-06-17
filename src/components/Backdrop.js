import "./Backdrop.css";

const Backdrop = ({show, click}) => {
  return show && <div className="backdrop" onClick={click}></div>; //el && es para verificar que show sea true
};

export default Backdrop;
