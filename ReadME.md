# Structure
src/
│
├── App.jsx               # Main app, sets up routes
├── main.jsx              # Entry point
├── index.css             # Global styles (Tailwind included)
│
├── pages/                # Full pages (mapped to routes)
│   ├── Home.jsx          # Analyzer hub (with modes: paste, file, LeetCode, etc.)
│   ├── History.jsx       # Past analyses, grouped by mode
│   ├── Login.jsx         # Login/signup (even mock for now)
│   ├── About.jsx         # About the project, credits, usage
│
├── components/           # Reusable building blocks
│   ├── layout/
│   │   ├── Navbar.jsx    # Top navigation
│   │   ├── Footer.jsx    # Footer info / links
│   │   └── Tabs.jsx      # Reusable tab switcher (for modes)
│   │
│   ├── inputs/
│   │   ├── InputSection.jsx   # Wrapper that switches UI by mode
│   │   ├── PasteInput.jsx     # Textarea input
│   │   ├── FileInput.jsx      # File upload + textarea
│   │   ├── LeetCodeInput.jsx  # Link input + textarea
│   │   ├── CodeforcesInput.jsx
│   │   └── CodeChefInput.jsx
│   │
│   ├── analysis/
│   │   ├── LanguageSelect.jsx # Dropdown for language
│   │   ├── ActionButtons.jsx  # Analyze + Reset buttons
│   │   ├── ResultCard.jsx     # Displays time/space complexity, reasoning
│   │   └── Loader.jsx         # Spinner/loader while analyzing
│   │
│   └── history/
│       ├── HistoryList.jsx    # List of past results
│       └── HistoryItem.jsx    # Single history entry (mode + snippet + date)
│
├── api/
│   ├── api.js            # Axios instance
│   └── analyzer.js       # `analyzeCode` and future fetch functions (LeetCode etc.)
│
└── utils/
    └── storage.js        # LocalStorage helpers for saving history
