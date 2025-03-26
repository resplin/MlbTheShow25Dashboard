# Use Node.js base image
FROM node:19

# Set working directory
WORKDIR /app

# Copy package.js and install dependencies
COPY package.json tsconfig.json ./
RUN npm install

# Copy all files
COPY . .

# Expose port 5000
EXPOSE 5000

# Run the application
CMD ["npm", "run", "dev"]
