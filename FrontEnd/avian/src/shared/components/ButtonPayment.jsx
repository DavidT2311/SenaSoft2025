const ButtonPayment = ({ text, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
  >
    {text}
  </button>
);

export default ButtonPayment;