import React from "react";

const Menus = ({ menus, ulClass, liClass, aClass }) => {
    return (
        <ul className={ulClass}>
            {menus.map(({ name, href }) => (<li key={href} className={liClass}>
                <a href={href} key={"a1" + href} className={aClass}> {name} </a>
            </li>
            ))
            }
        </ul >
    );
};

export default Menus;