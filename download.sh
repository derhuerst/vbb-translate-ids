#!/bin/sh

echo 'Downloading data from daten.berlin.de.'
curl -# -L 'http://www.vbb.de/de/download/GTFS_VBB_Dez2016_Aug2017.zip' > data.zip

unzip -ju data.zip -d data
rm data.zip
rm data/*.zip
mv $(ls -A1 data/*.xlsx | head -n 1) data/old-to-new.xlsx # VBB messed up the file name!
