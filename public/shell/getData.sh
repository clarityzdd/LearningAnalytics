#!/bin/bash

echo "Obteniendo datos"
hdfs dfs -get /output/output.json ./public/exit/
mv ./public/exit/output.json/part-* ./public/exit/data.json
rm -R ./public/exit/output.json