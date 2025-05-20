export function PrimaryAndSecondaryText({ primaryText, secondaryText }) {
    return (
        <div className="w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight text-gray-950">
                {primaryText}
            </h1>
            {secondaryText && (
                <p className="text-base sm:text-lg mb-4 max-w-2xl mx-auto text-center text-gray-600">
                    {secondaryText}
                </p>
            )}
        </div>
    );
}
