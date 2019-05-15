#!/bin/bash

echo "Obteniendo datos"
hdfs dfs -get /output/output.json /home/user1/Documentos/sparkApp/public/exit/
mv /home/user1/Documentos/sparkApp/public/exit/output.json/part-* /home/user1/Documentos/sparkApp/public/exit/data.json
rm -R /home/user1/Documentos/sparkApp/public/exit/output.json