#!/bin/sh

echo 'Downloading data from daten.berlin.de.'
curl -# -L 'http://www.vbb.de/de/download/GTFS_VBB_Dez2016_Aug2017.zip' > data.zip

unzip -ju data.zip -d data
rm data.zip
rm data/*.zip
mv data/Umschl%FCsselung_alte_in_neu_stop_id.xlsx data/old-to-new.xlsx
