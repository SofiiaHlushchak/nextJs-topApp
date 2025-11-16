"use client";
import { Button, Htag, Ptag, Rating, Tag } from "@/shared/components";
import { JSX, useState } from "react";

export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(0);

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <Htag tag="h1">Hello</Htag>
                <Button appearance="primary" arrow="right">
                    Button
                </Button>
                <Button appearance="ghost" arrow="down">
                    Button
                </Button>
                <Ptag size="s">Text</Ptag>
                <Ptag>Text</Ptag>
                <Ptag size="l">Text</Ptag>
                <Tag color="primary">Tag</Tag>
                <Rating rating={rating} isEditable setRating={setRating} />
            </main>
        </div>
    );
}
