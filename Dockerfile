# Stage 1: Base image with dependencies
FROM --platform=linux/amd64 ubuntu:latest as base
RUN apt-get update && \
        apt-get install -y python3 python3-pip && \
        apt-get clean && \
        rm -rf /var/lib/apt/lists/*

# Stage 2: Install pipenv and dependencies
FROM base as dependencies
RUN pip3 install pipenv
WORKDIR /app
COPY Pipfile Pipfile.lock ./
RUN pipenv install --system --deploy

# Stage 3: Final image for running the application
FROM dependencies as final
COPY bin bin
COPY server server
ENTRYPOINT ["/app/bin/docker-entrypoint"]
CMD ["serve"]
