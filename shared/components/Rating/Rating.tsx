"use client";

import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import { useState, forwardRef, ForwardedRef, KeyboardEvent } from "react";
import { Star } from "lucide-react";

export const Rating = forwardRef<HTMLDivElement, RatingProps>(
    (
        { isEditable = false, error, rating = 0, setRating, ...props },
        ref: ForwardedRef<HTMLDivElement>
    ) => {
        const [hoverRating, setHoverRating] = useState(0);

        const handleKey = (e: KeyboardEvent<HTMLSpanElement>, i: number) => {
            if (!isEditable || !setRating) return;

            if (e.code === "ArrowRight" || e.code === "ArrowUp") {
                e.preventDefault();
                setRating(Math.min(rating + 1, 5));
            }
            if (e.code === "ArrowLeft" || e.code === "ArrowDown") {
                e.preventDefault();
                setRating(Math.max(rating - 1, 1));
            }

            if (e.code === "Enter" || e.code === "Space") {
                e.preventDefault();
                setRating(i + 1);
            }
        };

        return (
            <div
                ref={ref}
                {...props}
                className={cn(styles.ratingWrapper, { [styles.error]: error })}
            >
                {Array.from({ length: 5 }, (_, i) => {
                    const filled = i < (hoverRating || rating);
                    return (
                        <span
                            key={i}
                            className={cn(styles.star, {
                                [styles.filled]: filled,
                                [styles.editable]: isEditable,
                            })}
                            onMouseEnter={() =>
                                isEditable && setHoverRating(i + 1)
                            }
                            onMouseLeave={() => isEditable && setHoverRating(0)}
                            onClick={() => isEditable && setRating?.(i + 1)}
                            tabIndex={isEditable ? 0 : -1}
                            onKeyDown={(e) => handleKey(e, i)}
                            role={isEditable ? "slider" : undefined}
                            aria-label={`Рейтинг ${i + 1}`}
                            aria-valuenow={rating}
                            aria-valuemax={5}
                            aria-valuemin={1}
                        >
                            <Star color={filled ? "var(--primary)" : "gray"} />
                        </span>
                    );
                })}
                {error && (
                    <span role="alert" className={styles.errorMessage}>
                        {error.message}
                    </span>
                )}
            </div>
        );
    }
);

Rating.displayName = "Rating";
