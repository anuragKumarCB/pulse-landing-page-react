import { SectionHeading } from "./SectionHeading";
import { PrimaryAndSecondaryText } from "./text/PrimaryAndSecondaryText";

export function WhatIsPulse() {
    const primaryText = "Pulse is your complete loan automation platform."
    const secondaryText = "It streamlines the full loan lifecycle — from application and underwriting to servicing and collection — with powerful automation, analytics, and compliance tools."

    return (
        <div className="container w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center py-20 px-4 text-center">
            <SectionHeading title="What is Pulse? " />

            <PrimaryAndSecondaryText
                primaryText={primaryText}
                secondaryText={secondaryText} />
        </div>
    )
}