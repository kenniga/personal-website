import classNames from "classnames"
import Button from "../Button"
import Icon from "../Icon"

const IconButton = props => {
    const { name, shape, sizes: { width, height }, ...resProps} = props;
    const className = classNames({
        'btn__icon': true,
        [`btn--${shape}`]: shape,
        ...props.className
    })

    return <Button className={className} {...resProps}>
        <Icon name={name} width={width} height={height} />
    </Button>
}

export default IconButton;