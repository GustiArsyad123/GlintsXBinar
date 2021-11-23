root@ade-ThinkPad-T450s:/home/gustiarsyad/Documents/Gusti Arsyad baeng/Gusti Arsyad/glintsxbinar-1/Week 5/day 22.2/mongo# ls
mongodb-compass_1.28.4_amd64.deb
root@ade-ThinkPad-T450s:/home/gustiarsyad/Documents/Gusti Arsyad baeng/Gusti Arsyad/glintsxbinar-1/Week 5/day 22.2/mongo# sudo dpkg -i mongodb-compass_1.28.4_amd64.deb
(Reading database ... 251049 files and directories currently installed.)
Preparing to unpack mongodb-compass_1.28.4_amd64.deb ...
Unpacking mongodb-compass (1.28.4) over (1.26.1) ...
Setting up mongodb-compass (1.28.4) ...
Processing triggers for gnome-menus (3.36.0-1ubuntu1) ...
Processing triggers for desktop-file-utils (0.24-1ubuntu3) ...
Processing triggers for mime-support (3.64ubuntu1) ...
root@ade-ThinkPad-T450s:/home/gustiarsyad/Documents/Gusti Arsyad baeng/Gusti Arsyad/glintsxbinar-1/Week 5/day 22.2/mongo#

root@ade-ThinkPad-T450s:/home/gustiarsyad/Documents/Gusti Arsyad baeng/Gusti Arsyad/glintsxbinar-1/Week 5/day 22.2/mongo# mongo -version
MongoDB shell version v4.4.10
Build Info: {
"version": "4.4.10",
"gitVersion": "58971da1ef93435a9f62bf4708a81713def6e88c",
"openSSLVersion": "OpenSSL 1.1.1f 31 Mar 2020",
"modules": [],
"allocator": "tcmalloc",
"environment": {
"distmod": "ubuntu2004",
"distarch": "x86_64",
"target_arch": "x86_64"
}
}

===
or
===
using mongod --version

root@ade-ThinkPad-T450s:/home/gustiarsyad/Documents/Gusti Arsyad baeng/Gusti Arsyad/glintsxbinar-1/Week 5/day 22.2/mongo# mongod -version
db version v4.4.10
Build Info: {
"version": "4.4.10",
"gitVersion": "58971da1ef93435a9f62bf4708a81713def6e88c",
"openSSLVersion": "OpenSSL 1.1.1f 31 Mar 2020",
"modules": [],
"allocator": "tcmalloc",
"environment": {
"distmod": "ubuntu2004",
"distarch": "x86_64",
"target_arch": "x86_64"
}
}


https://cloud.mongodb.com/v2/617f74397ca216164003b942#clusters