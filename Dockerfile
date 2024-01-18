FROM node:18
COPY . /app
WORKDIR /app
RUN yarn
EXPOSE 4000
CMD ["yarn", "start"]
