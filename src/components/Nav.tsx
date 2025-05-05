import { FaBreadSlice } from "react-icons/fa6";

const Nav = () => {

let gitlink = 'https://github.com/ShinzDev/Breadcalculator_SMEs-'

  return (
    
    <main>
        <nav className="flex bg-brown-500 text-8md p-3 justify-around">
          <div><FaBreadSlice /></div>
          <div><a href="">How to use</a></div>
          <div><a target="blank" href={gitlink}>Github</a></div>
        </nav>
    </main>
  )
}

export default Nav