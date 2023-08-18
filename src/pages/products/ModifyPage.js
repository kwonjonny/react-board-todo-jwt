import { useParams } from "react-router-dom"
import useQueryObj from "../../hooks/useQueryObj"
import ModifyComponent from "../../components/products/ModifyComponent"
import useCustomLogin from "../../hooks/useCustomLogin";



const ModifyPage = () => {

    const { loginInfo } = useCustomLogin((nav) => {
        console.log("function")
        nav('../list');
    });


    const { queryObj, setSearch, moveRead, moveList, moveModify } = useQueryObj()
    const { pno } = useParams()


    console.log(pno)
    console.log(queryObj)


    return (
        <div>
            <div>Product Modify Page {pno}</div>
            <ModifyComponent pno={pno} moveList={moveList} moveRead={moveRead}></ModifyComponent>
        </div>
    );
}

export default ModifyPage;