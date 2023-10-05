const express = require('express');
const bodyParser = require('body-parser');
const countriesData = require('./countries'); // Import the countries data

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Reusable function to get a specific property of a country
async function getProperty(countryName, propertyName) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      const country = countriesData.find((c) => c.country === countryName);
      if (country) {
        resolve({ [propertyName]: country[propertyName] });
      } else {
        reject({ message: `Country not found for ${propertyName}` });
      }
    });
  });
}

// Route to get all countries
app.get('/api/countries/all', (req, res) => {
  res.json(countriesData);
});

// Route to get all information for a specific country
app.get('/api/countries/:countryName', async (req, res) => {
  const countryName = req.params.countryName;

  try {
    const countryData = countriesData.find((c) => c.country === countryName);
    if (!countryData) {
      throw new Error('Country not found');
    }
    res.json(countryData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Route to get a specific country's data for a given property
app.get('/api/countries/:countryName/:property', async (req, res) => {
  const countryName = req.params.countryName;
  const propertyName = req.params.property;

  try {
    const propertyData = await getProperty(countryName, propertyName);
    res.json(propertyData);
  } catch (error) {
    res.status(404).json(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
