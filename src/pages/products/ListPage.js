import ListSearchComponent from "../../components/board/ListSearchComponent";
import ListComponent from "../../components/products/ListComponent";
import useCustomLogin from "../../hooks/useCustomLogin";
import useQueryObj from "../../hooks/useQueryObj";



const ListPage = () => {

    const { queryObj, setSearch, moveRead, moveList } = useQueryObj();

    const movePage = (num) => {

        console.log("NUM ------------" + num)
        queryObj.page = num
        setSearch({ ...queryObj })
    }


    return (
        <div className="m-8 bg-white border-2 p-6 rounded-lg shadow-lg">

            <div className="text-2xl font-bold text-black mb-6">Products List Page</div>

            <div className="mb-6">
            </div>

            <div>
                <ListComponent
                    queryObj={queryObj}
                    movePage={movePage}
                    moveRead={moveRead}
                />
            </div>

        </div>
    );
}

export default ListPage;