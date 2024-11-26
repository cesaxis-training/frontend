# Step 1: Use a Node.js base image
FROM node:20

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# environment variable
ENV REACT_APP_API_URL=https://api.cesaxis.pt

# Step 6: Build the React application
RUN npm run build

RUN npm install -g serve

# Step 7: Expose the port the application runs on
EXPOSE 3000

# Step 8: Serve the application
CMD ["serve", "-s", "build", "-l", "3000"]
