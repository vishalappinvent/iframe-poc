"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [capturedColour,setColour]=useState('')
  useEffect(()=>{
    window.addEventListener("message", (event)=>{
      const data=JSON.parse(event.data)
      console.log('event from iframe',data);
      setColour(data?.backgroundColor)
     });
  },[])
  const frame = useRef < HTMLIFrameElement>(null);
  const changeColor=()=>{
    const hex =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
    if (frame.current && frame.current.contentWindow) {
      frame.current.contentWindow.postMessage(
        { color: hex },
        "http://localhost:3001"
      );
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <iframe ref={frame} src="http://localhost:3001"></iframe>
      <button onClick={changeColor}>Change Color</button>
      <>Captured colour is {capturedColour}</>
    </main>
  );
}
