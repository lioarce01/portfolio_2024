"use client";

import React from "react";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  download?: boolean;
}

const SocialLink = ({
  href,
  icon,
  label,
  download = false,
}: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    download={download}
    className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110"
    aria-label={label}
  >
    {icon}
  </a>
);

export default SocialLink;
