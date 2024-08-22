"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const frame=useRef(null);
  const changeColor=()=>{
    const hex =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
    frame.current.contentWindow.postMessage(
      { color: hex },
      "https://iframe-theme.vercel.app/"
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <iframe ref={frame} src="https://iframe-theme.vercel.app"></iframe>
      <button onClick={changeColor}>Change Color</button>
    </main>
  );
}
