#!/bin/bash
filter=$1

if [ $1 == "assessment" ]
then
    echo "EJECUTANDO ASSESSMENT"

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

elif [ $1 == "course" ]
then
    echo "EJECUTANDO COURSE"

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

    echo GENERO:"'"$gender"'"
    echo REGION: "'"$region"'"
    echo EDUCATION: "'"$education"'"
    echo AGE: "'"$age"'"
    echo DISABILITY: "'"$disability"'"
    echo RESULT: "'"$result"'"
    echo REGISTRATION: $registration
    echo REGISTRATION_NUM: $registration_num
    echo CLICKS: $clicks
    echo CLICKS_NUM: $clicks_num
    echo ACTIVITY: "'"$activity"'"
    echo WEEK: $week
    echo LENGTH: $length
    echo LENGTH_NUM: $length_num

elif [ $1 == "chart1" ]
then
    echo "CHART1 QUERY"

elif [ $1 == "chart2" ]
then
    echo "CHART2 QUERY"
fi
