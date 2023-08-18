import { useEffect, useState } from "react";
import { postReply } from "../../api/ReplyAPI";

const initState = {
    bno: 0,
    replyText: '',
    replyFile: '',
    replyer: ''
}

const ReplyInput = ({ bno, refreshLast }) => {

    const [reply, setReply] = useState({ ...initState })

    // useEffect( () => {
    //     reply.bno = bno;
    //     setReply({...reply})
    // }, [bno])

    // event 시 reply의 내용물 바꿈 
    const handleChange = (e) => {
        reply[e.target.name] = e.target.value
        setReply({ ...reply })
    }

    // 
    const handleClickReigster = (e) => {
        reply.bno = bno
        postReply(reply).then(data => {
            console.log(data)
            alert(`${data.result} 번 댓글 등록 완료 `)
            refreshLast()
            setReply({ ...initState })
        }) // {result :222}
    }


    return (
        <div className="m-8 bg-gray-100 border-2 p-6 rounded-lg">
            <div className="text-lg font-bold text-black mb-4">Reply Input</div>
            <div className="mb-4">
                <label className="text-black block mb-2">ReplyText</label>
                <input
                    type="text"
                    name="replyText"
                    value={reply.replyText}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="text-black block mb-2">Replyer</label>
                <input
                    type="text"
                    name="replyer"
                    value={reply.replyer}
                    onChange={handleChange}
                    className="border p-2 w-full rounded-md"
                />
            </div>
            <div className="mt-6">
                <button
                    onClick={handleClickReigster}
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-400 w-full"
                >
                    Register
                </button>
            </div>
        </div>

    );
}

export default ReplyInput;