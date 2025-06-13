import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed top-5 left-5 z-50">
        <button onClick={() => setOpen(!open)} className="text-2xl p-2 bg-black/60 rounded-full hover:bg-black/80">
          <FaBars />
        </button>
      </div>
      <nav className={`fixed top-0 left-0 h-full w-64 bg-black/90 shadow-2xl transition-transform z-40 ${open ? 'translate-x-0' : '-translate-x-80'}`}>
        <div className="mt-20 flex flex-col space-y-8 text-xl font-bold px-8">
          <Link href="/" onClick={() => setOpen(false)}>About</Link>
          <Link href="/diagnose" onClick={() => setOpen(false)}>Diagnosis</Link>
        </div>
      </nav>
      {open && <div className="fixed inset-0 z-30 bg-black/50" onClick={() => setOpen(false)} />}
    </>
  )
}
