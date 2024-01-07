import { Outlet } from "react-router-dom";
import SubMenu from "../../components/SubMenu";
import Header from "../../components/Header";

export default function Products() {
    return (
        <>
            <Header />
            <SubMenu />
            <Outlet />
        </>
    );
}