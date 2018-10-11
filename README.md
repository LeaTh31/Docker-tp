To start : in composeTP2
docker-compose up

If error "ERROR: failed to parse pool request for address space "LocalDefault" pool "" subpool "": could not find an available, non-overlapping IPv4 address pool among the defaults to assign to the network"

Do : 
service openvpn stop
service openvpn start

while it does not work.

or
service openvpn stop

if some errors try : 
sudo service docker restart


To start : 
docker-compose build
docker-compose up

If error socket about the port : 
sudo lsof -i :5000
then
kill pid




docker-compose build : build image composetp2_web
If docker-compose up : build image composetp2_web automatically

If environment:
      DEBUG: 0
debug mode : on 

if we don't want the debug mode, comment 
# environment:
#       DEBUG: 0














In Rendu/compose_tp2 :
docker-compose up

In a navigator : 
http://0.0.0.0:8000/