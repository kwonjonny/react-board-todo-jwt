import { useRef, useState } from "react";
import { postProduct } from "../../api/ProductApi";


const initState = {
    pname: 'ICE COFFEE',
    pdesc: 'coffee....',
    price: 4000
}

const RegisterComponent = ({ moveList }) => {

    const fileRef = useRef()

    const [product, setProduct] = useState({ ...initState });
    
    const handleChange = (e) => {
        product[e.target.name] = e.target.value
        setProduct({ ...product })
    }

    const handleClickSave = (e) => {
        // console.log(board)
        // setBoard({...initSate})
        const formData = new FormData();
        formData.append("pname", product.pname);
        formData.append("pdesc", product.pdesc);
        formData.append("price", product.price);
        console.dir(fileRef.current)

        const arr = fileRef.current.files
        // formData의 단점 눈으로 보기 힘듬 
        for (let file of arr) {
            formData.append("files", file)
        }

        postProduct(formData).then(data => {
            const rno = data.result
            alert(`${rno}번 상품이 등록되었습니다~`)
            moveList()
        })
    }

    const handleClickClear = (e) => {
        fileRef.current.value = ''
    }

    return (
        <div>
            <div>Input</div>

            <div>
                <label>pname</label>
                <input type="pname" name="pname" value={product.pname} onChange={handleChange}></input>
            </div>

            <div>
                <label>pdesc</label>
                <input type="text" name="pdesc" value={product.pdesc} onChange={handleChange}></input>
            </div>

            <div>
                <label>price</label>
                <input type="number" name="price" value={product.price} onChange={handleChange}></input>
            </div>

            <div>
                <label>file</label>
                <input type="file" ref={fileRef} multiple name="files" onChange={handleChange}></input>
            </div>

            <div>
                <button onClick={handleClickSave}>SAVE</button>
                <button onClick={handleClickClear}>CLEAR FILES</button>
            </div>

        </div>
    );
}

export default RegisterComponent;