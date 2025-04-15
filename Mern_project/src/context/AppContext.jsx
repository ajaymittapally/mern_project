import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../shopping_assets/assets";
import toast from "react-hot-toast";
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

export const AppContext = createContext();

export const AppContextProvider= (({children})=>{
    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();
    const [user,setUser] = useState(null);
    const[isSeller,setIsSeller]= useState(false);
    const[showUserLogin,setShowUserLogin] = useState(false)
    const[products,setProducts] = useState([])
    const [cartItems,setCartItems] = useState({})
    const [searchQuery,setSearchQuery] = useState({})
   
   //Fetch seller status

   const fetchSeller = async ()=>{
    try {
        const {data} = await axios.get('/api/seller/is-auth')
        if(data.success){
            setIsSeller(true)
        }else{
            setIsSeller(false)
        }
    } catch (error) {
        setIsSeller(false)
    }
   }
   
   
   
    //Fetch all Products
    async function fetchProducts(){
        setProducts(dummyProducts)
    }

    //Add product to card
    const addToCart=(itemId)=>{
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            cartData[itemId] +=1
        }else{
            cartData[itemId] =1;
        }
        setCartItems(cartData);
        toast.success("Added to cart")

    }
    //Update cart
    const updateCartItems= (itemId,quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId]= quantity;
        setCartItems(cartData)
        toast.success("cart Updated")
    }

    //Remove items form cart
    const removeCartItem = (itemId)=>{
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            cartData[itemId] -=1
            if(cartData[itemId]===0){
                delete cartData[itemId]
            }
        }
        toast.success("Removed from cart")
        setCartItems(cartData)
    }

    function getCartCount(){
        let totalCount =0;
        for(const item in cartItems){
            totalCount += cartItems[item];
        }
        return totalCount
    }

    function getCartAmount(){
        let totalAmount = 0
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items);
            if(cartItems[items]>0){
                totalAmount += itemInfo.offerPrice * cartItems[items]
            }
        }
        return Math.floor(totalAmount*100)/100;
    }
    useEffect(()=>{
        fetchSeller();
        fetchProducts();
    },[])
    const value ={axios,getCartCount,getCartAmount,searchQuery,setSearchQuery,cartItems,removeCartItem,updateCartItems,addToCart,currency,products,showUserLogin,setShowUserLogin,navigate,user,setUser,isSeller,setIsSeller}
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
        )
    
})

export const useAppContext =()=>{
    return useContext(AppContext)
}