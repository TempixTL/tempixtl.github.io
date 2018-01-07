#!/bin/bash
./dpkg-scanpackages debs/ /dev/null > Packages
rm Packages.bz2
bzip2 -k Packages
