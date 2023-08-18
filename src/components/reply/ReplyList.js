import { useEffect, useState } from "react";
import { getRepliesOfBoard } from "../../api/ReplyAPI";
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

const ReplyList = ({ bno, page, last, movePage, refresh, changeCurrent }) => {

    console.log("Reply List,,, bno" + bno)

    const [listData, setListData] = useState(initState)

    useEffect(() => {

        getRepliesOfBoard(bno, page, last).then(data => {
            console.log(data)
            setListData(data)
        })

        // movePage 시 page와 last의 상태가 변경될때
    }, [bno, page, last, refresh])

    return (

        <div className="p-6 bg-gray-100 rounded-lg">
            <div className="text-2xl font-bold text-gray-800 mb-4">
                Reply List
            </div>
            <div>
                <ul className="space-y-4">
                    {listData.dtoList.map(reply => (
                        <li key={reply.rno} className="bg-white p-4 rounded shadow-md cursor-pointer hover:bg-gray-200" 
                            onClick={() => changeCurrent(reply.rno)}>
                            {reply.rno}-{reply.replyText}
                        </li>
                    ))}
                </ul>
                <div className="mt-4">
                    <ListPageComponent {...listData} movePage={movePage} />
                </div>
            </div>
        </div>

    );
}

export default ReplyList;