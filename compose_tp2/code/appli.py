#!/usr/bin/env python

from flask import Flask, render_template
import os
import redis
import socket

app = Flask(__name__)
hostname = socket.gethostname()
r = redis.StrictRedis("redis",decode_responses=True)



if "DEBUG" in os.environ:
    app.debug = True

@app.route("/")
def index():

    # Redis : 
    r.set("msg:hello", "Hello ! This message is displayed thanks to Redis. ")
    msg = r.get("msg:hello")

    if app.debug:
        r.set("Mode:debug","on")
    else:
        r.set("Mode:debug","off")

    deb = r.get("Mode:debug")
    print (deb)

    # zincrby : Increments the score of member in the sorted set stored at key by increment.
    r.zincrby("nb",hostname)
    nb = int(r.zscore("nb",hostname))

    return render_template( "appli.html", 
        nb=nb, hostname=hostname, msg=msg, deb=deb)
    

if __name__ == "__main__":
    app.run(host="0.0.0.0")

