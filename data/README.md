# Data Directory

This folder contains JSON files that power the dynamic content of your website.

## Files:

### `vehicles.json`
Contains all vehicle information used by the vehicles page and other parts of the website.

#### Structure:
```json
{
  "vehicles": [
    {
      "id": 1,
      "name": "Vehicle Name",
      "subtitle": "Vehicle Subtitle",
      "price": 35,
      "priceUnit": "per km",
      "seats": 4,
      "baggage": 3,
      "feature": "Electric",
      "tag": "Verified",
      "tagType": "gold",
      "photo": "photos/vehicle-name.jpg",
      "seatIcon": "airline_seat_recline_normal",
      "baggageIcon": "luggage",
      "featureIcon": "ev_station"
    }
  ]
}
```

#### Fields:
- **id**: Unique identifier
- **name**: Vehicle name (displayed prominently)
- **subtitle**: Short description
- **price**: Price per km (number only)
- **priceUnit**: Unit text (usually "per km")
- **seats**: Number of seats
- **baggage**: Number of baggage slots
- **feature**: Engine/fuel type or special feature
- **tag**: Badge text (e.g., "Verified", "Popular") - leave empty string "" if no tag
- **tagType**: "gold" or "teal" - determines badge color
- **photo**: Path to vehicle photo (must be in photos/ folder)
- **seatIcon**: Material Design icon name for seats
- **baggageIcon**: Material Design icon name for baggage
- **featureIcon**: Material Design icon name for feature

#### Available Icons:
See https://fonts.google.com/icons for all available Material Design icons. Common ones:
- Seat: `airline_seat_recline_normal`, `chair`, `group`, `groups`
- Baggage: `luggage`, `shopping_bag`, `work`, `package`
- Feature: `ev_station`, `local_gas_station`, `eco`, `toys`

## How to Edit:

1. Open `data/vehicles.json` in your text editor
2. Modify vehicle details as needed
3. Save the file
4. Changes appear immediately on the website

## How to Add Vehicles:

1. Add a new object to the `vehicles` array in JSON
2. Add the corresponding photo to `photos/` folder
3. Reference the photo path in the JSON
4. Save and refresh the website

## Example - Adding a New Vehicle:

```json
{
  "vehicles": [
    // ... existing vehicles ...
    {
      "id": 5,
      "name": "Premium SUV",
      "subtitle": "Family-Friendly Luxury",
      "price": 28,
      "priceUnit": "per km",
      "seats": 7,
      "baggage": 6,
      "feature": "Petrol",
      "tag": "New",
      "tagType": "gold",
      "photo": "photos/premium-suv.jpg",
      "seatIcon": "group",
      "baggageIcon": "shopping_bag",
      "featureIcon": "local_gas_station"
    }
  ]
}
```

## Notes:

- JSON syntax is strict - ensure proper formatting (quotes, commas, brackets)
- Photo paths must be relative to the root directory
- Icon names must match Material Design exactly
- Tag can be empty string "" if no tag needed
- Prices should be numbers only (not strings)
