import React from "react";

function About() {
  return (
    <div className="flex bg-gray-800 pb-10 justify-center">
      <a
        href="https://mehdi-zandian.vercel.app/"
        target="_blank"
        className="text-white"
      >
        Developer <span className="text-yellow-400">Mahdi Zandian</span> 💻
      </a>
    </div>
  );
}

export default React.memo(About);
