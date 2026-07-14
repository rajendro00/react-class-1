import Clients from "../components/clients";
import Unseen from "../components/unseen";
import Hero from "../components/hero";

export default function Home(){
  return(
    <>
      <Hero/>
      <Clients/>
      <Unseen/>
    </>
  )
}