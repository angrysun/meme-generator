import { useEffect } from "react";

export default function WindowTracker() {
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("Window resized");
    })
  }, [])

  return (
    <h1>Window width: {window.innerWidth}</h1>
  )
}
