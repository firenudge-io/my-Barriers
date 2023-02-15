import { BrowserRouter, Route, Routes, } from "react-router-dom"
import { ProjectNavbar } from "../components/ProjectNavbar"
import { ProjectFooter } from "../components/ProjectFooter"
import { Analysis } from "../pages/Analysis"
import { Situation } from "../pages/Situation"
import { Classic } from "../pages/Classic"

const RouteItems = [
    { name: "Home", link: "/", element: <Analysis /> },
    { name: "Home", link: "/my-Barriers/", element: <Classic /> },
    { name: "Home", link: "/my-Barriers/Analysis/", element: <Analysis /> },
    { name: "Home", link: "/my-Barriers/Situation/", element: <Situation /> },
    { name: "Home", link: "/my-Barriers/Classic/", element: <Classic /> },
]


export const AppRoutes = () => {
    return (
        <div className="bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100">
            <BrowserRouter>
                <ProjectNavbar />
                <Routes>
                    {
                        RouteItems.map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={item.link}
                                    element={item.element}
                                />
                            )
                        })
                    }
                </Routes>
                <ProjectFooter />
            </BrowserRouter>
        </div>
    )
}