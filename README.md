# Alumni API Documentation

This document provides information about the AlumniAPI.

## Introduction

This API allows users to perform various operations related to contacting an Alumni. This API is built to enable smooth and secure communication between Students and Alumni.

## Base URL

The base URL for the API is: `https://alumni-api.onrender.com/`

## Authentication



## Endpoints

The following endpoints are available in the Sample API:

### Post

#### `GET /getPosts`

Description: Get all Posts made by Alumni as well as Student Council

Example Response:{
    "posts": [
        {
            "name": "Sunny",
            "title": "Technical Fest",
            "content": "Atrang"
        }
    ]
}

#### `POST /addPost`

Description: Adds a Post


Example Request : {
    "name":"Sunny",
    "title":"Technical Fest",
    "content":"Atrang"
}

### Alumni

#### `GET /alumni/getAlumni`

Description: Gets list of alumni
 
Example Response:{
    "alumni": [
        {
            "alumni_id": 3,
            "name": "Mayank Sonkar",
            "grad_year": "2023",
            "contact_info": "Linkedin",
            "company": "ShortLoop"
        }
    ]
}

#### `GET /alumni/getAlumni/:company`

Description: Filters Alumni by Company

Parameters:
- `company`: company name

Example Response:{
    "alumni": [
        {
            "alumni_id": 3,
            "name": "Mayank Sonkar",
            "grad_year": "2023",
            "contact_info": "Linkedin",
            "company": "ShortLoop"
        }
    ]
}

#### `GET /alumni/getAlumni/:grad_year`

Description: Filters Alumni by Graduation Year

Parameters:
- `grad_year`: Graduation Year

Example Response:{
    "alumni": [
        {
            "alumni_id": 3,
            "name": "Mayank Sonkar",
            "grad_year": "2023",
            "contact_info": "Linkedin",
            "company": "ShortLoop"
        }
    ]
}

#### `POST /alumni/addAlumni`

Description: Add Alumni

Example Request : {
    "alumni_id":"004",
    "name":"Krishna Laddha",
    "grad_year":"2023",
    "contact_info":"linkedin_link",
    "company":"Celebal"
}



