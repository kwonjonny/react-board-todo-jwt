import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";
import ListPageComponent from "../../common/ListPageComponent";

const initState = {
    dtoList: [],
    end: 0,
    start: 0,
    next: false,
    prev: false,
    pageNums: [],
    page: 0,
    size: 0,
    requestDTO: null
}

const ListComponent = ({ queryObj, movePage, moveRead }) => {

    // list data 를 받아온다                // 초기값 설정 initState
    const [listData, setListData] = useState(initState)

    console.log(createSearchParams(queryObj).toString(), "<= createSearchParams(queryObj).toString()")

    useEffect(() => {
        getList(queryObj).then(data => {
            console.log(data)
            setListData(data)
        })
    }, [queryObj])


    return (
        <div className="m-8 bg-white border-2 p-6 rounded-lg shadow-lg">
        <div className="text-lg font-bold text-black mb-4">LIST Component</div>
        <div className="mt-4 space-y-2">
            <ul>
                {listData.dtoList.map(({ bno, title, writer, replyCount }) => (
                    <li 
                        key={bno} 
                        onClick={() => moveRead(bno)}
                        className="p-4 bg-blue-100 rounded cursor-pointer hover:bg-blue-200"
                    >
                        {bno} - {writer} - {title} - {replyCount}
                    </li>
                ))}
            </ul>
        </div>
        <div className="mt-6">
            <ListPageComponent movePage={movePage} {...listData} />
        </div>
    </div>
    
    );
}

export default ListComponent;