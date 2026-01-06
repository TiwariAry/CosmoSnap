import Main from "./components/Main.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import {useEffect, useState} from "react";


function App() {
    const [data, setData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = import.meta.env.VITE_NASA_APOD_API;

    function handleToggleModal() {
        setShowModal(!showModal);
    }

    useEffect(() => {
        async function fetchAPIdata() {
            const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
            const localKey = `NASA-${new Date().toDateString()}`;

            if (localStorage.getItem(localKey)) {
                const cachedData = JSON.parse(localStorage.getItem(localKey));

                // if error response
                if (cachedData.error || cachedData.code === 'API_ERROR') {
                    console.log("Cached error found, clearing and refetching...");
                    localStorage.removeItem(localKey);
                } else {
                    setData(cachedData);
                    setLoading(false);
                    console.log("Fetched from cache today");
                    return;
                }
            }

            try {
                const res = await fetch(url);

                if (!res.ok) {
                    throw new Error(`API Error: ${res.status} - ${res.statusText}`);
                }

                const apiData = await res.json();

                // Check if API returned an error in the response body
                if (apiData.error) {
                    throw new Error(apiData.error.message || 'API returned an error');
                }

                localStorage.setItem(localKey, JSON.stringify(apiData));
                setData(apiData);
                setLoading(false);
                console.log("Fetched from API today");
            } catch (err) {
                console.error(err);
                setError(err.message);
                setLoading(false);
                localStorage.removeItem(localKey);
            }
        }
        fetchAPIdata();
    }, []);

    return (
        <>
            {loading ? (
                <div className="loadingState">
                    <i className="fa-solid fa-gear" />
                </div>
            ) : error ? (
                <div className="errorState">
                    <div className="errorContent">
                        <i className="fa-solid fa-triangle-exclamation" />
                        <h2>Service Unavailable</h2>
                        <p>{error}</p>
                        <p>The NASA APOD API is currently down. Please try again later.</p>
                        <button onClick={() => window.location.reload()}>
                            Retry
                        </button>
                    </div>
                </div>
            ) : data ? (
                <Main data={data} />
            ) : null}

            {showModal && (
                <Sidebar data={data} handleToggleModal={handleToggleModal} />
            )}
            {data && (
                <Footer data={data} handleToggleModal={handleToggleModal} />
            )}
        </>
    );
}

export default App;