import { requestDemoLink } from "../enum";
import { DemoButton } from "./button/DemoButton";
import { PulseLogo } from "./logo/PulseLogo";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export function Header() {
    const location = useLocation();

    const isOnQuotePage = location.pathname === "/request_a_demo";

    return (
        <header className="bg-white shadow-md py-2">
            <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-6 flex justify-between items-center">
                <Link to="/"><PulseLogo /></Link>
                <nav className="space-x-4">
                    {!isOnQuotePage && (
                        <div className="hidden sm:block">
                            <DemoButton link={requestDemoLink} variant="outline" />
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}
