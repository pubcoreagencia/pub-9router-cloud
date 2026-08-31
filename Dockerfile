FROM node:20-slim

WORKDIR /app

RUN npm install -g 9router

ENV PORT=20128
ENV HOST=0.0.0.0
ENV INITIAL_PASSWORD=pubdevloop2026

# Copy encrypted database backup and decrypt script
COPY encrypted-db.enc /app/encrypted-db.enc
COPY restore-db.js /app/restore-db.js

EXPOSE 20128

ENTRYPOINT ["sh", "-c", "node /app/restore-db.js && exec 9router -p ${PORT:-20128} -H 0.0.0.0 -n --skip-update"]
