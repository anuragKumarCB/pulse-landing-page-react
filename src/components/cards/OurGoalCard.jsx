import { motion } from 'framer-motion';
import IconCard from './IconCard';
import { CardPrimaryAndSecondaryText } from '../text/CardPrimaryAndSecondaryText';

export function OurGoalCard({ index, title, imgSrc, large, desc }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`w-full flex flex-col items-start rounded-lg p-2 md:p-4 lg:p-6 bg-blue-50`}>
            <IconCard icon={imgSrc} alt={title} bgColor='bg-white' />
            <CardPrimaryAndSecondaryText primaryText={title} secondaryText={desc} />
        </motion.div>
    );
}