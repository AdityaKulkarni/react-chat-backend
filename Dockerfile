FROM node:18-alpine

WORKDIR /app
COPY . /app/

ENV OPENAI_API_KEY YOUR_API_KEY

RUN npm install
CMD [ "npm", "run", "dev" ]