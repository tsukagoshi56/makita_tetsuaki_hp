"use client";

import { useEffect, useRef, useState } from "react";

interface SlotCounterProps {
    value: string | number;
    duration?: number;
}

const characters = "0123456789";

function randomChar() {
    return characters[Math.floor(Math.random() * characters.length)];
}

export default function SlotCounter({ value, duration = 1500 }: SlotCounterProps) {
    const [displayValue, setDisplayValue] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);
    const targetValue = String(value);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isAnimating) {
                        setIsAnimating(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [isAnimating]);

    useEffect(() => {
        if (!isAnimating) return;

        let startTime: number | null = null;
        let frameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            if (progress < duration) {
                // Randomize each character
                const currentChars = targetValue
                    .split("")
                    .map((char) =>
                        /[0-9]/.test(char) ? randomChar() : char
                    )
                    .join("");
                setDisplayValue(currentChars);
                frameId = requestAnimationFrame(animate);
            } else {
                setDisplayValue(targetValue);
            }
        };

        frameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frameId);
    }, [isAnimating, duration, targetValue]);

    return (
        <span ref={elementRef} className="inline-block tabular-nums">
            {displayValue || targetValue.replace(/[0-9]/g, "0")}
        </span>
    );
}
