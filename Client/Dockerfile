# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./frontend/package.json ./frontend/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./frontend/ .

# Expose the port the React app runs on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
