import logging
import json
import azure.functions as func

import json

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
	
    jsonStringData = """{
	"users": [
		{
			"User": "amin.chirazi@automators.com",
			"Name": "Amin Chirazi",
			"Start Date": "01.04.2018",
			"End Date": "",
			"Relation": "Internal",
			"Country": "AT",
			"Team Lead": "amin.chirazi@automators.com",
			"capacities": [
				{
					"CostObject ": "DZB0101 ",
					"Month": "2022.01",
					"Days": "10",
					"ID": "0102"
				},
				{
					"CostObject ": "DZB0101 ",
					"Month": "2022.02",
					"Days": "9",
					"ID": "0103"
				},
				{
					"CostObject ": "BOE0102 ",
					"Month": "2022.01",
					"Days": "4",
					"ID": "0104"
				},
				{
					"CostObject ": "BOE0102 ",
					"Month": "2022.02",
					"Days": "3",
					"ID": "0105"
				}
			]
		},
		{
			"User ": "john.doe@automators.com ",
			"Name": "John Doe",
			"Start Date": "01.07.2021",
			"End Date": "",
			"Relation": "Internal",
			"Country": "CH",
			"Team Lead": "valentin.ober@automators.com",
			"capacities": [
				{
					"CostObject ": "NAT0101 ",
					"Month": "2022.01",
					"Days": "12",
					"ID": "0202"
				},
				{
					"CostObject ": "NAT0101 ",
					"Month": "2022.02",
					"Days": "8",
					"ID": "0203"
				},
				{
					"CostObject ": "NAT0102 ",
					"Month": "2022.01",
					"Days": "7",
					"ID": "0204"
				},
				{
					"CostObject ": "NAT0102 ",
					"Month": "2022.02",
					"Days": "1",
					"ID": "0205"
				}
			]
		}
	]
    }"""
    
    jsonStringData = json.loads(jsonStringData)
    
    json_str = json.dumps(jsonStringData, indent=2)

    return func.HttpResponse(
        json_str,
        status_code=200
    )
