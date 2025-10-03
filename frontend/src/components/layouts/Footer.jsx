import React, { useEffect, useState } from "react";

const funFacts = [
  "Did you know? Bubble sort has a best case of O(n) but usually O(n²)!",
  "Fun fact: Quicksort is quick… until you hit the worst case O(n²).",
  "Constant time O(1) is like instant noodles for computers 🍜",
  "Big-O is not about speed, it’s about growth 📈",
  "Recursion: when your function has trust issues with itself 🔁",
  "Some say programmers count from 0 because we love arrays too much.",
  "Dynamic programming: trading memory for fewer headaches… sometimes 🤯",
];

export default function Footer() {
  const [fact, setFact] = useState(funFacts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
      setFact(randomFact);
    }, 5000); // changes every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full py-4 bg-gray-800 border-t border-gray-700 text-center">
      <p className="text-sm text-gray-400 mb-1">
        ⚡ Made with curiosity, caffeine & too many console.logs() — by KD ⚡
      </p>
      <p className="text-xs text-gray-500 italic">{fact}</p>
    </footer>
  );
}
