import classNames from 'classnames';
import styles from './index.module.scss';

const FullViewport = props => {
    const {
        mainClassName,
        pageName, 
        mode = 'light', 
        contentPosition, 
        children
    } = props;
    const className = classNames({
        [styles['full-viewport-layout']]: true,
        [styles[`full-viewport-layout--${mode}`]]: pageName,
        [styles[`full-viewport-layout--${contentPosition}`]]: contentPosition,
        [`${mode}`]: mode,
        ...props.className
    })

    return (
        <div className={className}>
            {/* header here */}
            <main className={mainClassName}>
                {children}
            </main>
            {/* footer here */}
        </div>
    )
}

export default FullViewport;