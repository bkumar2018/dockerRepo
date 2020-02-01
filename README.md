# dockerRepo for simpleWeb 
# Follow the below steps to run it.

step1: Clone the repo and visit dir 'cd /root/dockerProjects/simpleWeb/simpleweb'
step2: docker build -t bkumar2018/simpleweb .
step3: docker run -p 5000:8888 bkumar2018/simpleweb
> @ start /usr/app
> node index.js

Listening on port 8888

step4: Now after above commands access the the below url in browser.
Using browser access the page : http://192.168.0.107:5000  --> print "Hi There" on the page 

