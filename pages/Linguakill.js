import React from "react"
import Navbar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import LinguakillMain from "../src/components/LinguakillMain"

function Linguakill() {
  return (
    <div className="bg-white">
      <Navbar />
      <LinguakillMain />
      <Footer />
    </div>
  )
}

export default Linguakill
