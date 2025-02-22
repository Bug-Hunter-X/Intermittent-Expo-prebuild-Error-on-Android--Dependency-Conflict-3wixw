// bugSolution.js
// Solution: Explicitly set Metro resolver and config versions in package.json to ensure consistency.
// Ensure you update the versions based on your project needs and Expo SDK version.

//package.json
{
  // ... other dependencies
  "dependencies": {
    "metro-resolver": "0.76.7",
    "metro-config": "0.76.7",
    // ... other dependencies
  }
}

//This will help to maintain consistency, although a deeper dive may be needed for a more permanent fix.
//Run npm install after making changes to the package.json