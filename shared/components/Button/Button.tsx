import { JSX } from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import classNames from "classnames";
import { ChevronRight } from "lucide-react";

export const Button = ({
    children,
    appearance,
    arrow = "none",
    className,
    ...props
}: ButtonProps): JSX.Element => {
    return (
        <button
            className={classNames(styles.button, className, {
                [styles.primary]: appearance === "primary",
                [styles.ghost]: appearance === "ghost",
            })}
            {...props}
        >
            {children}
            {arrow !== "none" && (
                <span
                    className={classNames(styles.arrow, {
                        [styles.down]: arrow === "down",
                    })}
                >
                    <ChevronRight size={16} />
                </span>
            )}
        </button>
    );
};
