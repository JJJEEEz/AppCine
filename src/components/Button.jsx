import './Button.css';

function Button({
  text,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
}) {
  const classes = `button button--${variant} ${className}`.trim();

  return (
    <button className={classes} onClick={onClick} type={type} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;