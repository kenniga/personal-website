import classNames from "classnames";

const Button = props => {
    const { children, theme, ...resProps }  = props;
    const className = classNames({
        'btn': true,
        [`btn--${theme}`]: theme,
        ...props.className 
    })

    return (
        <button className={className} {...resProps} >
            {children}
        </button>
    )
}

export default Button;