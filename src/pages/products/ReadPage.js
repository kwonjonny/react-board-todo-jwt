import { useParams } from "react-router-dom"
import useQueryObj from "../../hooks/useQueryObj"
import ReadComponent from "../../components/products/ReadComponent"
import useCustomLogin from "../../hooks/useCustomLogin"

const ReadPage = () => {


    const { queryObj, setSearch, moveRead, moveList, moveModify } = useQueryObj()
    const { pno } = useParams()

    // 로그인이 없으면
    useCustomLogin(() => {
        alert('수정 하시려면 로그인해주세요')
    })

    console.log(pno)
    console.log(queryObj)

    return (
        <div>
            <ReadComponent pno={pno} moveModify={moveModify} moveList={moveList} ></ReadComponent>

        </div>
    );
}

export default ReadPage;