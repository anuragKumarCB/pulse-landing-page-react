export function CardPrimaryAndSecondaryText({ primaryText, secondaryText }) {
    return (
        <>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {primaryText}
            </h3>
            <p className="text-gray-500 text-lg leading-relaxed">
                {secondaryText}
            </p>
        </>
    )
}