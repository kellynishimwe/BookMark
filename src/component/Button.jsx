// import PropTypes from "prop-types";
// const Button = ({text,bgColor,type, onClick }) => {
//   return (
//     <button  text ={text} className={`${bgColor} text-white rounded-md px-6 py-2`}>onClick={onClick}</button>
//     {type}

//   )
// };

// export default Button;

// Button.propTypes={
//   text:PropTypes.string,
//   bgColor:PropTypes.string,
//   type:PropTypes.string.isRequired,
//   onClick:PropTypes.func,
// }

import PropTypes from "prop-types";
const Button = ({text,bgColor,type, onClick }) => {

  return (
    <button onClick={onClick}  type="submit" className={`${bgColor} text-white rounded-md  px-6 py-2`}>
      {text}
    </button>
  );
};

export default Button;


Button.propTypes={
  text:PropTypes.string,
  bgColor:PropTypes.string,
  type:PropTypes.string.isRequired,
  onClick:PropTypes.func,
}