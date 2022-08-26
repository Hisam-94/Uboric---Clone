import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../Redux/ProductsReducer/action";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { getCartData } from "../Redux/CartReducer/action";
import axios from "axios";


const breakpoints = {
  sm: "column",
  md:"column",
  lg: "row"

}

const breakpoints_width={
  sm: "50%",
  lg: "100%"
}


const text_width={
  sm: "10%",
  lg: "8%"
}

const ProductDetails = () => {
  const { id } = useParams();
  const navigate= useNavigate()
  const  {products}  = useSelector((state) => state.ProductReducer);
  const {cartData} = useSelector((state)=>state.CartReducer)
  console.log(cartData)
  const dispatch = useDispatch();
  const [selectSize,setSize]= useState('')
  const [qty,setQty]= useState(1)
  

  const singleProd = products.filter((el) => el.id == id);
    

  useEffect(() => {
    dispatch(getData())
   dispatch(getCartData())
    
  }, []);
  console.log(cartData.length+1)
  const addToCart=async ()=>{
    
    const newData={
      id:cartData.length+1,
      title:singleProd[0].title,
      price:singleProd[0].Price,
      size:selectSize,
      quantity:qty
    }
     
    console.log(newData)
    
    
    await axios.post(`http://localhost:8080/cart`,newData)
    .then(()=>dispatch(getCartData()))
    .then(()=>navigate(`/cart`))

    setQty(1)
    setSize('')
  }

  return (
    <Flex    justifyContent="space-evenly"   border={"1px solid red"}
     margin={"2rem 0 5rem 0"}
     direction={breakpoints}
     gap="1rem"
    >
      <Flex width={"40%"}  border={"1px solid black"}
      direction="column"
      padding={"1rem"}
      gap="1rem"
       > 
       <Box bg={"black"} color="white" width={text_width} position={"relative"} top="1rem" left="1rem"><Text>Sale</Text></Box>         
        <Image src={singleProd[0]?.images}   //border="1px solid red"
        margin="auto" width="60%"
        cursor={"pointer"}
        />

        <Box display={"flex"}>
           
        <Image src={singleProd[0]?.images}   //border="1px solid red"
        margin="auto" width="15%"
        />

        <Image src={singleProd[0]?.images}   //border="1px solid red"
        margin="auto" width="15%"
        />

        <Image src={singleProd[0]?.images}   //border="1px solid red"
        margin="auto" width="15%"
        />
          
        </Box>
        
      </Flex>

  



      <Flex
        border={"1px solid black"}
        direction="column"
        justifyContent="space-evenly"
       
        
        width="50%"
        h={"80vh"}
      >
        <Stack>
          <Box border={"1px solid red"} width="50%" margin={"auto"}>
        <Text as={"b"} fontSize="1.5rem">{singleProd[0]?.title}</Text>

          </Box>
          <Box>
          <Text as={"b"}>{`Brand: ${singleProd[0]?.brand}`}</Text>
          </Box>
        
        <Box>
        <Text as={"b"} color="red">{`Price: ${singleProd[0]?.Price}`}</Text>
        </Box>
        
        <Box>✓Available Size : {singleProd[0]?.size?.map((el,i)=>el+" ")}</Box>

        </Stack>
        
        <Stack width="50%" ml="1rem"  
          // border="1px solid red"
        position={"relative"} left="9rem"
        >
          <Select color="gray" placeholder="Select size"  onChange={(e)=>setSize(e.target.value)}>
            {singleProd[0]?.size?.map((el, i) => (
              <option key={i} value={el}>
                {el}
              </option>
            ))}
          </Select>
        </Stack>

        <Flex         // border="1px solid red"
         justifyContent={"space-around"}>
       
       <Box display={"flex"}
        gap="1rem"
        border="2px solid black"
        padding="1rem"
       >
        <Button borderRadius="50%" bg={"#7d7d7d"} disabled={qty==1} onClick={()=>setQty(qty-1)}>-</Button>
        <Flex>{qty}</Flex>
        <Button bg={"#7d7d7d"}  borderRadius="50%" disabled={qty==10} onClick={()=>setQty(qty+1)} >+</Button>
       </Box>

        <Box>
        <Button bg="#1f1f1f" color="white" onClick={addToCart}>add to cart</Button>
        </Box>
          
        </Flex>
      </Flex>


    </Flex>
  );
};

export default ProductDetails;
