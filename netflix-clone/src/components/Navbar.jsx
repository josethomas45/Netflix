import { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : "top"} animate-fade-in-down`}>
            {/* Left: Logo + nav links */}
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                <span className="netflix-logo">NETFLIX</span>
                <div
                    style={{
                        display: "flex",
                        gap: "1.25rem",
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.75)",
                    }}
                    className="hidden md:flex"
                >
                    {["Home", "TV Shows", "Movies", "New & Popular", "My List"].map((item) => (
                        <span
                            key={item}
                            style={{
                                cursor: "pointer",
                                transition: "color 0.2s",
                                fontWeight: item === "Home" ? "600" : "400",
                                color: item === "Home" ? "#fff" : undefined,
                            }}
                            onMouseEnter={(e) => (e.target.style.color = "#fff")}
                            onMouseLeave={(e) => {
                                if (item !== "Home") e.target.style.color = "rgba(255,255,255,0.75)";
                            }}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Right: Search + notifications + avatar */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                {/* Search icon */}
                <svg
                    style={{ cursor: "pointer", opacity: 0.8, transition: "opacity 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>

                {/* Notifications bell */}
                <svg
                    style={{ cursor: "pointer", opacity: 0.8, transition: "opacity 0.2s" }}
                    className="hidden md:block"
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9" />
                </svg>

                {/* Avatar */}
                <div
                    style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "6px",
                        background: "linear-gradient(135deg, #e50914, #b00610)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.9rem",
                        fontWeight: "700",
                        cursor: "pointer",
                        transition: "transform 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                    U
                </div>
            </div>
        </nav>
    );
};

export default Navbar;