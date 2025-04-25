FROM python:3.11.6-alpine3.18
LABEL maintainer="danilsivkovic@gmail.com"

ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app

# Copy requirements and install dependencies
COPY app/backend/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend source code
COPY app/backend/ .

# Media directory
RUN mkdir -p /files/media \
    && adduser --disabled-password --no-create-home my_user \
    && chown -R my_user /files/media \
    && chmod -R 755 /files/media

USER my_user
