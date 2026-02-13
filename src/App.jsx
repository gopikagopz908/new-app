import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { motion } from "framer-motion";


function App() {
  const [count, setCount] = useState(0)

  

  
  const memories = [
    {
      title: "The Day We Met 💫",
      description: "I still remember that moment like it was yesterday."
    },
    {
      title: "Our First Date 🍕",
      description: "Nervous smiles, endless talks, and my heart choosing you."
    },
    {
      title: "Our Little Fights 😅",
      description: "Not perfect, but always choosing each other."
    },
    {
      title: "My Favorite Memory 🥰",
      description: "Every moment feels special when it’s with you."
    },
    {
      title: "Today ❤️",
      description: "And here we are… still us, still strong."
    }
  ];
  
  const FloatingLove = () => (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-50">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          initial={{
            y: "100vh",
            x: Math.random() * window.innerWidth,
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
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-red-200 flex flex-col items-center justify-center p-6">
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
            I made something special… just for you
          </p>
        </motion.div>
  
        {/* Photos Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full mb-20"
        >
          {/* {photos.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`memory-${index}`}
              className="rounded-2xl shadow-xl object-cover h-64 w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            />
          ))} */}
        </motion.div>
  
        {/* Timeline */}
        <div className="max-w-3xl w-full space-y-10">
          {memories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-rose-700 mb-2">
                {item.title}
              </h2>
              <p className="text-rose-600 text-lg">
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
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold text-rose-800 mb-4">
            Happy Valentine’s Day ❤️
          </h2>
          <p className="text-xl text-rose-700 max-w-xl">
            Every day with you is my favorite day. Thank you for being you,
            for loving me, and for choosing us — always.
          </p>
        </motion.div>
      </div>
      </>
    );
  }



export default App
