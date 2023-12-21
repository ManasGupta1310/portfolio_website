import { motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SectionContainer({ children, classes, ...props } : any) {
  return (
    <motion.div
      className={`text-xl flex flex-col justify-center items-center ${classes}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default SectionContainer;
