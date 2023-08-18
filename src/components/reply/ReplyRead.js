import { useEffect, useState } from "react";
import { deleteReply, getReply, putReply } from "../../api/ReplyAPI";


const initState = {
    rno: 0,
    bno: 0,
    replyText: '',
    replyFile: '',
    replyer: ''
}

const ReplyRead = ({ rno, cancelRead, refreshPage }) => {

    console.log("ReplyRead..........." + rno)

    const [reply, setReply] = useState(initState)

    useEffect(() => {
        getReply(rno).then(data => {
            console.log(data)
            setReply(data)
        })
    }, [rno])

    const handleClickDelete = () => {

        deleteReply(rno).then(data => {
            alert(`${data.result}번 댓글이 삭제되었습니다.`)
            refreshPage(true)
        })
    }

    const handleChange = (e) => {
        reply[e.target.name] = e.target.value
        setReply({ ...reply })
    }

    const handleClickModify = () => {

        putReply(reply).then(data => {
            alert(`${data.result} 수정되었습니다`)
            refreshPage(true)
        })

    }

    if (reply.replyText === '해당 글은 삭제되었습니다.') {
        return <></>
    }


    return (
        <div className="m-8 bg-blue-200 border-2 p-6 rounded-lg">
            <div className="text-lg font-bold text-black mb-4">Reply Read {rno}</div>

            <div className="mb-4">
                <label className="text-black block mb-2">Reply ID</label>
                <div className="text-black p-2 w-full rounded-md bg-white">{rno}</div>
            </div>

            <div className="mb-4">
                <label className="text-black block mb-2">ReplyText</label>
                <input
                    type="text"
                    name="replyText"
                    onChange={handleChange}
                    value={reply.replyText}
                    className="border p-2 w-full rounded-md"
                />
            </div>

            <div className="mb-4">
                <label className="text-black block mb-2">Replyer</label>
                <div className="text-black p-2 w-full rounded-md bg-white">{reply.replyer}</div>
            </div>

            <div className="mt-4 space-x-4">
                <button
                    onClick={handleClickModify}
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-400"
                >
                    MODIFY
                </button>
                <button
                    onClick={handleClickDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-400"
                >
                    DELETE
                </button>
                <button
                    onClick={cancelRead}
                    className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-400"
                >
                    CANCEL
                </button>
            </div>
        </div>


    );
}

export default ReplyRead;