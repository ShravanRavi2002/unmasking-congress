import json
import urllib.request

import pandas as pd

def main():
    with urllib.request.urlopen('https://theunitedstates.io/congress-legislators/legislators-current.json') as url:
        congress = json.loads(url.read().decode())
        senators = []
        for senator in congress:
            senators.append(senator['name']['last'])
        print(len(senators))

if __name__ == '__main__':
    main()