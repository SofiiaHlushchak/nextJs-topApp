import { JSX } from "react";
import { PtagProps } from "./Ptag.props";
import styles from "./Ptag.module.css";
import classNames from "classnames";

export const Ptag = ({
    size = "m",
    children,
    className,
    ...props
}: PtagProps): JSX.Element => {
    return (
        <p
            className={classNames(styles.p, className, {
                [styles.s]: size === "s",
                [styles.m]: size === "m",
                [styles.l]: size === "l",
            })}
            {...props}
        >
            {children}
        </p>
    );
};
