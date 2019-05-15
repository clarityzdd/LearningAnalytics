#!/bin/bash

echo "Ejecutando código scala"
spark-submit --class myproject.Main /home/user1/Documentos/sparkApp/public/jar/scalaapp_2.11-0.1.jar
