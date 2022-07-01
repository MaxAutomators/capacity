import logging
import json
import azure.functions as func

import json


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    if req.method == "GET":

        jsonStringData = """{
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
	    	}"""

        jsonStringData = json.loads(jsonStringData)

        json_str = json.dumps(jsonStringData, indent=2)

        return func.HttpResponse(
            json_str,
            status_code=200
        )

    elif req.method == "POST":
        return func.HttpResponse(
            req.get_json(),
            status_code=200
        )
