FROM python:alpine3.18
WORKDIR /usr/src/app
ADD . .
RUN pip install --upgrade pip && pip install -r requirements.txt
EXPOSE 5000
CMD ["python", "app.py"]