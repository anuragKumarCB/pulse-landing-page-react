export function BannerLabel({ labelText }) {
    return (
        <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-sm font-medium rounded-full shadow">{labelText}</span>
        // <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-sm font-medium rounded-full shadow-md">{labelText}</span>
        // <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-sm font-medium rounded-full shadow-lg">{labelText}</span>
    )
}