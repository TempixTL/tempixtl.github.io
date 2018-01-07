#!/bin/bash
cd scripts
./dpkg-scanpackages ../debs /dev/null > ../Packages
cd ..
rm Packages.bz2
bzip2 -k Packages
