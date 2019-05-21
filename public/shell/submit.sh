#!/bin/bash

echo "Ejecutando código scala"
assessment_type=$1
hdfs dfs -rm -R /output/output.json
spark-submit --class myproject.Main ./public/jar/scalaapp_2.11-0.1.jar "'"$assessment_type"'"
