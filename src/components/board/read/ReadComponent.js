import { useEffect, useState } from "react";
import { getOne } from "../../../api/boardAPI";

const initState = {
  bno: 0,
  title: '',
  content: '',
  writer: '',
  regDate: '',
  modDate: ''
}

const ReadComponent = ({ bno }) => {

  const [board, setBoard] = useState(initState)

  useEffect(() => {
    getOne(bno).then(data => {
      setBoard(data)
    })
  }, [bno])

  return (
    <div className="m-8 bg-white border-2 p-6 rounded-lg shadow-lg">
      <div className="text-lg font-bold text-black mb-4">Board Details</div>

      <div className="mb-4">
        <label className="text-black font-bold">Board ID:</label>
        <div className="text-black pl-2">{board.bno}</div>
      </div>

      <div className="mb-4">
        <label className="text-black font-bold">Title:</label>
        <div className="text-black pl-2">{board.title}</div>
      </div>

      <div className="mb-4">
        <label className="text-black font-bold">Writer:</label>
        <div className="text-black pl-2">{board.writer}</div>
      </div>

      <div className="mb-4">
        <label className="text-black font-bold">Content:</label>
        <div className="text-black pl-2">{board.content}</div>
      </div>

      <div className="mb-4">
        <label className="text-black font-bold">Register Date:</label>
        <div className="text-black pl-2">{board.regDate}</div>
      </div>

      <div className="mb-4">
        <label className="text-black font-bold">Modification Date:</label>
        <div className="text-black pl-2">{board.modDate}</div>
      </div>
    </div>

  );
}

export default ReadComponent;