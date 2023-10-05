# country-data-api
A Node.js API for deriving country data

# Installing the API
1. Clone the repository into your local projects folder
2. Run `npm install` to install all relevant dependencies
3. Run `node index.js` to run the API at a default port of 3000
4. Go to a browser and use the following URL: `http://localhost:3000/api/countries/all`
5. You'll see the browser populate with a large returned object with a number of countries and respective properties for each country... Now here comes the fun part...

# Syntax
You can narrow things down with a few choice URL selections:
* `/api/countries/:countryName`, e.g. `/api/countries/Australia` - will return all properties available to that specific country. If the country name has a space use `%20`, for example `United%20States`
* `/api/countries/:countryName/:property` - This is where the magic begins:
  
  i) **country** - returns the country's name... A bit weird considering we would have used the country's name in the original URL to get this information... Go figure...
  
  ii) **abbreviation** - returns the country's country code internet top level domain, e.g. `AU` for Australia
  
  iii) **calling_code** - returns the country's calling code, e.g. `61` for Australia

  iv) **capital** - returns the country's capital city

  v) **cities** - returns an extensive list of cities within the country (warning: can be quite a long list for some countries!)

  vi) **continent** - returns the continent in which the country is situated

  vii) **currency_code** - returns the currency code for the country, e.g. `AUD` for Australia

  viii) **currency_name** - returns the name of the currency used by the country, e.g. `Australian Dollar` for Australia

  ix) **north** - returns the degrees north of the equator of the northernmost point of the country (Note, locations in the Southern Hemisphere will be returned as negative degrees north)

  x) **south** - returns the degrees north of the equator of the southernmost point of the country (Note, locations in the Southern Hemisphere will be returned as negative degrees north)

  xi) **west** - returns the degrees east of the Prime Meriidan of the westernmost point of the country (Note, locations to the west of the Prime Meridian will be returned as negative degrees east)

  xii) **east** - returns the degrees east of the Prime Meridian of the easternmost point of the country (Note, locations to the west of the Prime Meridian will be returned as negative degrees east)

  xiii) **government** - returns the country's form of government

  xiv) **landlocked** - returns 0 if the country is not landlocked, returns 1 if the country is landlocked

  xv) **population** - returns the population of the country, this value is from a few years back (will need to locate the year of the source for these figures)

  xvi) **area** - returns the area in square kilometers for the country

  xvii) **languages** - returns a list of common languages spoken in the country. Note, this is not the main languages spoken by all residents, but a list of the most common

  xviii) **independence** - returns the year of independence for the country
