import React from 'react';

function Name(props) {

    const [name]  =React.useState(props.start);

    return (
        <div className="box1">
            {props.firstName}
            {props.lastName}

        </div>
    );
}

export default Name;