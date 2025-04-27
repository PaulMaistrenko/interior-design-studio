FROM python:3.11.6-alpine3.18
LABEL maintainer="victory.otrok@gmail.com"

ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app/backend

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend source code
COPY . .

# Media directory
RUN mkdir -p /files/media \
    && adduser --disabled-password --no-create-home my_user \
    && chown -R my_user /files/media \
    && chmod -R 755 /files/media

USER my_user

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
