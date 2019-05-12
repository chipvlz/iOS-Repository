#!/bin/bash

echo
echo "Cleaning up quickly..."
echo "--------------------------"

./clean.sh

echo
echo "Rebuilding package list..."
echo "--------------------------"

rm Packages*
./dpkg-scanpackages -m ./debians/ /dev/null > Packages
bzip2 Packages
./dpkg-scanpackages -m ./debians/ /dev/null > Packages

echo "--------------------------"
echo "Done."
echo