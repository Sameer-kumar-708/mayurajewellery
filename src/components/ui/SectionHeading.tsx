import React from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  italicTitle?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  label,
  title,
  italicTitle,
  subtitle,
  align = "center",
  className = "",
  dark = false,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`max-w-3xl ${isCentered ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {label && (
        <div
          className={`inline-flex items-center gap-2 mb-3 ${
            isCentered ? "justify-center" : "justify-start"
          }`}
        >
          <span className="w-5 h-[1px] bg-luxury-gold" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-luxury-gold">
            {label}
          </span>
          <span className="w-5 h-[1px] bg-luxury-gold" />
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.2] ${
          dark ? "text-white" : "text-luxury-charcoal"
        }`}
      >
        {title}{" "}
        {italicTitle && (
          <span className="italic font-light text-luxury-gold font-serif">
            {italicTitle}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed font-light ${
            dark ? "text-white/70" : "text-luxury-muted"
          } max-w-2xl ${isCentered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative hairline */}
      <div
        className={`mt-5 flex items-center gap-2 ${
          isCentered ? "justify-center" : "justify-start"
        }`}
      >
        <span
          className={`h-[1px] w-12 ${
            dark ? "bg-luxury-gold/40" : "bg-luxury-border"
          }`}
        />
        <span className="w-1.5 h-1.5 rotate-45 bg-luxury-gold inline-block" />
        <span
          className={`h-[1px] w-12 ${
            dark ? "bg-luxury-gold/40" : "bg-luxury-border"
          }`}
        />
      </div>
    </div>
  );
}

