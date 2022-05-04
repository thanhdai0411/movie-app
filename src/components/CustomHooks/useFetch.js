import React, { useEffect, useState } from 'react';

import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        setIsLoading(true);
        const fetchData = async () => {
            try {
                let res = await axios.get(url, {
                    cancelToken: source.token,
                });
                let data = res && res.data ? res.data : [];
                if (data) {
                    setIsLoading(false);
                    setData(data);
                }
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message);
                } else {
                    // handle error
                }
            }
        };
        fetchData();
        return () => {
            source.cancel('Operation canceled by the user.');
        };
    }, [url]);

    return { data, isLoading };
};

export default useFetch;
