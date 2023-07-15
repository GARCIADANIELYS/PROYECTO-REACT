const Button = ({ text, id, onClick, icon, color }) => {
    return (
        <button className={color} id={id} onClick={onClick}>
            {text} {icon}
        </button>
    );
};

export default Button;