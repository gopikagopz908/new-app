


import { useState } from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const memories = [
    {
      title: "The Day We Met 💫",
      description: "I still remember that moment like it was yesterday.",
      image: "/images/pic4.jpeg",
    },
    {
      title: "Our First Date 🍕",
      description: "Nervous smiles, endless talks, and my heart choosing you.",
      image: "/images/pic2.jpeg",
    },
    {
      title: "Our Little Fights 😅",
      description: "Not perfect, but always choosing each other.",
      image: "/images/pic5.jpeg",
    },
    {
      title: "My Favorite Memory 🥰",
      description: "Every moment feels special when it’s with you.",
      image: "/images/pic1.jpeg",
    },
    {
      title: "Today ❤️",
      description: "And here we are… still us, still strong.",
      image: "/images/pic3.jpeg",
    },
  ];

  /* Floating Background Love */
  const FloatingLove = () => (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-50">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-xl"
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

  /* Gift Box Component */
  const GiftBox = ({ image }) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center mt-6">
        {/* Cute Bouncing Gift */}
        <motion.div
          onClick={() => setOpen(!open)}
          className="cursor-pointer text-6xl select-none"
          animate={{
            rotate: open ? 15 : 0,
            scale: open ? 1.1 : 1,
          }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {open ? "🎀":"🎁" }
        </motion.div>

        {/* Sparkles when opened */}
        <AnimatePresence>
          {open && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute text-xl"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: -40 - Math.random() * 40,
                    x: (Math.random() - 0.5) * 60,
                  }}
                  transition={{ duration: 1 }}
                >
                  ✨
                </motion.span>
              ))}

              {/* Portrait Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-6 bg-white p-3 rounded-3xl shadow-2xl"
              >
                <motion.img
                  src={image}
                  alt="memory"
                  className="w-64 h-80 object-cover rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      <FloatingLove />

      <div className="min-h-[100dvh] bg-gradient-to-br from-pink-100 via-rose-200 to-red-200 flex flex-col items-center justify-center px-4 sm:px-6 py-10">
        
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-rose-700 mb-4">
            Hey Love ❤️
          </h1>
          <p className="text-lg text-rose-600">
            I made something magical… just for you ✨
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl w-full space-y-10">
          {memories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-rose-700 mb-2">
                {item.title}
              </h2>
              <p className="text-rose-600 text-lg">
                {item.description}
              </p>

              <GiftBox image={item.image} />
            </motion.div>
          ))}
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-rose-800 mb-4">
            Happy Valentine’s Day Vyshnav ❤️
          </h2>
          <p className="text-lg md:text-xl text-rose-700 max-w-xl mx-auto">
            Every day with you is my favorite chapter of my life.
            Thank you for being my peace, my smile, and my forever.
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default App;

