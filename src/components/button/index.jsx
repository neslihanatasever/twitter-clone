import { createElement } from "react";
import propTypes from "prop-types";
import classNames from "classnames";

export default function Button({size, children}){
    return createElement('button',{
        className: classNames("rounded-full bg-[#1d9bf0] flex items-center font-bold hover:bg-[#1a8cd8] text-white transition-colors duration-300 ease-in-out",
            {
                "p-4 h-9": size === "normal",
                "p-4 h-[52px] text-[17px] w-full justify-center": size === "large",
            }
        ),
        
    }, children);
}

Button.propTypes = {
    size: propTypes.oneOf(["normal", "large"]),
};

Button.defaultProps = { size: "normal" };