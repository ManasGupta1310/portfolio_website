import { motion } from 'framer-motion';

function SectionDivider() {
  return (
    <motion.hr
      className="border-gray-200 border-2 w-7/12 mx-auto my-16"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'tween',
        duration: 0.2,
        delay: 0.2,
      }}
    />
  );
}

export default SectionDivider;
