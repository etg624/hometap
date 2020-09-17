export const envVars = {
  locationValidationBaseUrl:
    process.env.REACT_APP_LOCATION_BASE_URL ||
    'https://geocode.search.hereapi.com/v1/geocode?in=countryCode:USA',
  locationApiKey: process.env.REACT_APP_LOCATION_API_KEY,
}
