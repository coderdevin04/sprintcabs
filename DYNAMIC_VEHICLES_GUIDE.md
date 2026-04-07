# 🎯 Dynamic Vehicle System - Setup Guide

## What Changed?

Your website now has a **dynamic vehicle management system** that fetches vehicle data from JSON instead of hardcoding HTML.

### Benefits:
✅ **Easy Updates** - Add/edit vehicles in `data/vehicles.json`  
✅ **No HTML Changes** - Vehicles page updates automatically  
✅ **Photo Management** - Store all images in `photos/` folder  
✅ **Scalable** - Add unlimited vehicles easily  
✅ **Maintainable** - All data in one place  

---

## 📁 Folder Structure

```
Travels/
├── data/
│   ├── vehicles.json          ← All vehicle data (JSON)
│   └── README.md              ← Data folder guide
├── photos/
│   ├── slate-executive-s.jpg  ← Vehicle photos
│   ├── atlas-rover-x.jpg
│   ├── phantom-s-class.jpg
│   └── horizon-transit.jpg
├── vehicles.html              ← Updated to fetch from JSON
└── ... other files ...
```

---

## 🚗 Current Vehicles in JSON

The `data/vehicles.json` file contains 4 vehicles:

1. **Slate Executive S** (₹35/km) - 4 seats, Electric
2. **Atlas Rover X** (₹22/km) - 7 seats, Hybrid
3. **Phantom S Class** (₹40/km) - 4 seats, V8 Turbo
4. **Horizon Transit** (₹18/km) - 12 seats, Diesel

---

## 🖼️ Adding Vehicle Photos

### Step 1: Prepare Your Photos
- Size: 800px × 500px (16:10 ratio)
- Format: JPG or PNG
- Quality: Optimized for web

### Step 2: Place in Photos Folder
Save your images with these exact filenames:
```
photos/
├── slate-executive-s.jpg      ← Photo for vehicle #1
├── atlas-rover-x.jpg          ← Photo for vehicle #2
├── phantom-s-class.jpg        ← Photo for vehicle #3
└── horizon-transit.jpg        ← Photo for vehicle #4
```

### Step 3: Done!
Refresh `vehicles.html` and your photos will display automatically.

---

## ✏️ How to Edit Vehicle Data

### Example: Change a Vehicle's Price

Open `data/vehicles.json` and find:

```json
{
  "id": 1,
  "name": "Slate Executive S",
  "price": 35,        ← Change this
  "priceUnit": "per km",
  ...
}
```

Change `35` to your new price. Save and refresh.

### Example: Add a New Vehicle

In `data/vehicles.json`, add to the vehicles array:

```json
{
  "vehicles": [
    // ... existing vehicles ...
    {
      "id": 5,
      "name": "My New Vehicle",
      "subtitle": "Description here",
      "price": 25,
      "priceUnit": "per km",
      "seats": 6,
      "baggage": 5,
      "feature": "Petrol",
      "tag": "New",
      "tagType": "gold",
      "photo": "photos/my-new-vehicle.jpg",
      "seatIcon": "group",
      "baggageIcon": "shopping_bag",
      "featureIcon": "local_gas_station"
    }
  ]
}
```

Then add `photos/my-new-vehicle.jpg` to the photos folder.

---

## 🔧 Vehicle JSON Fields Explained

| Field | Type | Example | Notes |
|-------|------|---------|-------|
| id | number | 1 | Unique identifier |
| name | string | "Slate Executive S" | Main vehicle name |
| subtitle | string | "Long-Range Luxury Edition" | Tagline |
| price | number | 35 | Price per km (number only) |
| priceUnit | string | "per km" | Display text |
| seats | number | 4 | Number of seats |
| baggage | number | 3 | Luggage capacity |
| feature | string | "Electric" | Engine/fuel type |
| tag | string | "Verified" | Badge text (empty "" if none) |
| tagType | string | "gold" or "teal" | Badge color |
| photo | string | "photos/name.jpg" | Relative path to photo |
| seatIcon | string | "airline_seat_recline_normal" | Material Design icon |
| baggageIcon | string | "luggage" | Material Design icon |
| featureIcon | string | "ev_station" | Material Design icon |

---

## 🎨 Available Icon Names

### Seat Icons
- `airline_seat_recline_normal` - Single seat
- `chair` - Chair/comfy seat
- `group` - Multiple people
- `groups` - Large group

### Baggage Icons
- `luggage` - Luggage bag
- `shopping_bag` - Shopping bag
- `work` - Briefcase
- `package` - Package

### Feature Icons
- `ev_station` - Electric/EV
- `local_gas_station` - Gas/Petrol
- `eco` - Eco/Diesel
- `toys` - Performance/Engine

See full list: https://fonts.google.com/icons

---

## 📝 JSON Format Rules

⚠️ **IMPORTANT**: JSON has strict syntax rules:

✅ **Correct:**
```json
{
  "id": 1,
  "name": "Vehicle Name",
  "price": 35
}
```

❌ **Wrong:**
```json
{
  "id": "1",           // ID should be number, not string
  "name": "Vehicle    // Missing closing quote
  "price": "35"        // Price should be number, not string
}
```

### Common Mistakes:
- Missing commas between fields
- Missing quotes around string values
- Extra/missing curly braces or square brackets
- Single quotes instead of double quotes

**Tip**: Use a JSON validator: https://jsonlint.com/

---

## 🔄 Updating Existing Vehicles

### To Edit Any Vehicle Field:

1. Open `data/vehicles.json`
2. Find the vehicle by name or ID
3. Update the field value
4. Save the file
5. Refresh the website

### Example - Update Atlas Rover Details:

**Before:**
```json
{
  "id": 2,
  "name": "Atlas Rover X",
  "price": 22,
  "seats": 7,
  "feature": "Hybrid"
}
```

**After:**
```json
{
  "id": 2,
  "name": "Atlas Rover X Plus",
  "price": 24,
  "seats": 8,
  "feature": "Hybrid Plus"
}
```

---

## ❌ Troubleshooting

### Photos Not Showing?
- [ ] Check filename matches exactly (case-sensitive)
- [ ] File is in `photos/` folder
- [ ] Photo path in JSON is correct
- [ ] Clear browser cache (Ctrl+Shift+Delete)

### Vehicles Not Displaying?
- [ ] Check `data/vehicles.json` syntax (use JSONLint)
- [ ] All required fields are present
- [ ] No trailing commas after last item
- [ ] Open browser console (F12) for error messages

### Error in Console?
- [ ] JSON file has syntax error
- [ ] Photo file is missing
- [ ] Incorrect file paths
- [ ] File permissions issue

---

## 🚀 How vehicles.html Now Works

1. Page loads
2. JavaScript fetches `data/vehicles.json`
3. JavaScript loops through each vehicle
4. For each vehicle, generates HTML from the JSON data
5. Displays all vehicles dynamically

**Result**: No hardcoded HTML needed - purely data-driven!

---

## 💾 Backup Your Data

Always keep backups of your JSON files:

```bash
# Copy to backup
cp data/vehicles.json data/vehicles.json.backup
```

---

## 📚 Files to Know About

| File | Purpose |
|------|---------|
| `data/vehicles.json` | All vehicle data |
| `photos/` | Vehicle images folder |
| `vehicles.html` | Fetches and displays vehicles |
| `common.js` | Shared JavaScript |
| `config.js` | Site configuration |

---

## ✅ Quick Checklist

- [ ] Read `data/README.md` for detailed field info
- [ ] Read `photos/README.md` for image specs
- [ ] Add your vehicle photos to `photos/` folder
- [ ] Update vehicle prices/details in `data/vehicles.json`
- [ ] Test vehicles page loads correctly
- [ ] Check all photos display
- [ ] Verify prices and specs match

---

## 🎯 Next Steps

1. **Add Photos**: Put your 4 vehicle photos in `photos/` folder
2. **Update Prices**: Edit `data/vehicles.json` with your actual prices
3. **Customize Details**: Update seats, features, tags as needed
4. **Test**: Open `vehicles.html` and verify everything displays
5. **Deploy**: Your website is ready!

---

## 📞 Need Help?

Check these files for more info:
- `data/README.md` - Data structure details
- `photos/README.md` - Image requirements
- `vehicles.html` - How vehicles are loaded
- Browser console (F12) - Error messages

---

**Your vehicle management system is ready to use!** 🚗✨

Just add your photos and update the JSON - changes happen instantly!
