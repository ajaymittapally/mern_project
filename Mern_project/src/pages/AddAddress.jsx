import { assets } from "../shopping_assets/assets"
import { useState } from "react"
function InputFeild({type,placeholder,name,handleChange,address}){
    return(
    <input 
        className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition"
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
        value={address[name]}
        required
     />
  )
}



export const AddAddress = () => {
    const [address,setAddress] = useState({
        firstName:'',
        lastName:'',
        email:'',
        street:'',
        city:'',
        state:'',
        zipCode:'',
        country:'',
        phone:''
    })

    function handleChange(e){
        const {name,value} = e.target;
        setAddress((prevAddress)=>({
            ...prevAddress,
            [name]:value
        }))
    
    }
    async function onSubmitHandler(e){
        e.preventDefault();
    }
  return (
    <div className="mt-16 pb-16">
        <p className="text-2xl md:text-3xl text-gray-500">Add Shipping <span className="font-semibold text-primary">Address</span></p>
        <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
            <div className="flex-1 max-w-md">
                <form onSubmit={onSubmitHandler}>
                    <div className="grid grid-cols-2 gap-4 mb-2">
                        <InputFeild  handleChange={handleChange} value={address[name] || ''} address={address} name='firstName' type='text' placeholder='First Name'/>
                        <InputFeild  handleChange={handleChange} value={address[name] || ''} address={address} name='lastName' type='text' placeholder='Last Name'/>
                    </div >
                    <div className="mt-2 space-y-2">
                    <InputFeild  handleChange={handleChange} value={address[name] || ''} address={address} name='email' type='email' placeholder='Email Address'/>
                    <InputFeild  handleChange={handleChange}  value={address[name] || ''} address={address} name='street' type='text' placeholder='street'/>

                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-2">
                        <InputFeild  handleChange={handleChange} value={address[name] || ''} address={address} name='city' type='text' placeholder='city'/>
                        <InputFeild  handleChange={handleChange} value={address[name] || ''} address={address} name='state' type='text' placeholder='state'/>
                        
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-2 mb-2">
                        <InputFeild  handleChange={handleChange} value={address[name] || ''} address={address} name='zipCode' type='number' placeholder='zipcode'/>
                        <InputFeild  handleChange={handleChange} value={address[name] || ''} address={address} name='country' type='number' placeholder='Country'/>
                        
                    </div>
                    <InputFeild  handleChange={handleChange} value={address[name] || ''} address={address} name='phone' type='number' placeholder='Phone Number'/>

                    <button className="w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase">
                        Save Address
                    </button>
                
                </form>
            </div>
            <img className="md:mr-16 mb-16 md:mt-0" src={assets.add_address_iamge} alt="add-address" />
        </div>    
    </div>
  )
}
