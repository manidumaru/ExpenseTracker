
import './Button.css';

function Button (props) {
    const className = 'button ' + props.className;
    return (
        <div className={className}>{props.children}</div>
    );
}

export default Button;