import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const foods = ["🍔", "🍣", "🍕", "🌮", "🍜"];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);

  useEffect(() => {
    if (index < foods.length) {
      const timer = setTimeout(() => setIndex(index + 1), 800);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowQuestion(true), 1000);
    }
  }, [index]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-100">
      {!showQuestion ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 100, opacity: 0, rotate: -15 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ x: -200, opacity: 0, rotate: -20 }}
            transition={{ duration: 0.6 }}
            className="text-7xl"
          >
            {foods[index]}
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">What’s 4 Dinner?</h1>
          <div className="flex gap-6 justify-center">
            <button className="px-6 py-3 bg-green-500 text-white rounded-2xl shadow-md hover:bg-green-600">
              I have something in mind
            </button>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600">
              Choose 4 me
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
