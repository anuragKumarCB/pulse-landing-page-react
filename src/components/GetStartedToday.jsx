import { requestDemoLink } from "../enum";
import { DemoButton } from "./button/DemoButton";
import { SectionHeading } from "./SectionHeading";
import { PrimaryAndSecondaryText } from "./text/PrimaryAndSecondaryText";

export function GetStartedToday() {
    const primaryText = "Experience the future of loan management and origination.";

    return (
        <section className="py-20 bg-blue-50">
            <div className="container max-w-[1200px] w-full mx-auto">

                <div className="flex flex-col justify-center items-center text-center px-2 md:px-0">
                    <SectionHeading title="Get Started Today" />
                    <PrimaryAndSecondaryText primaryText={primaryText} />
                    <DemoButton link={requestDemoLink} />
                </div>
            </div>
        </section>
    )
}