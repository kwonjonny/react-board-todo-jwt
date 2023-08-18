import TestLayout from "../layouts/TestLayout";
import BasicLayout from "../layouts/BasicLayout";
import TodoList from "../components/todo/TodoList";

const MainPage = () => {
    return ( 
        <BasicLayout>
        <h2> Main Page </h2>

        <TodoList></TodoList>

        </BasicLayout>
    );
}
 
export default MainPage;

