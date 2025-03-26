import { useState, useEffect } from 'react';
import axios, { AxiosError } from "axios";
import '../styles/Stadiums.css'

interface ItemsStadiumResponse {
    page: number;
    per_page: number;
    total_pages: number;
    items: Stadium[];
}

interface Stadium {
    uuid: string;
    type: string;
    img: string;
    baked_img: string;
    name: string;
    rarity: string;
    team: string;
    team_short_name: string;
    capacity: string;
    surface: string;
    elevation: string;
    built: number;
    is_sellable: boolean;
}

function BaseballPagination() {
    // Data
    const [data, setData] = useState<ItemsStadiumResponse | null>(null);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Status
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const url = 'http://localhost:5000/api/stadiums/' + currentPage;
                console.log('Fetching data from: ' + url);

                const response = await axios.get<ItemsStadiumResponse>(url);
                setData(response.data);
                setTotalPages(response.data.total_pages)
            } catch (err: unknown) {
                if (err instanceof AxiosError) {
                    setError(err.message)
                } else {
                    setError("Fetch error");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    if (loading) {
        return <div>Loading data...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="stadium-container">
            <h1>Stadiums</h1>
            <div className="stadium-grid">
                {data &&
                    data.items.map((stadium) => (
                        <div key={stadium.uuid} className="stadium-card">
                            <img src={stadium.baked_img} alt={stadium.name} className="stadium-image" />
                            <div className="stadium-info">
                                <h3 className="stadium-name">{stadium.name}</h3>
                                <p><strong>Capacity:</strong> {stadium.capacity}</p>
                                <p><strong>Built:</strong> {stadium.built}</p>
                                <p><strong>Surface:</strong> {stadium.surface}</p>
                                <p><strong>Elevation:</strong> {stadium.elevation}</p>
                                <p><strong>Rarity:</strong> {stadium.rarity}</p>
                                <p><strong>Team:</strong> {stadium.team}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                Previous
            </button>
            <span>{currentPage} / {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    );
}

export default BaseballPagination;