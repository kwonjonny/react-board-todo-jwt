import SampleNav from "./nav/SampleNav";

const BasicLayout = ({children}) => {
    return ( 
        <div className="container mx-auto min-w-[1280px] bg-blue-500">
            <div className="m-4 text-4xl border-2">
                <SampleNav></SampleNav>
            </div>
            <div>
                {children}
            </div>
        </div>
     );
}
 
export default BasicLayout;