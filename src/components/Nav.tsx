

const Nav = () => {

let gitlink = 'https://github.com/ShinzDev/Breadcalculator_SMEs-'

  return (
    
    <main>
        <nav className="flex text-2xl p-3 justify-around">
          <div>logo</div>

          <div><a target="blank" href={gitlink}>Github</a></div>
        </nav>
    </main>
  )
}

export default Nav