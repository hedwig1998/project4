import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../assest/css/style.css"
import "../../assest/css/RankPage.css"
import goldMedal from "../../assest/img/—Pngtree—gold medal vector golden 1st_5205040.png";
import silverMedal from "../../assest/img/—Pngtree—silver medal vector best first_5205160.png";
import bronzeMedal from "../../assest/img/—Pngtree—bronze medal vector best first_5204996.png"; 

const RankSection = () => {
    // const [loggedInUser, setLoggedInUser] = useState({ rank: "-", userName: "Loading...", totalScore: "-" });
    const [season, setSeason] = useState({ name: "Loading...", color: "bg-secondary" });
    // const [rankings, setRankings] = useState([]);
    const [topRankings, setTopRankings] = useState([]); 

    const getSeason = () => {
        const currentMonth = new Date().getMonth() + 1;
        if (currentMonth >= 1 && currentMonth <= 3) {
            return { name: "Mùa Xuân", color: "custom-green" };
        } else if (currentMonth >= 4 && currentMonth <= 6) {
            return { name: "Mùa Hè", color: "bg-warning" };
        } else if (currentMonth >= 7 && currentMonth <= 9) {
            return { name: "Mùa Thu", color: "bg-danger" };
        } else if (currentMonth >= 10 && currentMonth <= 12) {
            return { name: "Mùa Đông", color: "bg-primary" };
        }
        return { name: "Unknown", color: "bg-secondary" };
    };

    const getRankStyle = (rank) => {
        switch(rank) {
            case 1:
                return "gold-rank-row"; 
            case 2:
                return "silver-rank-row";
            case 3:
                return "bronze-rank-row";
            default:
                return "normal-rank-row";
        }
    };

    const getRankDisplay = (rank) => {
        switch (rank) {
            case 1:
                return <img src={goldMedal} alt="Gold Medal" className="rank-medal" />;
            case 2:
                return <img src={silverMedal} alt="Silver Medal" className="rank-medal" />;
            case 3:
                return <img src={bronzeMedal} alt="Bronze Medal" className="rank-medal" />;
            default:
                return rank; 
        }
    };

    useEffect(() => {
        fetch("http://54.251.220.228:8080/trainingSouls/ranks")
            .then((response) => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const sortedData = [...data].sort((a, b) => {
                        const rankA = Number(a.rank);
                        const rankB = Number(b.rank);
                        return rankA - rankB;
                    });
                    
                    // setRankings(sortedData);
                    setTopRankings(sortedData.slice(0, 10));

                    // const currentUser = sortedData.find(user => user.rank === 1) || (sortedData.length > 0 ? sortedData[0] : null);
                    // if (currentUser) {
                    //     setLoggedInUser(currentUser);
                    // } else {
                    //     setLoggedInUser({ rank: "-", userName: "N/A", totalScore: "-" });
                    // }
                } else {
                    console.error("Error: Fetched data is not an array", data);
                    // setRankings([]);
                    setTopRankings([]);
                }
            })
        .catch(error => {
            console.error("Error fetching rankings:", error);
            // setRankings([]);
            setTopRankings([]);
        });
        setSeason(getSeason());
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div className="container-fluid bg-primary p-5 bg-hero mb-5">
                <div className="row py-5">
                    <div className="col-12 text-center">
                        <h1 className="display-2 text-uppercase text-white mb-md-4">Xếp hạng</h1>
                        <Link to={"/"} className="btn btn-primary py-md-3 px-md-5 me-3">Trang chủ</Link>
                        <Link to={"/rank"} className="btn btn-light py-md-3 px-md-5">Xếp hạng</Link>
                    </div>
                </div>
            </div>

            {/* Season Section */}
            <div className={`container-fluid p-4 mb-5 text-center rounded ${season.color}`}>
                <h2 className="text-uppercase text-dark mb-0">Mùa hiện tại</h2>
                <h1 className="display-4 text-uppercase text-dark">{season.name}</h1>
            </div>

            {/* Rankings Table Section */}
            <div className="container my-5">
                <div className="bg-dark p-5 rounded">
                    <h1 className="display-4 text-uppercase text-light mb-4">Xếp hạng người dùng</h1>
                    <div className="table-responsive">
                        <table className="table table-dark" style={{ tableLayout: 'fixed', width: '100%' }}> 
                            <thead>
                                <tr>
                                    <th className='rankingTable' scope="col" style={{ width: '10%' }}>Xếp hạng</th>
                                    <th className='rankingTable' scope="col" style={{ width: '20%' }}>Tên</th>
                                    {/* Thêm class 'hide-on-mobile' cho các cột cần ẩn */}
                                    <th className='rankingTable stats-column hide-on-mobile' scope="col">Strength</th>
                                    <th className='rankingTable stats-column hide-on-mobile' scope="col">Endurance</th>
                                    <th className='rankingTable stats-column hide-on-mobile' scope="col">Health</th>
                                    <th className='rankingTable stats-column hide-on-mobile' scope="col">Agility</th>
                                    <th className='rankingTable hide-on-mobile' scope="col" style={{ width: '15%' }}>Death Point</th>
                                    <th className='rankingTable' scope="col" style={{ width: '15%' }}>Tổng điểm</th>
                                </tr>
                            </thead>
                            <tbody>
                            {topRankings.length > 0 ? ( 
                                    topRankings.map((user) => (
                                        <tr key={user.id || user.userName}
                                            className={`${getRankStyle(user.rank)} text-center`}>
                                            <td className="rank-display-cell">{getRankDisplay(user.rank)}</td>
                                            <td>{user.userName}</td>
                                            <td className="hide-on-mobile">{user.strengthScore}</td>
                                            <td className="hide-on-mobile">{user.enduranceScore}</td>
                                            <td className="hide-on-mobile">{user.healthScore}</td>
                                            <td className="hide-on-mobile">{user.agilityScore}</td>
                                            <td className="hide-on-mobile">{user.deathpoints}</td>
                                            <td>{Number(user.totalScore).toFixed(1)}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="text-center">Không có dữ liệu xếp hạng.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>  
                    </div>
                </div>
            </div>

            {/* Logged In User Section */}
                {/* {loggedInUser && (
                    <div className="container mb-5">
                        <div className="bg-primary text-white p-4 rounded text-center">
                            <h3 className="text-uppercase mb-3">Your Information</h3>
                            <div className="d-flex justify-content-around align-items-center">
                                <div>
                                    <h5 className="text-uppercase">Rank</h5>
                                    <p className="fs-4">{loggedInUser.rank}</p>
                                </div>
                                <div>
                                    <h5 className="text-uppercase">Name</h5>
                                    <p className="fs-4">{loggedInUser.userName}</p>
                                </div>
                                <div>
                                    <h5 className="text-uppercase">Total Score</h5>
                                    <p className="fs-4">{Number(loggedInUser.totalScore).toFixed(1)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )} */}        
            </div>
    );
};

export default RankSection;