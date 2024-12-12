import { motion } from "motion/react";
function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen text-center">
        <motion.button
          className="bg-black px-3 py-2 rounded-md"
          animate={{
            backgroundColor: "#f00",
            color: "#0f0 ",
            scale: 2,
            y: 50,
            rotate: 360 * 5,
          }}
        >
          Hello World
        </motion.button>
      </div>
    </>
  );
}

export default App;
