# dockerRepo for simpleWeb

cd /root/dockerProjects/simpleWeb/simpleweb
docker build -t bkumar2018/simpleweb .
[root@192.168.0.107 simpleweb]#docker run -p 5000:8888 bkumar2018/simpleweb
> @ start /usr/app
> node index.js

Listening on port 8888

Now after above commands access the the below url in browser.
Using browser access the page : http://192.168.0.107:5000  --> print "Hi There" on the page 

