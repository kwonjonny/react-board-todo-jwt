import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
    return ( 
        <BasicLayout>
        <div className="mt-4 p-4 bg-green-400 text-2xl text-black flex justify-between items-center">
            <div className="underline font-extrabold mx-2 py-2 px-4">Board List</div>
            <div className="underline font-extrabold mx-2 py-2 px-4">Board Create</div>
        </div>
    
        <div className="h-[50vh] bg-white w-full border-3 mt-4 rounded-md shadow-md">
            <Outlet />
        </div>
    </BasicLayout>
    
     );
}
 
export default IndexPage;