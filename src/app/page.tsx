import Hero from "./component/Hero"
import Sales from "./component/Sales"

import Best from "./component/Best"
import Category from "./component/Category"
import Categories from "./component/Categories"
import Arrival from "./component/Arrival"



function Home(){
  return(
    <div>
      <Hero />
      <Sales />
      <Category />
      <Categories/>
      <Best />
      <Arrival />
      
      
    
    </div>
  )
}
export default Home