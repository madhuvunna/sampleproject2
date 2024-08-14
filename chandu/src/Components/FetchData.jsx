import React, { useState, useEffect } from 'react';

function FetchData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>Fetch Data (useEffect)</h2>
            {loading ? <p>Loading...</p> : <p>{data.title}</p>}
        </div>
    );
}

export default FetchData;
