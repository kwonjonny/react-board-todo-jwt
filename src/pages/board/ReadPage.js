import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/board/read/ReadComponent";
import ReplyWrapper from "../../components/reply/ReplyWrapper";


const ReadPage = () => {

    const {queryObj, setSearch, moveRead, moveList} = useQueryObj()
    const { bno } = useParams()

    console.log(bno)
    console.log(queryObj)

    return (
        <div className="m-8 bg-blue-200 border-2 p-6 rounded-lg">
    <div className="text-lg font-bold text-black mb-4">Board Read Page</div>
    <div className="mt-4">
        <ReadComponent bno={bno} />
    </div>
    <div className="mt-4">
        <ReplyWrapper bno={bno} />
    </div>
    <div className="mt-6">
        <button 
            onClick={e => moveList()} 
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-400"
        >
            List
        </button>
    </div>
</div>
    );
}

export default ReadPage;