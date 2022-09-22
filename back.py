import requests

url = "https://aerodatabox.p.rapidapi.com/flights/airports/icao/EHAM/2022-22-09T20:00/2022-28-09T08:00"

querystring = {"withLeg":"true","withCancelled":"true","withCodeshared":"true","withCargo":"true","withPrivate":"true","withLocation":"false"}

headers = {
	"X-RapidAPI-Key": "93c31d77b7msh18214df42f9f6d8p18e2d5jsnee83a7ba5448",
	"X-RapidAPI-Host": "aerodatabox.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)