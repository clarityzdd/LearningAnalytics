#!/bin/bash

echo "Obteniendo datos"
hdfs dfs -get /output/output.json ./public/exit/
cat ./public/exit/output.json/part-* > ./public/exit/data.json
sed -i  '1s/{/[{/' ./public/exit/data.json
sed -i 's/}/},/g' ./public/exit/data.json
sed -i '$s/},/}]/' ./public/exit/data.json
rm -R ./public/exit/output.json
echo "Consulta finalizada"