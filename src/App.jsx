import Main from "./components/Main.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import {useEffect, useState} from "react";


function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false)

    function handleToggleModal() {
        setShowModal(!showModal);
    }

    useEffect(() => {
        async function fetchAPIdata() {
            const NASA_KEY = import.meta.VITE_NASA_API_KEY;
            const url = 'https://api.nasa.gov/planetary/apod?api_key=' + `m7zRlvIrmaaD5hqgmNgH1Y9KmfbkVx4CgQ5lRz37`;

            const localKey = `NASA-${new Date().toDateString()}`;
            if (localStorage.getItem(localKey)) {
                const apiData = JSON.parse(localStorage.getItem(localKey));
                setData(apiData);
                console.log("Fetched from cache today");
                return
            }
            localStorage.clear();

            try{
                const res = await fetch(url);
                const apiData = await res.json();
                localStorage.setItem(localKey, JSON.stringify(data));
                setData(apiData);
                console.log("Fetched from API today");
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchAPIdata();
    }, [])

    return (
        <>
            {/* Ternary operator */}
            {data ? (<Main data={data}/>): (
                <div className={"loadingState"}>
                    <i className={"fa-solid fa-gear"}/>
                </div>
            )}
            {/* If both are true then only the sidebar shows */}
            {showModal && (
                <Sidebar data={data} handleToggleModal={handleToggleModal}/>
            )}
            {data && (
                <Footer data={data} handleToggleModal={handleToggleModal}/>
            )}
        </>
    )
}

export default App
