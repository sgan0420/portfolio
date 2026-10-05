import Link from "@/components/IntentLink";
import { HiArrowLeft } from "react-icons/hi2";

interface BackButtonProps {
  href: string;
  text: string;
  className?: string;
}

export default function BackButton({
  href,
  text,
  className = "",
}: BackButtonProps) {
  return (
    <Link href={href} className={`back-link ${className}`}>
      <HiArrowLeft aria-hidden="true" />
      {text}
    </Link>
  );
}
