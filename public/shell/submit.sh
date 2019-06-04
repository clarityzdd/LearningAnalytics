#!/bin/bash

echo "Ejecutando código scala"
assessment_type=$1
weight=$2
score=$3
score_num=$4
gender=$5
region=$6
education=$7
age=$8
disability=$9
result=${10}

hdfs dfs -rm -R /output/output.json
spark-submit --class myproject.Main ./public/jar/scalaapp_2.11-0.1.jar "'"$assessment_type"'" $weight $score $score_num "'"$gender"'" "'"$region"'" "'"$education"'" "'"$age"'" "'"$disability"'" "'"$result"'"
