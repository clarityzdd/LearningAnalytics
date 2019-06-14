#!/bin/bash

echo "Ejecutando código scala"
filter=$1

hdfs dfs -rm -R /output/output.json

if [ $1 == "assessment" ]
then

    assessment_type=$2
    weight=$3
    score=$4
    score_num=$5
    gender=$6
    region=$7
    education=$8
    age=$9
    disability=${10}
    result=${11}

    spark-submit --class myproject.Main ./public/jar/scalaapp_2.11-0.1.jar $filter "'"$assessment_type"'" $weight $score $score_num "'"$gender"'" "'"$region"'" "'"$education"'" "'"$age"'" "'"$disability"'" "'"$result"'"

elif [ $1 == "course" ]
then

    gender=$2
    region=$3
    education=$4
    age=$5
    disability=$6
    result=$7
    registration=$8
    registration_num=$9
    clicks=${10}
    clicks_num=${11}
    activity=${12}
    week=${13}
    length=${14}
    length_num=${15}

    spark-submit --class myproject.Main ./public/jar/scalaapp_2.11-0.1.jar $filter "'"$gender"'" "'"$region"'" "'"$education"'" "'"$age"'" "'"$disability"'" "'"$result"'" $registration $registration_num $clicks $clicks_num "'"$activity"'" $week $length $length_num


elif [ $1 == "chart1" ]
then

    spark-submit --class myproject.Main ./public/jar/scalaapp_2.11-0.1.jar $filter "'"Exam"'" undefined undefined undefined "'"undefined"'" "'"undefined"'" "'"Post"'" "'"35-55"'" "'"N"'" "'"undefined"'"

fi
