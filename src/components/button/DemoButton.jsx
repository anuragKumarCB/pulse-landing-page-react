import { Link } from "react-router-dom";

export function DemoButton({ link, variant = 'default', buttonTitle = "Request a Demo" }) {
    const baseClasses =
        'inline-flex items-center justify-center py-2.5 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] cursor-pointer';

    const variantClasses =
        variant === 'outline'
            ? 'border border-[#04afd1] text-[#04afd1] hover:bg-[#04afd1] hover:text-white'
            : 'bg-[#04afd1] text-white';

    return (
        <div className="flex gap-4 items-center justify-center shrink-0">
            <Link
                to={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseClasses} ${variantClasses}`}
            >
                {buttonTitle}
            </Link>
        </div>
    );
}
