#!/bin/bash
cd scripts
./dpkg-scanpackages ../debs /dev/null > ../Packages
cd ..
bzip2 -k Packages
