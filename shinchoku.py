#! /usr/bin/python
# coding: utf-8

import random

def shinchoku(n):
    if n == 0:
        print("進", end='')
        yield "進"
    elif n == 1:
        print("捗", end='')
        yield "捗"
    elif n == 2:
        print("な", end='')
        yield "な"
    elif n == 3:
        print("い", end='')
        yield "い"
    elif n == 4:
        print("で", end='')
        yield "で"
    elif n == 5:
        print("す", end='')
        yield "す"
    else:
        pass

ct = 0
word = []
result = ''
while True:
    l = shinchoku(random.randint(0, 5))
    word.append(next(l))
    if ct > 5:
        word.pop(0)
    result = "".join(word)
    ct += 1

    if result == '進捗ないです':
        print('\nかなしみの', ct, "文字")
        break
