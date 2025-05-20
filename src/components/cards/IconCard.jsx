export default function IconCard({ bgColor = 'bg-blue-50', icon, alt }) {
    return (
        <div className={`${bgColor} rounded-full relative w-20 h-20 group`}>
            <img
                src={icon}
                alt={alt}
                className="w-20 h-20 p-5 absolute top-0 left-0 group-hover:scale-110 transition-transform duration-300"
            />
        </div>
    );
}
