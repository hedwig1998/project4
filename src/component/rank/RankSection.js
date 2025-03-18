import React, { useEffect, useState } from 'react';
import "../../assest/css/bootstrap.min.css";
import "../../assest/css/style.css"

const RankSection = () => {
    // State để lưu thông tin từ API
    const [loggedInUser, setLoggedInUser] = useState({ rank: "-", name: "Loading...", points: "-" });
    const [season, setSeason] = useState({ name: "Loading...", color: "bg-secondary" });

    // Hàm để xác định mùa và màu dựa trên tháng hiện tại
    const getSeason = () => {
        const currentMonth = new Date().getMonth() + 1;
        if (currentMonth >= 1 && currentMonth <= 3) {
            return { name: "Spring", color: "custom-green" }; // Mùa xuân - Xanh lá tươi
        } else if (currentMonth >= 4 && currentMonth <= 6) {
            return { name: "Summer", color: "bg-warning" }; // Mùa hè - Cam
        } else if (currentMonth >= 7 && currentMonth <= 9) {
            return { name: "Autumn", color: "bg-danger" }; // Mùa thu - Vàng
        } else if (currentMonth >= 10 && currentMonth <= 12) {
            return { name: "Winter", color: "bg-primary" }; // Mùa đông - Xanh dương
        }
        return { name: "Unknown", color: "bg-secondary" }; // Trường hợp bất thường
    };

    useEffect(() => {
        // Gọi API lấy thông tin người dùng
        fetch("http://localhost:8080/api/user")
            .then((response) => response.json())
            .then((data) => {
                setLoggedInUser(data);
            })
            .catch((error) => console.error("Error fetching user data:", error));

        // Xác định mùa và cập nhật state
        setSeason(getSeason());
    }, []);

    return (
        <>
            {/* Hero Section */}
            <div className="container-fluid bg-primary p-5 bg-hero mb-5">
                <div className="row py-5">
                    <div className="col-12 text-center">
                        <h1 className="display-2 text-uppercase text-white mb-md-4">Rankings</h1>
                        <a href="#" className="btn btn-primary py-md-3 px-md-5 me-3">Home</a>
                        <a href="#" className="btn btn-light py-md-3 px-md-5">Rankings</a>
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
                    <h5 className="text-primary text-uppercase mb-3">Rankings</h5>
                    <h1 className="display-4 text-uppercase text-light mb-4">User Rankings</h1>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Rank</th>
                                <th scope="col">Name</th>
                                <th scope="col">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{loggedInUser.rank}</td>
                                <td>{loggedInUser.name}</td>
                                <td>{loggedInUser.points}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Logged In User Section */}
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
                            <p className="fs-4">{loggedInUser.name}</p>
                        </div>
                        <div>
                            <h5 className="text-uppercase">Points</h5>
                            <p className="fs-4">{loggedInUser.points}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RankSection;
