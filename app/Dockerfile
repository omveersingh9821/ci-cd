# Base image - contains python 3.11 and pip
FROM python:3.11-slim 

# Set working directory
WORKDIR /app

# Copy requirements file
COPY requirements.txt .

# Install dependencies - executes once while building the image.
RUN pip install --no-cache-dir -r requirements.txt 

# Copy application code

COPY . .

RUN useradd -m ashu
USER ashu

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]