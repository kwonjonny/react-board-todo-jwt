import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/ProductApi";
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
        }).catch(err => {
            console.log("-------------- error in ListComponent ")
            console.log(err)
            console.log("-------------- error in ListComponent ")
        })
    }, [queryObj])


    return (
        <div className="m-8 bg-white border-2 p-6 rounded-lg shadow-lg">
            <div className="text-lg font-bold text-black mb-4">Product List Component</div>
            <div className="mt-4 space-y-2">
                <ul className="flex flex-wrap justify-center">
                    {listData.dtoList.map(({ pno, pname, price, fname, reviewCnt, reviewAvg }) => (
                        <li
                            key={pno}
                            onClick={() => moveRead(pno)}
                            className="p-4 bg-blue-100 rounded-md cursor-pointer hover:bg-blue-200 w-1/3
            h-[300px] justify-center m-2 shadow-lg"
                        >
                            <div>
                                <div className="text-black font-extrabold">Product Number: {pno}</div>
                                <div className="text-black font-extrabold">Product Name: {pname}</div>
                                <div className="text-black font-extrabold">Price: {price}</div>
                                <div className="text-black font-extrabold">조회수: {reviewCnt}</div>
                                <div className="text-black font-extrabold">평점: {reviewAvg}</div>
                                <div> <img src={`http://localhost/s_${fname}`} alt={pname} className="shadow-lg" /></div>
                            </div>
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