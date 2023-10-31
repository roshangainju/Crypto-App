import React, {useState, useEffect} from 'react'
import axios from "axios"
import  { Container, HStack, Button, Radio, RadioGroup } from "@chakra-ui/react"
import Loader from "./Loader"
import CoinsCard from './CoinsCard'
import ErrorComponent from "./ErrorComponent"
import {server} from "../index"

const Coins = () => {

  const [coins, setCoins]=useState([])
  const [loading, setLoading]=useState(true)
  const [error, setError]=useState(false)
  const [page, setPage]=useState(1)
  const [currency, setCurrency]=useState("inr")

const currencySymbol= currency==="inr"?"₹":currency==="eur"?"€":"$"

const btns=new Array(132).fill(1)

const changePage=(page)=>{
  setPage(page);
  setLoading(true)
}

  useEffect(() => {

    const fetchCoins=async()=>{
      try {
        const{data}= await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
      // console.log(data)
      setCoins(data)
   
      // setCoins(data.data)
      setLoading(false)
    } 
        
       catch (error) {
        setError(true)
        setLoading(false)
        
      }}
    fetchCoins()  
  }, [currency,page])

  if (error)
    return <ErrorComponent message={"error Occured"} ></ErrorComponent>
  return(
    <Container  maxW={"container.xl"}>
      {loading?<Loader/>:<>
      

      <RadioGroup value={currency} onChange={setCurrency}>
          <HStack spacing={4}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"eur"}>EUR</Radio>
            <Radio value={"USD"}>USD</Radio>
          </HStack>

      </RadioGroup>
      
      <HStack  wrap={"wrap"} justifyContent={"space-evenly"}>
        {coins.map((i)=>(
          <CoinsCard key={i.id} id={i.id}name={i.name} img={i.image} price={i.current_price} symbol={i.symbol} currencySymbol={currencySymbol}>
            
          </CoinsCard>
          // <ExchangeCard nam={i.name} img={i.img} rank={i.rank} url={i.exchangeUrl}  />
        ))}

      </HStack>

      <HStack w={"full"} overflow={"auto"} p={"8"} >
      {btns.map((i,index)=>(
          <Button key={index}  bgColor={"blackAplpha.900"} color={"white"} onClick={()=>(changePage(2))}>
            {index+1}
          </Button>
      )) }
      </HStack>
      </>}
    </Container>

  )

}



export default Coins