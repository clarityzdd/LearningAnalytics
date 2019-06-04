#!/bin/bash
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

echo "...Ejecutando script..."
echo ASS_TYPE: "'"$assessment_type"'"
echo WEIGHT: $weight
echo SCORE: $score
echo SCORE_NUM: $score_num
echo GENERO:"'"$gender"'"
echo REGION: "'"$region"'"
echo EDUCATION: "'"$education"'"
echo AGE: "'"$age"'"
echo DISABILITY: "'"$disability"'"
echo RESULT: "'"$result"'"