# pt-cipta-integrasi-nusantara

A simple server for the technical test of PT Cipta Integrasi Nusantara

## Endpoints :

List of available endpoints:

-   `POST /api/register`
-   `POST /api/login`
-   `GET /api/me`

&nbsp;

## 1. POST /api/register

Description:

-   Register a new user to the database

Request:

-   body:

```json
{
	"name": "string",
	"email": "string",
	"password": "string"
}
```

_Response (201 - Created)_

```json
{
	"message": "success",
	"data": {
		"id": "integer",
		"name": "string",
		"email": "string"
	}
}
```

_Response (400 - Bad Request)_

```json
{
    {
        "message": "Validation error",
        "err_messages": [
            "Password is required",
            "Email is required",
            ...
        ]
    }
}
```

&nbsp;

## 2. POST /api/login

Description:

-   Register a new user to the database

Request:

-   body:

```json
{
	"email": "string",
	"password": "string"
}
```

_Response (200 - OK)_

```json
{
	"message": "Login success",
	"access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
	"message": "Login error",
	"err_messages": ["All fields are required"]
}
```

OR

```json
{
	"message": "Login error",
	"err_messages": ["Email not registered"]
}
```

OR

```json
{
	"message": "Login error",
	"err_messages": ["Invalid password"]
}
```

&nbsp;

## 3. GET /api/me

Description:

-   Register a new user to the database

Request:

-   headers:

```json
{
	"access_token": "string"
}
```

_Response (200 - OK)_

```json
{
	"id": "integer",
	"name": "string",
	"email": "string"
}
```

_Response (401 - Unauthorized)_

```json
{
	"message": "Authentication error",
	"err_messages": ["access_token not provided"]
}
```

OR

```json
{
	"message": "Authentication error",
	"err_messages": ["Invalid access_token"]
}
```

&nbsp;
