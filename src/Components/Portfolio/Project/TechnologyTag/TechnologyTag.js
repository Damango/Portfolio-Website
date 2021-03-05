import React from 'react';
import "./TechnologyTag.css"
const TechnologyTag = (props) => {



    let icon;
    let style;

    if (props.text === 'HTML') {
        icon = <i class="fab fa-html5"></i>
        style = { backgroundColor: "#f39c12" }
    }
    else if (props.text === "CSS3") {
        icon = <i class="fab fa-css3-alt"></i>
        style = { backgroundColor: "#4834d4" }
    }
    else if (props.text === "Javascript") {
        icon = <i class="fab fa-js"></i>
        style = { backgroundColor: "#f1c40f" }
    }
    else if (props.text === 'React') {
        icon = <i class="fab fa-react"></i>
        style = { backgroundColor: "#3498db" }

    }

    else if (props.text === 'Python') {
        icon = <i class="fab fa-python"></i>
        style = { backgroundColor: "#d35400" }
    }

    else if (props.text === 'Django') {
        icon = ""
        style = { backgroundColor: "#27ae60" }
    }

    else if (props.text === "Firebase") {
        icon = <i class="fas fa-fire"></i>
        style = { backgroundColor: "#e67e22" }
    }


    return (<div className="technology-tag" style={style}>

        {icon}{props.text}

    </div>);
}

export default TechnologyTag;