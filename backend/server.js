const express = require('express'); // Keep express import here
const cors = require('cors');
const bodyParser = require('body-parser');
const roadmapRoutes = require('./routes/roadmapRoutes');  // Import routes

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/roadmap', roadmapRoutes); // Use the routes here

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
