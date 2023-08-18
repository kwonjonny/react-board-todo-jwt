import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../../reducers/cartSlice";

const CartNav = () => {

    const { items } = useSelector(state => state.cart)
    const { email, nickname } = useSelector(state => state.login)
    console.log(items)


    const dispatch = useDispatch()

    useEffect(() => {

        if (!email) {
            return
        }
        dispatch(getCartThunk(email))

    }, [email])


    return (
        <div className="text-4xl text-red-500">CART={items.length}</div>
    );
}

export default CartNav;