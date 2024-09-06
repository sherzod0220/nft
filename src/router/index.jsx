import { 
    createBrowserRouter,
    createRoutesFromElements,
    Route, 
    RouterProvider
} from "react-router-dom";
import App from "../App";
import { Homepage,Accounts,Artist,Nft,Marketplace } from "@pages";
const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<App/>}>
            <Route index element={<Homepage/>}/>
            <Route path="accounts" element={<Accounts/>}/>
            <Route path="artist" element={<Artist/>}/>
            <Route path="nft" element={<Nft/>}/>
            <Route path="marketplace" element={<Marketplace/>}/>
        </Route>
    )
  );
return <RouterProvider router={router}/>
}

export default Index
