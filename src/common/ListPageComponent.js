


const ListPageComponent = ({ movePage, start, end, prev, next, pageNums, page }) => {


    const handleClickPage = (pageNum) => {
        movePage(pageNum)
    }


    return (
        <div className="flex justify-center my-8">
            <ul className="flex space-x-2">
                {/* Pagination start */}
                {/* Previous button */}
                {prev && (
                    <li
                        onClick={() => handleClickPage(start - 1)}
                        className="cursor-pointer text-blue-500 hover:text-blue-700"
                    >
                        prev
                    </li>
                )}

                {pageNums.map(num => (
                    <li
                        className={`p-2 cursor-pointer rounded-full text-sm font-semibold ${num === page ? 'bg-purple-500 text-white' : 'bg-blue-300 text-white'}`}
                        onClick={() => handleClickPage(num)}
                        key={num}
                    >
                        {num}
                    </li>
                ))}

                {/* Next button */}
                {next && (
                    <li
                        onClick={() => handleClickPage(end + 1)}
                        className="cursor-pointer text-blue-500 hover:text-blue-700"
                    >
                        next
                    </li>
                )}
                {/* Pagination stop */}
            </ul>
        </div>

    );
}

export default ListPageComponent;