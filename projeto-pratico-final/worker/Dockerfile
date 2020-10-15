FROM python:latest
LABEL maintainer="Paulo Ricardo <pricardo@gmail.com>" \
      description="Project Docker" \
      version="1.0.0"

ENV PYTHONUNBUFFERED 1

RUN pip install redis==2.10.5
ENTRYPOINT ["/usr/local/bin/python"]