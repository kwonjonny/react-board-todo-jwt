import { useEffect, useState } from "react";
import { getProduct } from "../../api/ProductApi";
import { useDispatch, useSelector } from "react-redux";
import { addCartThunk } from "../../reducers/cartSlice";


const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    images: []
}

const ReadComponent = ({ pno, moveModify, moveList }) => {

    const { email } = useSelector(state => state.login);

    const dispatch = useDispatch();

    const [product, setProduct] = useState(initState)

    // useEffect 사용 pno 가 바뀔씨에만 렌더링 
    useEffect(() => {
        getProduct(pno).then(data => {
            setProduct(data)
            console.log(data)
        }).catch(e => {
            console.log(e)
            // moveList로 튕겨낸다 
            moveList()
        })
    }, [pno])


    return (
        <div>
            <div>Input</div>

            <div>
                <label>pname</label>
                {product.pname}
            </div>

            <div>
                <label>pdesc</label>
                {product.pdesc}
            </div>

            <div>
                <label>price</label>
                {product.price}
            </div>

            <div>
                <label>images</label>
                <ul className="list-none">
                    {/* 적당한 키가 없어서 idx 쓴다 */}
                    {product.images.map((fname, idx) => {
                        return (
                            <li key={idx}>
                                <img src={`http://localhost/${fname}`} alt={fname} className="shadow-lg" />
                            </li>
                        );
                    })}

                </ul>
                <div>
                    <button className="bg-blue-500 text-lg" onClick={moveList}>Return List</button>
                </div>

                <div>
                    <button className="bg-red-800 text-lg" onClick={() => moveModify(product.pno)}>Move Modify</button>
                </div>

                <div>
                    {/* <button className="bg-blue-500 text-lg" onClick={() => dispatch(addCartThunk({ email, pno }))}>Add cart</button> */}
                    <button className="bg-blue-500 text-lg" onClick={() => dispatch(addCartThunk({ email, pno }))}>Add cart</button>

                </div>

            </div>
        </div>
    );
}

export default ReadComponent;