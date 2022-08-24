import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import {
  Box,
  Flex,
  Input,
  Button,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/Cart/CartItem";

  
const Cart = () => {

  const data = {
    title:"dklasjdkajsdklajskdjas",
    price: "895.00",
    size: "M",
    colour: "mixed",
    src : "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
  }
 
  const navigate = useNavigate()
  const [coupon,setCoupon] = useState("")

  const handleCoupon = ()=>{
    if(!coupon)
    {
      alert("Please Enter Coupon Code first")
    }
    if(coupon !== "masai30")
    {
      alert("Coupon is not valid")
    }
    if(coupon === "masai30")
    {
      alert("congratulations 30% discount applied on your orders")
    }
  }
  
  const handleBack = ()=>{
    navigate("/shop")
  }

  const handleCheckout = ()=>{
    navigate("/checkout")
  }
  // const breakPoint = {
  //   // sm:"1fr",
  //   md:"3fr 2fr",
  //   lg:"3fr 2fr",
  // }
  return (
    <Box>
      <Heading>Cart</Heading>    
      <Box>
        <Box display={"flex"}  gridTemplateColumns={"3fr 2fr"} gap={"3rem"} mt="2rem" position="relative">
          <Box width={"60%"}>
            <Box>
              <CartItem {...data}/>
              <CartItem {...data}/>
              <CartItem {...data}/>
              <CartItem {...data}/>
              <CartItem {...data}/>
            </Box>
            <Box padding={"2rem"}>
              <Heading size={"sm"} textAlign="start" mb={"1rem"}>
                Coupon code:
              </Heading>
              <Flex gap="1rem" width={"50%"}>
                <Input
                  size="lg"
                  placeholder="Enter coupon code"
                  borderRadius={"none"}
                  borderColor="black"
                  value={coupon}
                  onChange={(e)=>setCoupon(e.target.value)}
                />
                <Button
                  bgColor="black"
                  color={"white"}
                  size="lg"
                  borderRadius={"none"}
                  _hover="none"
                  onClick={handleCoupon}
                >
                  Apply
                </Button>
              </Flex>
              <Button
                display={"flex"}
                alignContent="start"
                bgColor="black"
                color={"white"}
                size="lg"
                borderRadius={"none"}
                _hover="none"
              >
                Share cart
              </Button>
            </Box>
          </Box>
            <Box width={"35%"} position={"fixed"} top={"11.1rem"} right={"2rem"}>
            <Box padding="2rem" bgColor={"#f5f5f5"}>
              <Flex
                justifyContent={"space-between"}
                borderBottom="1px solid grey"
                pb={"1rem"}
                >
                <Text>Subtotal</Text>
                <Text>₹Amount</Text>
              </Flex>
              <Flex
                justifyContent={"space-between"}
                borderBottom="1px solid grey"
                pb={"1.5rem"}
                pt={"1.5rem"}
                >
                <Heading size={"md"}>Total</Heading>
                <Heading size={"md"}>₹Amount</Heading>
              </Flex>
              <Flex>
                <Text pb={"1rem"} pt={"1.5rem"} fontSize={"sm"}>
                  Or 3 interest free payments of <Text as={"b"}>₹1,948.34</Text>{" "}
                  with
                </Text>
                <Image
                  src="https://www.uboric.com/wp-content/plugins/simpl-pay-in-3-for-woocommerce/public/images/brand.svg"
                  width={"70px"}
                  pl={"0.5rem"}
                  />
              </Flex>
            </Box>
            <Button
              bgColor="black"
              color={"white"}
              size="lg"
              width={"100%"}
              borderRadius={"none"}
              _hover="none"
              mt={"1.5rem"}
              onClick={handleCheckout}
              >
              Proceed to checkout
            </Button>
            <Flex alignItems={"center"} mt={"0.5rem"}>
              <BiArrowBack />
              <Button variant="ghost" _hover="none" display={"flex"} onClick={handleBack}>
                Continue Shopping
              </Button>
            </Flex>
          {/* </Box> */}
            </Box>
        </Box>
      </Box>      
    </Box>
  );
};

export default Cart;