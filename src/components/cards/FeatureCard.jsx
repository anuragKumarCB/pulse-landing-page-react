import { motion } from 'framer-motion';

export function FeatureCard({ index, title, desc, imgSrc, large }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`mt-12 text-black rounded-lg overflow-hidden ${large ? 'col-span-1' : ''
                }`}
        >
            <img
                src={imgSrc}
                alt={title}
                className={` rounded-lg object-cover rounded-t-lg w-full ${large ? 'h-96' : 'h-96'
                    }`}
            />
            <div className="p-6 flex-col">
                <h3 className="text-xl md:text-3xl font-semibold mt-2">
                    {title}
                </h3>
                <p className="text-base text-gray-800 mt-2">
                    {desc}
                </p>

            </div>
        </motion.div>
    );
}