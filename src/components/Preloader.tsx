import { Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
            key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <Activity className="h-16 w-16 text-secondary" />
              <motion.div 
                className="absolute inset-0 rounded-full border-4 border-secondary/20"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-primary tracking-tight">Santa Casa</h2>
            <p className="text-secondary font-medium mt-2 tracking-widest uppercase text-sm">Excelência em Saúde</p>
            
            <div className="w-64 h-1 mt-8 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-secondary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
