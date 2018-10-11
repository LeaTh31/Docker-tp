FROM python
# flask : framework to create website with python
RUN pip install flask
# gunicorn : server web HTTP WSGI server
RUN pip install gunicorn
# redis : in-memory key-value pair data store (like noSQL)
RUN pip install redis
COPY . /src
WORKDIR /src
# --bind : specify a server socket to bind
# --workers : number of worker processes
CMD gunicorn --bind 0.0.0.0:5000 --workers 2 appli:app
# EXPOSE : tells Docker what ports are to be published in the image
EXPOSE 5000