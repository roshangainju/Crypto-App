import React, {useState, useEffect} from 'react'
import axios from "axios"
import  { Container, HStack } from "@chakra-ui/react"
import Loader from "./Loader"
import Details from './Details'
import ErrorComponent from "./ErrorComponent"
import { server } from '../index'

const Exchange = () => {

  const [exchanges, setExchanges]=useState([])
  const [loading, setLoading]=useState(true)
  const [error, setError]=useState(false)

  useEffect(() => {

    const fetchExchanges=async()=>{
      try {
        // const{data}= await axios.get("https://api.coincap.io/v2/exchanges")
        const{data}= await axios.get(`${server}/exchanges`)
      console.log(data)
      console.log(data.data)
      // setExchanges(data.data)
      setExchanges(data)
      setLoading(false)
    } 
        
       catch (error) {
        setError(true)
        setLoading(false)
        
      }}
    fetchExchanges()  
  }, [])

  if (error)
    return <ErrorComponent message={"error Occured"} ></ErrorComponent>
  return(
    <Container  maxW={"container.xl"}>
      {loading?<Loader/>:<>

      <HStack  wrap={"wrap"}>
        {exchanges.map((i)=>(
          <Details key={i.id} name={i.name} img={i.image}  rank={i.trust_score_rank} url={i.url}>
            
          </Details>
          // <ExchangeCard nam={i.name} img={i.img} rank={i.rank} url={i.exchangeUrl}  />
        ))}

      </HStack>
      
      {/* <HStack  wrap={"wrap"}>
        {exchanges.map((i)=>(
          <Details key={i.exchangeId} nam={i.name} exchange={i.exchangeUrl} rank={i.rank} url={i.exchangeUrl}>
            
          </Details>
          // <ExchangeCard nam={i.name} img={i.img} rank={i.rank} url={i.exchangeUrl}  />
        ))}

      </HStack> */}
      </>}
    </Container>

  )

}
// const ExchangeCard=({nam, img,rank,url})=(

//   <a href={url} target={"blank"} ></a>
// )



export default Exchange