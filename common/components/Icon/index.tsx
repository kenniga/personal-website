import iconTypes from './iconTypes';

const Icon = props => {
    const { name } = props;

    const SelectedIcon = iconTypes[name];
    return (
        <SelectedIcon {...props} />
    )
}

export default Icon;