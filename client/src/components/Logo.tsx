import { Link } from "react-router";
import { Flame } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  linkTo?: string;
}

const sizeConfig = {
  sm: { icon: "w-5 h-5", text: "text-xl", gap: "gap-2" },
  md: { icon: "w-7 h-7", text: "text-2xl", gap: "gap-2.5" },
  lg: { icon: "w-9 h-9", text: "text-3xl", gap: "gap-3" },
};

export default function Logo({ size = "md", linkTo = "/" }: LogoProps) {
  const { icon, text, gap } = sizeConfig[size];

  const content = (
    <div className={`flex items-center justify-center ${gap}`}>
      <div className="relative">
        <div className="absolute inset-0 rounded-lg bg-primary/20 blur-sm" />
        <div className="relative flex items-center justify-center rounded-lg bg-primary p-1.5">
          <Flame className={`${icon} text-primary-foreground`} />
        </div>
      </div>
      <span
        className={`${text} font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent`}
      >
        app1
      </span>
    </div>
  );

  if (linkTo) {
    return (
      <Link
        to={linkTo}
        className="inline-flex hover:opacity-80 transition-opacity"
      >
        {content}
      </Link>
    );
  }

  return content;
}
