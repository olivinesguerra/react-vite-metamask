
import {
    Routes,
    Route
} from "react-router-dom";
import * as Screens from "../component/screens";


export const AppRoutes = () => {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Routes>
                <Route index path="/" element={<Screens.Dashboard />} />
            </Routes>
        </div>

    );
};