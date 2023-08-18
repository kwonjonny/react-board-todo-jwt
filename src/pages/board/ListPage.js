import ListComponent from "../../components/board/ListComponent";
import ListSearchComponent from "../../components/board/ListSearchComponent";
// import ListSearchComponent from "../../components/board/ListSearchComponet";
import useQueryObj from "../../hooks/useQueryObj";


const ListPage = () => {

  const {queryObj, setSearch, moveRead, moveList} = useQueryObj()

  console.log("queryObj --------")
  console.log(queryObj)

  const movePage = (num) => {

    console.log("NUM ------------" + num)
    queryObj.page = num
    setSearch({ ...queryObj })
  }

  const moveSearch = (type, keyword) => {
    queryObj.page = 1
    queryObj.type = type
    queryObj.keyword = keyword

    setSearch({ ...queryObj })
  }



  return (
    <div className="m-8 bg-white border-2 p-6 rounded-lg shadow-lg">
    <div className="text-2xl font-bold text-black mb-6">Board List Page</div>
    <div className="mb-6">
        <ListSearchComponent 
            moveSearch={moveSearch} 
            queryObj={queryObj} 
        />
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