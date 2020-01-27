import React from 'react';

function Post(props) {

    const [name]  =React.useState(props.start);

    const [color] =React.useState(props.start);

    const [age, setAge] =React.useState(props.start);

    return (
        <div className="box2" onClick={()=> setAge(age+1)}>
            Name: {props.name}
            I am {props.age} {age} years old
            the coolest color is {props.color}
        </div>

    );
}
export default Post;