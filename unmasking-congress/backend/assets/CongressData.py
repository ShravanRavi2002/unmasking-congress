import json
import urllib.request

def main():

    with urllib.request.urlopen('https://theunitedstates.io/congress-legislators/legislators-social-media.json') as url:
        congress = json.loads(url.read().decode())
        identification = {}
        for senator in congress:
            if 'twitter' in senator['social'].keys():
                identification[senator['id']['bioguide']] = senator['social']['twitter']

    with urllib.request.urlopen('https://theunitedstates.io/congress-legislators/legislators-current.json') as url:
        congress = json.loads(url.read().decode())
        senators = {}
        for senator in congress:
            if senator['id']['bioguide'] in identification.keys():
                senators[senator['name']['official_full']] = {'state': senator['terms'][len(senator['terms']) - 1]['state'], 'party': senator['terms'][len(senator['terms']) - 1]['party'], 'twitter_handle':
                identification[senator['id']['bioguide']]
            }
        print(senators)

if __name__ == '__main__':
    main()