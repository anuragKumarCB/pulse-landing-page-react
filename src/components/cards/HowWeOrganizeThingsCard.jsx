import { motion } from 'framer-motion';

export function HowWeOrganizeThingsCard({ index, title, large, descTitle, desc, desc2Title, desc2, desc3Title, desc3 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`mt-12 text-black rounded-lg overflow-hidden ${large ? 'col-span-1' : ''
                }`}
        >
            <div className="p-6 flex-col">
                <h3 className="text-xl md:text-2xl font-semibold mt-2">
                    {title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                    <span className='text-gray-900 font-bold'>{descTitle}</span>{desc}
                </p>
                {desc2 && <p className="text-sm text-gray-500 mt-2">
                    <span className='text-gray-900 font-bold'>{desc2Title}</span>{desc2}
                </p>}

                {desc3 && <p className="text-sm text-gray-500 mt-2">
                    <span className='text-gray-900 font-bold'>{desc3Title}</span>{desc3}
                </p>}
            </div>
        </motion.div>
    );
}