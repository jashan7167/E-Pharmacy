# Use an official Node.js runtime as a parent image
FROM node:20.11.1

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Vite runs on
EXPOSE 5173

# Run Vite development server
CMD ["npm", "run", "dev", "--", "--host"]
