import React from "react";
import { Route ,Routes } from "react-router-dom";
import Temp from "../components/Temp";
//Layouts
import DefaultLayout from "../Layouts/Default.layout";

const DefaultHOC = ({ component : Component , ...rest}) => { 
    return (
        <>
        {/* <h1>hello defaultHoc</h1> */}
        <Routes>
        <Route //path="/" Component={DefaultLayout}
            {...rest}
            Component = { (props) => (
                <DefaultLayout>
                    <Component {...props} />
                </DefaultLayout>
            )
        }
        
        />
        </Routes>
        </>
    );
};

export default DefaultHOC;