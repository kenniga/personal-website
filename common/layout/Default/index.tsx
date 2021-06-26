import classNames from "classnames"
import styles from './index.module.scss';

const Default = props => {
    const {pageName, mode = 'light', children} = props;
    const className = classNames({
        [styles[`layout--${mode}`]]: pageName,
        [`${mode}`]: mode
    })

    return (
        <div className={className}>
            {/* header here */}
            <main>
                {children}
            </main>
            {/* footer here */}
        </div>
    )
}

export default Default;