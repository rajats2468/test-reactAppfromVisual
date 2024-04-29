From node:18-alpine 
WORKDIR /react-app
Copy package*.json .
RUN npm install
COPY . .
Expose 5173
CMD ["npm","start"]