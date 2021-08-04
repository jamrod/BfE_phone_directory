def cors_middleware(get_response):

    def middleware(request):
        response = get_response(request)
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Headers"] = "*"

        return response

    return middleware

# class cors_middleware:
#     def __init__(self, get_response):
#         self.get_response = get_response

#     def __call__(self, request):
#         response = self.get_response(request)
#         response["Access-Control-Allow-Origin"] = "*"

#         return response
