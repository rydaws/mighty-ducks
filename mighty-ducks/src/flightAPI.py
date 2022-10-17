import requests

url = "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/calendar"

querystring = {"calendar_type":"departure_date","destination":"LAX","origin":"JFK","depart_date":"2022-10-18","currency":"USD","return_date":"2022-10-22"}

headers = {
	"X-Access-Token": "4eaf2071e912db689ea22d419dd5ecca",
	"X-RapidAPI-Key": "8aeaceca03msh0840399dd6131f4p1d6fcbjsn367929625233",
	"X-RapidAPI-Host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)