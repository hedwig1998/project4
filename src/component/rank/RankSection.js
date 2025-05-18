import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../assest/css/style.css"
import "../../assest/css/RankPage.css"

const RankSection = () => {
    const [loggedInUser, setLoggedInUser] = useState({ rank: "-", userName: "Loading...", totalScore: "-" });
    const [season, setSeason] = useState({ name: "Loading...", color: "bg-secondary" });
    const [rankings, setRankings] = useState([]);

    const getSeason = () => {
        const currentMonth = new Date().getMonth() + 1;
        if (currentMonth >= 1 && currentMonth <= 3) {
            return { name: "Spring", color: "custom-green" };
        } else if (currentMonth >= 4 && currentMonth <= 6) {
            return { name: "Summer", color: "bg-warning" };
        } else if (currentMonth >= 7 && currentMonth <= 9) {
            return { name: "Autumn", color: "bg-danger" };
        } else if (currentMonth >= 10 && currentMonth <= 12) {
            return { name: "Winter", color: "bg-primary" };
        }
        return { name: "Unknown", color: "bg-secondary" };
    };

    const getRankStyle = (rank) => {
        switch(rank) {
            case 1:
                return "gold-rank";
            case 2:
                return "silver-rank";
            case 3:
                return "bronze-rank";
            default:
                return "normal-rank";
        }
    };

    useEffect(() => {
        fetch("http://54.251.220.228:8080/trainingSouls/ranks")
            .then((response) => response.json())
            .then(data => {
                const sortedData = [...data].sort((a, b) => {
                    const rankA = Number(a.rank);
                    const rankB = Number(b.rank);
                    return rankA - rankB;
                });
                
                setRankings(sortedData);
                
                const currentUser = sortedData.find(user => user.rank === 1) || sortedData[0];
                if (currentUser) {
                    setLoggedInUser(currentUser);
                }
            })
            .catch(error => console.error("Error fetching rankings:", error));

        setSeason(getSeason());
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <div className="container-fluid bg-primary p-5 bg-hero mb-5">
                <div className="row py-5">
                    <div className="col-12 text-center">
                        <h1 className="display-2 text-uppercase text-white mb-md-4">Rankings</h1>
                        <Link to={"/"} className="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
                        <a href="" className="btn btn-light py-md-3 px-md-5">Rankings</a>
                    </div>
                </div>
            </div>

            {/* Season Section */}
            <div className={`container-fluid p-4 mb-5 text-center rounded ${season.color}`}>
                <h2 className="text-uppercase text-dark mb-0">Current Season</h2>
                <h1 className="display-4 text-uppercase text-dark">{season.name}</h1>
            </div>

            {/* Rankings Table Section */}
            <div className="container my-5">
                <div className="bg-dark p-5 rounded">
                    {/* <h5 className="text-primary text-uppercase mb-3">Rankings</h5> */}
                    <h1 className="display-4 text-uppercase text-light mb-4">User Rankings</h1>
                    <div className="table-responsive">
                        <table className="table table-dark" style={{ tableLayout: 'fixed', width: '100%' }}> 
                            <thead>
                                <tr>
                                    <th className='rankingTable' scope="col" style={{ width: '10%' }}>Rank</th>
                                    <th className='rankingTable' scope="col" style={{ width: '20%' }}>Name</th>
                                    <th className='rankingTable stats-column' scope="col">Strength</th>
                                    <th className='rankingTable stats-column' scope="col">Endurance</th>
                                    <th className='rankingTable stats-column' scope="col">Health</th>
                                    <th className='rankingTable stats-column' scope="col">Agility</th>
                                    <th className='rankingTable' scope="col" style={{ width: '15%' }}>Death Point</th>
                                    <th className='rankingTable' scope="col" style={{ width: '15%' }}>Total Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rankings.map((user) => (
                                    <tr key={user.id} className={`${getRankStyle(user.rank)} text-center`}>
                                        <td>{user.rank}</td>
                                        <td>{user.userName}</td>
                                        <td>{user.strengthScore}</td>
                                        <td>{user.enduranceScore}</td>
                                        <td>{user.healthScore}</td>
                                        <td>{user.agilityScore}</td>
                                        <td>{user.deathpoints}</td>
                                        <td>{Number(user.totalScore).toFixed(1)}</td>
                                    </tr>
                                ))}
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