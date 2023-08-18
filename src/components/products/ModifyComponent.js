import { useEffect, useRef, useState } from "react"
import { deleteProduct, getProduct, putProduct } from "../../api/ProductApi"

const initState = {
    pno: 0,
    pname: '',
    pdesc: '',
    price: 0,
    images: []
}

const ModifyComponent = ({ pno, moveList, moveRead }) => {

    const fileRef = useRef()
    const [product, setProduct] = useState(initState)

    // useEffect 사용 pno 가 바뀔씨에만 렌더링 
    useEffect(() => {
        getProduct(pno).then(data => {
            setProduct(data)
            console.log(data)

        })
    }, [pno])

    const handleClickDelete = () => {
        deleteProduct(pno).then(data => {
            alert('상품이 삭제 되었습니다')
            console.log(pno)
        })
    }

    const handelClickModify = () => {
        // console.log(board)
        // setBoard({...initSate})
        const formData = new FormData();
        formData.append("pno", product.pno);
        formData.append("pname", product.pname);
        formData.append("pdesc", product.pdesc);
        formData.append("price", product.price);
        console.dir(fileRef.current)

        if (product.images) {
            for (let pi of product.images) {
                formData.append("images", pi)
            }
        }
        const arr = fileRef.current.files
        // formData의 단점 눈으로 보기 힘듬 
        for (let file of arr) {
            formData.append("files", file)
        }
        putProduct(formData).then(data => {
            console.log(formData, "FormData");
            alert('수정되었습니다')
            moveRead(pno)
        })
    }

    const handleChange = (e) => {
        product[e.target.name] = e.target.value
        setProduct({ ...product })
    }

    const handleClickDeleteImg = (fname) => {
        const newArr = product.images.filter(ele => ele !== fname)
        // 기존의 images와 fname이 달라야 삭제 
        product.images = newArr


        setProduct({...product})
    }


    return (
        <div>
            <div>Modiy Page</div>

            <div>
                <label>pno</label>
                {product.pno}
            </div>

            <div>
                <label>pname</label>
                <input type="text" name="pname" value={product.pname} onChange={handleChange}></input>
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
                <input type="file" ref={fileRef} multiple name="files"></input>
            </div>

            <div>
                <label>images</label>
                <ul className="list-none flex">
                    {/* 적당한 키가 없어서 idx 쓴다 */}
                    {product.images.map((fname, idx) => {
                        return (
                            <li key={idx} className="m-6">
                                <img src={`http://localhost/s_${fname}`} alt={fname} className="shadow-lg" />
                                <button className="bg-red-500 m-2 p-2" onClick={() => handleClickDeleteImg(fname)}>X</button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div>
                <button className="bg-blue-300 text-lg" onClick={moveList}>Return List</button>
                <button className="bg-red-300 text-lg" onClick={handleClickDelete}>Product DELETE</button>
                <button className="bg-green-300 text-lg" onClick={handelClickModify}>Product Modify</button>
            </div>

        </div>
    );
}

export default ModifyComponent;