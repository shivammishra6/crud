import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
      <Link to={"/"}>home</Link><br /><br />
      <Link to={"/create"}>create</Link><br /><br />
    </div>
  )
}

export default navbar