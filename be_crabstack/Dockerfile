FROM python:3.10-alpine

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev
RUN pip3 install --upgrade pip pipenv

WORKDIR /backend
COPY ./Pipfile* ./
RUN pipenv sync

COPY . .

COPY ./entrypoint.sh /entrypoint.sh
RUN chmod o+x /entrypoint.sh

ENTRYPOINT ["sh", "-c", "/entrypoint.sh"]