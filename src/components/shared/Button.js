const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-2.5 w-100 border rounded-md bg-active text-white xs:text-xs md:text-base text-base"
    >
      {text}
    </button>
  );
};

export default Button;