import { motion } from 'framer-motion';

export function PrimarySecondaryTextWithIconCard({
    bgColor = 'bg-blue-50',
    height = 'h-auto',
    iconBgColor = 'bg-white',
    iconPadding = 'p-5',
    index,
    iconSrc,
    imgAlt,
    primaryText,
    secondaryText,
    shadow = false,
    hoverEffect = false
}) {
    const baseClasses = `${bgColor} ${height} w-full flex flex-col items-start justify-center rounded-lg sm:p-6 p-8`;
    const shadowClasses = shadow ? 'shadow-lg' : '';
    const hoverClasses = hoverEffect ? 'hover:shadow-xl hover:scale-[1.02] transition-transform duration-300' : '';

    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.35 }}
            className={`${baseClasses} ${shadowClasses} ${hoverClasses}`}
        >
            <div className="flex flex-col lg:flex-row lg:items-center mb-4 gap-6">
                <div className={`${iconBgColor} rounded-full relative w-20 h-20 group shrink-0 aspect-square`}>
                    <img
                        src={iconSrc}
                        alt={imgAlt}
                        className={`w-20 h-20 ${iconPadding} absolute top-0 left-0 object-contain`}
                    />
                </div>
                <h3 className="text-2xl font-semibold text-gray-950 mb-2">
                    {primaryText}
                </h3>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed">
                {secondaryText}
            </p>
        </motion.div>
    );
}
