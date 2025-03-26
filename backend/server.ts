import axios from "axios";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

app.get('/api/stadiums/:page', async (req: any, res: any) => {

    try {
        const response = await axios.get('https://mlb25.theshow.com/apis/items.json?type=stadium&page=' + req.params.page);
        res.json(response.data);
    } catch (error) {
        console.log('Error fetching data');
        res.status(500).json({ message: 'Error fetching data' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
