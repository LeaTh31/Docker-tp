# Docker-compose TP
 Thibout Léa octobre 2018. 
thiboutlea@eisti.eu

## What we had to do : 
***Setting up a development stack.**

In this exercise you are going to set up a development stack infrastructure. This means that you will configure a container as a platform for testing your code, and you will develop your code
somewhere else (e.g. your laptop or another container).

You are free to chose the tools to install and the development environment, but you must adhere to the following requirements:

- Start from one or multiple existing image(s) in the Dockerhub (e.g. ubuntu, fedora, etc.). [✓ : python]
- Use docker-compose to customise the image or images. [✓]
- The customised image will be the test environment where you will test and debug your
code. But it will also become the production environment that you will give to the client, so
make sure everything is well configured in the container. Think about everything you need
to have installed (Java EE, JRE, Scala, Python, a database, etc.). [✓ : Debug variable]
- You will develop your code outside the test container, which will mount a volume into the
development directory so that you can run and test your code inside the container. The
code to develop, as well as the tools you will use (your IDE, for example) can be in installed
in your laptop or in another container. [✓ : everyting is installed on my laptop]
- Once the code, the docker-compose.yml file and everything else you need work perfectly,
commit those files to gitLab or gitHub and send your client (that’s me) the link. I will clone
the files and will run docker-compose up . Then I will grade your work.*

## To start the application : 
In compose_tp2 : `docker-compose up`

In a navigator : `http://0.0.0.0:8000/`


If errors append due to IPv4 adress problem : 
```
service openvpn stop
service opnvpn start
```
And if it still doesn't work, `service openvpn stop` only  or `sudo service docker restart` should fix the problem. 

## What the application does : 
This application is a Python application with the use of different frameworks : 

- Flask : to create websites with Python
- Gunicorn : a server web HTTP WSGI server
- Redis : for an easy database

It start Redis on the port 6379 by default. 

It starts the server on `http://0.0.0.0:5000/` by default.

We can see our application on `http://0.0.0.0:8000/`. 


The application consist as a queek use of Redis to show the name of the localhost and the number of queries, and then we can look at odl html works. 

## The files : 
In ***compose_tp2*** :

- `docker-compose.yml ` : Create a container with the name `TP2container`. Mount the volume `code` as `src` on the container. Once everything ok, launch the Python application. 
As we have `environment: DEBUG:0` we are in `Debug mode: on`.  (Voir plus tard à quoi serve les environment variable et comment les utiliser ...)

- `Dockerfile` : Create the image with python, flask, gunicorn and resdis installed. If we want to run only the Dockerfile : `docker-compose build` instead of `docker-compose up`. 
- code directory

In ***compose_tp2/code*** :

- `appli.py`: Display a message thanks to Redis and show some informations. Then, display some link that lead to old html work. 
- static directory
- templates directory

In ***compose_tp2/code/static*** :

- css directory
- some others directories with html files

In ***compose_tp2/code/templates*** :

- `appli.html` : principal application template


