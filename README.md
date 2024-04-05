# Github repo URL

We get the repository here [here](https://github.com/koolkishan/chat-app-react-nodejs)

## Dockerizing "ReactJS card game" github repo.

First, you need to clone the project and download the project's code to your local machine from GitHub using the following command;

```shell
git clone git@github.com:koko37/playing-card.git
```

Open the cloned project folder. Inside the root directory, create a new file named "Docker"
Paste the following inside the file you just created
```shell
# Use a lightweight Node.js image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app code
COPY . .

# Expose port (adjust if needed)
EXPOSE 3000

# Start the app using react-scripts start
CMD [ "npm", "start" ]
```

### Building the Docker image
Change to the project directory in your terminal and run the following command to build the Docker image
This command builds the image and tags it with the name playing-card:latest

```shell

docker image build -t playing-card:latest .

```

### Run the Docker container
Now you need to run the docker container and start the card game application
```shell
docker run -d -p 3000:3000 playing-card:latest
```

### On the browser access the card game application
Open your browser and navigate to http://localhost:3000 to see the React card game application running.

