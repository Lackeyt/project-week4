#  _Pizza Parlor_

#### _Lets a user create and order a pizza_
##### __Created:__ 6/19/2020
##### __Last Updated:__ 6/19/2020 
##### By _**Tyson Lackey**_  

## Description

_The landing page lets the user select the pizza size (default small) and toppings. When submitted, the selected size and array of toppings are added as properties to a Pizza object in JS. Using a prototype method on the Pizza object, the price is calculated based on the size and number of toppings. The user is then brought to a confirmation page where they can see a price breakdown and a list of their selections. They can either click "go back" to modify their selections, or "confirm order" to submit the order. When confirmed, a confirmation message is displayed listing their order in plain english._

## Behaviors

| Spec| Example input | Example Output
| ----------- | ----------- | ----------- |
| User selects size of the pizza, size listed in output | `[x] Small` | "small" |
| User selects any number of toppings, they are listed in the output | `[x] Olives, [x] Pepperoni, [x] Sausage, [x] Bacon` | "Olives, Pepperoni, Sausage, Bacon |
| Small pizzas cost $10, medium cost $15, large cost $20 | `[x] Small` | $10 |
| Additional toppings are each $1 | `[x] Small` & `[x] Sausage, [x] Bacon` | $12 |
| "go back" button on the checkout page brings user back to the selection screen | n/a | n/a |
| "complete order" button on the checkout page brings user to the order confirmed page | n/a | n/a |

## Setup/Installation Requirements

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open by downloading:
1. Internet Browser
2. Code editor like VScode to view the codebase

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open by downloading:

1. Download this repository onto your computer
2. Double click index.html to open it in your web browser

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open via Bash/GitBash:

1. Clone this repository onto your computer:
    "git clone https://github.com/Lackeyt/project-week4"
2. Navigate into the "project-week4" directory in Visual Studio Code or preferred text editor:
3. Open the project
    "code ."
3. Open index.html in your browser:
    "open index.html"

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Directly in your Browser:

* Navigate to lackeyt.github.io/project-week4/index.html in your web browser.

## Known Bugs

* n/a

## Support and contact details

* Discord: TysonL#4409
* Email: lackeyt90@gmail.com


## Technologies Used

* Visual Studio Code
* HTML
* CSS
* Bootstrap
* Javascript
* JQuery


### License

Copyright (c) 2020 **_Tyson Lackey_**

This software is licensed under the MIT license.