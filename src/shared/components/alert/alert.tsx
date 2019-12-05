import React, {FunctionComponent} from "react";


interface IAlert {
    text: string;
}

const Alert: FunctionComponent<IAlert> = ({text, children}) => {
    return (
        <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
        >
            <strong className="font-bold">{text}</strong>
            <div>{children}</div>
        </div>
    );
};


export default Alert;
