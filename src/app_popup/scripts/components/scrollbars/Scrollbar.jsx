import React from "react";
import { Scrollbars } from 'react-custom-scrollbars/dist/react-custom-scrollbars.min';

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 4,
        backgroundColor: '#38383D'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = props => (
    <Scrollbars renderThumbVertical={renderThumb} {...props} />
);

export default function Scrollbar(props) {
    return (
            <CustomScrollbars className={props.className} id={props.id} >
                {props.children}
            </CustomScrollbars>
    );
}
