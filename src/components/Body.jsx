/*Template generated by PyCharm on Friday (9/20/2024), 2:40 PM.
* Author: Kramstyles (USER)
* Filename: Body.jsx
*/
"use client"

import {useState, useEffect} from "react";

const Body = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [sortBy, setSortBy] = useState("nothing");

    useEffect(() => {
        if (sortBy) {
            setLoading(true);
            fetch(`/api?sort_by=${sortBy}`)
                .then((response) => response.json())
                .then((result) => {
                    setData(result["sortedResult"]);
                    setLoading(false);
                    console.log(result)
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    setLoading(false);
                });
        }
    }, [sortBy]);

    const changeSort = (sortType) => setSortBy(sortType)

    return (
        <div>
            <div
                className="flex flex-col items-center justify-center space-y-4 py-8  max-w-lg mx-auto ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sort Options</h2>

                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 px-3 gap-4 w-full">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition
                        duration-300 transform hover:scale-105 shadow-md"
                        onClick={() => setSortBy("ascending")}
                    >
                        Ascending
                    </button>

                    <button
                        className="bg-gray-300 hover:bg-gray-200 text-dark font-bold py-2 px-4 rounded-lg transition
                        duration-300 transform hover:scale-105 shadow-md"
                        onClick={() => setSortBy("created_at")}
                    >
                        Created At
                    </button>

                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg
                        transition duration-300 transform hover:scale-105 shadow-md"
                        onClick={() => setSortBy("descending")}
                    >
                        Descending
                    </button>
                </div>
            </div>


            {/* Show loading state */}
            {loading && <p>Loading...</p>}

            {data && !loading && (
                <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center text-capitalize">
                        {sortBy !== "nothing" ? `Sorted Data (${sortBy.replace("_", " ")})` : "Unsorted Data"}
                    </h2>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 px-3">
                        {Object.entries(data).map(([key, value]) => (
                            <li key={key} className="flex flex-col m-2 bg-gray-200 p-4 rounded-lg shadow-sm sm:text-left text-center">
                                <span className="font-medium text-gray-600">{key}</span>
                                <span className="font-semibold text-gray-800">{value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}


            {/* If no data has been fetched yet */}
            {!data && !loading &&
                <div className="max-w-2xl mx-auto p-6  text-center min-h-[70vh]">No data to
                    display. Click a button to sort or wait some more.</div>}

        </div>
    )
        ;
};

export default Body