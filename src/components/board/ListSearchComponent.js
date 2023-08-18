import { useEffect, useState } from "react";


const ListSearchComponent = ({ moveSearch, queryObj }) => {

    console.log("SearchComponent----------------------------")

    const [searchObj, setSearchObj] = useState({ type: '', keyword: '' })

    useEffect(() => {

        searchObj.type = queryObj.type || ''
        searchObj.keyword = queryObj.keyword || ''

        console.log("===========searchobj=============")
        console.log(searchObj)

        setSearchObj({ ...searchObj })

    }, [queryObj])


    return (
        <div className="m-4 p-4 bg-gray-100 rounded-lg shadow-md flex items-center">
            <select
                className="border-gray-300 m-2 p-2 rounded-md"
                value={searchObj.type}
                onChange={e => {
                    searchObj.type = e.target.value;
                    setSearchObj({ ...searchObj });
                }}
            >
                <option value={''}>---</option>
                <option value={'t'}>제목</option>
                <option value={'c'}>내용</option>
                <option value={'w'}>작성자</option>
                <option value={'tc'}>제목내용</option>
                <option value={'tcw'}>제목내용작성자</option>
            </select>

            <input
                type='text'
                className="border-gray-300 m-2 p-2 rounded-md flex-grow"
                value={searchObj.keyword}
                onChange={e => {
                    searchObj.keyword = e.target.value;
                    setSearchObj({ ...searchObj });
                }}
            />

            <button
                className="p-2 m-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700"
                onClick={e => moveSearch(searchObj.type, searchObj.keyword)}
            >SEARCH</button>
        </div>

    );
}

export default ListSearchComponent;