FROM node:18-alpine

COPY . .

RUN ["yarn", "install"]

RUN ["yarn", "build"]

EXPOSE 3000:3000

CMD ["yarn", "prod"]
