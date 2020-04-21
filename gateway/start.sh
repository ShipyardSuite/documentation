# stop and delete all containers
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

# delete all images
docker rmi $(docker images -q -a)

# delete all networks
docker network prune

# create gateway network
docker network create gateway

# start dependencies
docker run -d --network gateway -p 27017-27017:27017-27017 --name mongo mongo:3
docker run --name redis --network gateway -d redis

# start containers
docker run --name notfound --network gateway -e SERVICE_PORT=3003 -p 3003:3003 -d shipyardsuite/notfound:develop

# stop gateway
kill $(lsof -t -i:8080)

# start gateway
pm2 start server.js