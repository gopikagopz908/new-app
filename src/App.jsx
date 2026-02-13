import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [count, setCount] = useState(0);

  const memories = [
    {
      title: "The Day We Met 💫",
      description: "I still remember that moment like it was yesterday.",
    },
    {
      title: "Our First Date 🍕",
      description: "Nervous smiles, endless talks, and my heart choosing you.",
    },
    {
      title: "Our Little Fights 😅",
      description: "Not perfect, but always choosing each other.",
    },
    {
      title: "My Favorite Memory 🥰",
      description: "Every moment feels special when it’s with you.",
    },
    {
      title: "Today ❤️",
      description: "And here we are… still us, still strong.",
    },
  ];

  const FloatingLove = () => (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-50">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-xl sm:text-2xl"
          initial={{
            y: "100vh",
            x: `${Math.random() * 100}vw`,
            opacity: 0,
          }}
          animate={{
            y: -100,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          {i % 2 === 0 ? "❤️" : "🌹"}
        </motion.div>
      ))}
    </div>
  );

  return (
    <>
      <FloatingLove />

      <div className="min-h-[100dvh] bg-gradient-to-br from-pink-100 via-rose-200 to-red-200 flex flex-col items-center justify-center px-4 sm:px-6 py-10">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rose-700 mb-4">
            Hey Love ❤️
          </h1>
          <p className="text-base sm:text-lg text-rose-600 px-2">
            I made something special… just for you
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl w-full space-y-8 sm:space-y-10">
          {memories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg mx-2 sm:mx-0"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-rose-700 mb-2">
                {item.title}
              </h2>
              <p className="text-rose-600 text-base sm:text-lg">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 sm:mt-20 px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-800 mb-4">
            Happy Valentine’s Day ❤️
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-rose-700 max-w-xl mx-auto">
            Every day with you is my favorite day. Thank you for being you,
            for loving me, and for choosing us — always.
          </p>
        </motion.div>

      </div>
    </>
  );
}

export default App;
