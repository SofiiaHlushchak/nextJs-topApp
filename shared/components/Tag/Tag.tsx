import { JSX } from "react";
import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import classNames from "classnames";

export const Tag = ({
    size = "s",
    children,
    color = "ghost",
    href,
    className,
    ...props
}: TagProps): JSX.Element => {
    return (
        <div
            className={classNames(styles.tag, className, {
                [styles.s]: size === "s",
                [styles.m]: size === "m",
                [styles.red]: color === "red",
                [styles.green]: color === "green",
                [styles.gray]: color === "gray",
                [styles.primary]: color === "primary",
                [styles.ghost]: color === "ghost",
            })}
            {...props}
        >
            {href ? <a> {children}</a> : <> {children}</>}
        </div>
    );
};
