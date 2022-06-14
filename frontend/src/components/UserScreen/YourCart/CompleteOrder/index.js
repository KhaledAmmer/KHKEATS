import './style.css'
import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavBar from '../../NavBar';
import { User } from '../../../../controllers/user';







const CompleteOrder = () => {
    // const navigate = useNavigate()
    // const { state } = useLocation()
    // const { Name } = state

    const [city, setCity] = useState("")
    const [Area, setArea] = useState("")

    const [Phone, setPhone] = useState("")
    const [buildingNumber, setBuilding] = useState("")
    const [street, setstreet] = useState("")

    const [color, setColor] = useState("true")

    //!.....................................
    const dispatch = useDispatch();

    const Userinfor = useSelector((state) => {

        return {
            yourCart: state.User.cart,
            yourPrice: state.User.price,
            yourTotal: state.User.total,
            islogin: state.auth.isLoggedIn,
            sumPrice: state.User.sumpriceUser,
            name: state.User.name,
            userId: state.User.Iduser,
        }
    })




    // console.log(Userinfor.yourPrice, "YourPrice   complete")
    //!..............................


    console.log(Userinfor.userId, "Yourid   complete")


    const saveAdress = async (id) => {


        const adress = await User.UpdateAdress({ userid: id, city: Area, buldingNumber: buildingNumber, street: street, notes: Phone })


    }

    const getAdress = async(userid) => {
        console.log("idiiddid", userid)
        const pastadess = await User.getaddrssByuserTd({ userid })
        console.log(pastadess.result)
    }



    useEffect(() => {
        getAdress(localStorage.getItem("userid"))
    }, [])

    return (<div className='completeOrder'>
        <NavBar />
        <div className='order' >
            <div className='summaryOrder'>
                <div className='divSummary'><h1>Order Summary</h1></div>
                <div className='orderinformation'>
                    <h1>{Userinfor.name}</h1>
                    <div className='title'>
                        <h2 className='items'>items</h2>
                        <div className='title_tow'>
                            <h2> quantity</h2>
                            <h2> Price</h2>

                            <h2>Total</h2></div>

                    </div>
                    <div className='mealItems'>{Userinfor.yourPrice ? Userinfor.yourPrice.map((element, index) => {
                        return (<div className='div_return_map' keys={index}>
                            <h3 className='NameMeal'>{element.name}</h3>
                            <div className='insted__div_return_map'>
                                <div className='h3_Qun'>{element.price / element.priceOne}</div>
                                <div className='h3_Pri'>{element.priceOne}</div>
                                <div className='h3_totprice'>{element.price / element.priceOne * element.priceOne + "  JD"}</div>
                            </div>

                        </div>)

                    }) : ""}</div>
                    <div className='sumprice'>total:{Userinfor.sumPrice}</div>
                </div>

            </div>

            <div className='inputLocation'>
                <div className='cityandarea'>
                    <input placeholder="City"
                        onChange={(e) => {
                            setCity(e.target.value);
                        }}
                    /><input placeholder="Area"
                        onChange={(e) => {
                            setArea(e.target.value);
                        }} />
                </div>
                <div className='bulidingandStreet'>
                    <input placeholder="buldingNumber" onChange={(e) => {
                        setBuilding(e.target.value);
                    }} />
                    <input placeholder="stretNumber" onChange={(e) => {
                        setstreet(e.target.value);
                    }} />


                </div>
                <div className='Number'>
                    <input className='Number' placeholder="Number" onChange={(e) => {
                        setPhone(e.target.value);
                    }} />
                </div>

            </div>
            <div>money</div>
            <button onClick={() => {

                saveAdress(Userinfor.userId)

            }}>place order</button>

        </div>



    </div>)

}

export default CompleteOrder;



