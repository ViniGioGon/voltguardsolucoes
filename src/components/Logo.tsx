/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-7 w-7" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Symmetrical sharp shield with custom path */}
      <path
        d="M12 2L4.5 5.5v5.5C4.5 16.5 8 20.5 12 22c4-1.5 7.5-5.5 7.5-11V5.5L12 2z"
        fill="#0f172a" /* slate-900 background */
        stroke="#0f172a"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* High-voltage electrical lightning symbol inside the shield, beautifully oriented */}
      <path
        d="M13.5 6L8.5 13H12.25L11 18L16 11H12.25L13.5 6z"
        fill="#fed721" /* Voltguard bright yellow */
      />
    </svg>
  );
}
