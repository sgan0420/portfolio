"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

interface BackButtonProps {
  href: string;
  text: string;
  className?: string;
}

const BackButton = ({ href, text, className = "" }: BackButtonProps) => {
  return (
    <Link href={href}>
      <motion.button
        whileHover={{ x: -5 }}
        className={`flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer ${className}`}
      >
        <HiArrowLeft className="w-5 h-5" />
        {text}
      </motion.button>
    </Link>
  );
};

export default BackButton;
