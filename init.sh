#!/bin/bash

# Run npm run dev for frontend
echo "Starting frontend development server..."
npm run dev &

# Run npm run server for backend
echo "Starting backend server..."
npm run server

echo "Script completed."