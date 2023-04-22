#Formatting stuff for the OC jupyterbook

* Use descriptive names for variables to make it clear what the object represents. For example: 
````
initial_velocity = 85 # [m/s]
velocity[0] = initial_velocity # [m/s] 
````
* **Comments** in cell codes should be avoided as much as possible. Only the units should be placed as comments when necessary. **Units** inside of squared brackets, i.e. ``# [m/s]`` 
* The maximum characters in cell codes for webpage is 90, PEP-8 recommends 79
* Don't brake a **long url** to fit the max characters. It's more practical to be able to quickly copy/paste an url then to remove line breaks when pasting into the browser.

* The **Let's drop down** admonition can be used to explain the cell script instead of comments. **Let's drop down** (``class: dropdown``) example:

`````{admonition} Let's break it down
:class: dropdown

Here's a step-by-step explanation of the code:

1. ``import numpy as np``: This line imports the NumPy library and assigns it the alias "np" for easier usage in the code.

2. ``time = np.arange(0,61,1) # [s]``: This line creates an array called "time" using the ``arange`` function from NumPy. It starts from 0, goes up to 61 (exclusive) 
`````

* The **Toolbox** admonition can be used to provide the steps to answer an exercise and the functions that students could use. **Toolbox**  (``class: tip``) example: 

`````{admonition} Toolbox
:class: tip

Here is your toolbox to solve this exercise:

* Import numpy and load the data set. 
* Define the input variables and check if the conditions are satisfied.

You can use the following numpy functions (but not limited to): 
``np.loadtxt()``, ``np.all()``, ``np.max()``

`````

