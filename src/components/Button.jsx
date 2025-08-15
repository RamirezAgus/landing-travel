const Button = ({ label, onClick, targetId }) => {
  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (onClick) onClick();
  };
  return (
    <button
      onClick={handleClick}
      className="hover:text-blue-500 transition font-medium"
    >
      {label}
    </button>
  );
};

export default Button;
