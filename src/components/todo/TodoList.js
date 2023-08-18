import { useSelector } from "react-redux";


const TodoList = () => {
                            // 전체 state에서 todo를 구독 
    const obj = useSelector(state => state.todo)

    console.log("todoList의 obj 동작중: ", obj)

    return ( 
        <div>
            Todo List
            <ul>
                {obj.map( (ele, idx) => <li key={idx}>
                    {ele}
                </li>)}
            </ul>
        </div>
     );
}
 
export default TodoList;