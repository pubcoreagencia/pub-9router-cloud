FROM node:20-slim

WORKDIR /app

RUN npm install -g 9router

ENV PORT=20128
ENV HOST=0.0.0.0

EXPOSE 20128

CMD ["9router", "-p", "20128", "-H", "0.0.0.0", "-n", "--skip-update"]
