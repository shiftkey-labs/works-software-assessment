# Use the official Node.js image as base
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY src .

# Build TypeScript code
RUN npm run build

# Start a new stage for the production image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy built code from the previous stage
COPY --from=builder /app/dist ./dist

# Expose port 8080 to the outside world
EXPOSE 8080

# Command to run the application
CMD ["node", "./dist/server.js"]
