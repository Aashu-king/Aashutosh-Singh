"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have the cn utility from shadcn

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Check if we're on the client side
    const isBrowser = () => typeof window !== "undefined";

    // Show button when page is scrolled down
    const handleScroll = () => {
        if (!isBrowser()) return;

        // Show button when page is scrolled beyond 300px
        const scrollY = window.scrollY;
        if (scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up scroll event listener
    useEffect(() => {
        if (!isBrowser()) return;

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        if (!isBrowser()) return;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <Button
            variant="outline"
            size="icon"
            className={cn(
                "fixed bottom-8 right-8 rounded-full shadow-lg bg-primary text-primary-foreground z-50 transition-all duration-300",
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
                "hover:bg-white hover:text-black"
            )}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <ChevronUp className="h-5 w-5" />
        </Button>

    );
};

export default ScrollToTopButton;