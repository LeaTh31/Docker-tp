#!/usr/bin/env python

from flask import Flask, render_template
import os
import redis
import socket



app = Flask(__name__)
hostname = socket.gethostname()
r = redis.Redis("redis")


if "DEBUG" in os.environ:
    app.debug = True


# def get_hit_count():
#     retries = 5
#     while True:
#         try:
#             return r.incr('hits')
#         except redis.exceptions.ConnectionError as exc:
#             if retries == 0:
#                 raise exc
#             retries -= 1
#             time.sleep(0.5)



# @app.errorhandler(500)
# def error(e):
#     return render_template('error.html',
#         hostname=hostname, error=e), 500


def hello_redis():
    try:
        # The decode_repsonses flag here directs the client to convert the responses from Redis into Python strings
        # using the default encoding utf-8.  This is client specific.
        r = redis.StrictRedis(host=redis_host, port=redis_port, password=redis_password, decode_responses=True)
   
        # step 4: Set the hello message in Redis
        r.set("msg:hello", "Hello Redis!!!")

        # step 5: Retrieve the hello message from Redis
        msg = r.get("msg:hello")
        print(msg)        
   
    except Exception as e:
        print(e)

@app.route("/")
def index():
    # count = get_hit_count()
    # return 'Hello World! I have been seen {} times ! \n'.format(count)
    
    # Redis : 

    r.set("msg:hello", "Hello ! This message is displayed thanks to Redis. ")
    msg = r.get("msg:hello")

    # zincrby : Increments the score of member in the sorted set stored at key by increment.
    r.zincrby("nb",hostname)
    nb = int(r.zscore("nb",hostname))

    return render_template( "appli.html", 
        nb=nb, hostname=hostname, msg=msg)

# def index():
#     cache.zincrby("counters", hostname)
#     counters = cache.zrevrange("counters", 0, -1, withscores=True)
#     counters = [ (s.decode(), int(i)) for (s,i) in counters ]
#     thiscount = int(cache.zscore("counters", hostname))
#     totalcount = sum(i for (s,i) in counters)
#     return render_template( "index.html",
#         hostname=hostname, counters=counters,
#         thiscount=thiscount, totalcount=totalcount)


# @app.route("/assets/<path:path>")
# def assets(path):
#     return send_from_directory("assets", path)


if __name__ == "__main__":
    app.run(host="0.0.0.0")

