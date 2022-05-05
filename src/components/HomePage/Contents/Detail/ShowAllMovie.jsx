import React, { useState, useEffect, useRef } from 'react';
import requests from '../../../API';
import { useParams, useNavigate, Link } from 'react-router-dom';
import HoverMovie from '../ChildrenContent/HoverMovie';
import axios from 'axios';
import Loading from '../../../Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchIcon from '@mui/icons-material/Search';
function ShowAllMovie() {
    const { type } = useParams();
    const navigate = useNavigate();
    const [inSearch, setInSearch] = useState('');
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);

    let newDataFilter = data;

    newDataFilter = data.filter(
        (item) => item.title.toLowerCase().indexOf(inSearch.toLowerCase()) > -1
    );

    // console.log(newDataFilter);
    let url = requests.fetchLoadMore(type, page);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                let res = await axios.get(url);
                let data = res && res.data ? res.data : [];
                if (data && data.results.length > 0) {
                    setIsLoading(false);
                    setTotalPages(data.total_pages);
                    setData(data.results);
                }
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchData();
    }, []);

    const loadMore = async () => {
        let url = requests.fetchLoadMore(type, page + 1);
        let res = await axios.get(url);
        let resData = res && res.data ? res.data : [];
        setIsLoading(false);
        setData([...data, ...resData.results]);
        setPage(page + 1);
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleSearch = () => {
        newDataFilter = data.filter(
            (item) => item.title.toLowerCase().indexOf(inSearch.toLowerCase()) > -1
        );
    };

    return (
        <>
            <div className="container-show-all">
                <div className="show-header">
                    <div className="">
                        <h1>
                            {type === 'top_rated'
                                ? 'TOP RATED'
                                : type === 'upcoming'
                                ? 'UP COMING'
                                : 'TRENDING NOW'}
                        </h1>
                        <button className="btn-back" onClick={handleBack}>
                            BACK
                        </button>
                    </div>
                    <div
                        className="wrap-search"
                        style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type="search"
                            name=""
                            id=""
                            placeholder="Search..."
                            value={inSearch}
                            onChange={(e) => setInSearch(e.target.value)}
                        />
                        {/* <SearchIcon className="icon-search" /> */}
                    </div>
                    <button className="btn-search-movie" onClick={handleSearch}>
                        Search
                    </button>
                </div>

                {isLoading === false && (
                    <>
                        <div className="show-wrap">
                            <InfiniteScroll
                                dataLength={data.length}
                                next={loadMore}
                                hasMore={true}
                                loader={newDataFilter.length != 0 && <Loading />}>
                                <div className="show-list">
                                    {newDataFilter.length === 0 && (
                                        <h1
                                            style={{
                                                margin: '50px',
                                                textAlign: 'center',
                                                width: '100%',
                                            }}>
                                            Không tìm thấy phim hoặc nhập không hợp lệ.
                                            Xin vui lòng nhập lại !
                                        </h1>
                                    )}

                                    {newDataFilter &&
                                        newDataFilter.length > 0 &&
                                        newDataFilter.map((item, index) => (
                                            <>
                                                <div
                                                    key={index}
                                                    className="show-item"
                                                    style={{ position: 'relative' }}>
                                                    <img
                                                        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                                                        alt=""
                                                        style={{ position: 'relative' }}
                                                    />
                                                    <div
                                                        className="overlay-show-all"
                                                        style={{
                                                            position: 'absolute',
                                                        }}></div>
                                                    <HoverMovie
                                                        id={item.id}
                                                        marginLeft
                                                        top
                                                        url={`${item.id}`}
                                                    />
                                                </div>
                                            </>
                                        ))}
                                </div>
                            </InfiniteScroll>
                        </div>

                        {/* {totalPages !== page && !newDataFilter.length == 0 && (
                            <button className="load-more" onClick={loadMore}>
                                {isLoading ? <Loading /> : 'Load More'}
                            </button>
                        )} */}
                    </>
                )}
            </div>
        </>
    );
}

export default ShowAllMovie;
