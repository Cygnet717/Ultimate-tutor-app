# Ultimate Tutor
http://ultimatetutor.herokuapp.com/

## API Documentation
### Getting Started
To use API endpoints:
https://ultimatetutor-api.herokuapp.com/api

#### EndPoints
**/**
>Test
response 
    [
        {"Hello, world!"}
    ]
    

**/users**  POST
>Adds a new user

send 
    [
        {"username": "Picard", "password": "Makeitso#1"}
    ]


*username must be unique, password must contain 8 characters long and inclue Capital, number, and one of #?!@$%^&*-

response  {user_id: 99, username: ""}

**/auth/login**  POST
>Logsin user

send 
    {"username": "Picard", "password": "Makeitso#1"}

response 
    {"authToken": *token*, "user_id": 99}

**/decks/**   GET
>Gets all decks a user has made

send 
    [
        {"user_id": 99}
    ]

response


response 
    {
    "deck_id": 100,
    "deck_name": "Birds",
    "user_id": 99,
    "white": null,
    "blue": null,
    "black": null,
    "red": null,
    "green": null
    }  
*columns white, blue, black, red, green are for future use

**/decks/**   POST
>adds a deck to a users account

send 
    {"user_id": 99, "deck_name": "The Enterprise"}

response 
    {
    "deck_id": 115,
    "deck_name": "The Enterprise",
    "user_id": 99,
    "white": null,
    "blue": null,
    "black": null,
    "red": null,
    "green": null
    }
    *columns white, blue, black, red, green are for future use

**/decks/**  DELETE
>Deletes deck from users account

send

    [
        {"deck_id": 100}
    ]
    
response

    [
        {message: "deleted"}
    ]

**/decks/:deck_id**  GET
>Get all cards in a deck

send

    [
        {"deck_id": 115}
    ]

response

    [
        {
        "card_id": 159,
        "card_name": "Abundance",
        "image_url": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130483&type=card",
        "multiverseid": 130483,
        "deck_id": 78,
        "type": "Enchantment"
    },
    {
        "card_id": 160,
        "card_name": "Ancestor"s Chosen",
        "image_url": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card",
        "multiverseid": 130550,
        "deck_id": 78,
        "type": "Creature"
    }
    ]

**/decks/:deck_id**  POST
>Add card to existing deck

send

    [
        {}
    ]

Screenshot(s) of your app. This makes your app description much easier to understand.
A summary section. This should have a concise explanation of what your app does. Try to frame this from the standpoint of what the user does, or what the app enables for the user.

HTML, CSS, javaScript, React
