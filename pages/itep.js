// pages/itep/js
import React from "react"
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import ITepMain from "../src/components/ITepMain"

export default function ITep() {
  return (
    <div className="bg-white">
      <Navbar />
      <ITepMain />
      <Footer />
    </div>
  )
}

