---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.14.5
kernelspec:
  display_name: Python 3.7
  language: python
  name: python37
---

+++ {"id": "7vcVhbkFS81g", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<figure>
  <IMG SRC="https://raw.githubusercontent.com/mbakker7/exploratory_computing_with_python/master/tudelft_logo.png" WIDTH=250 ALIGN="right">
</figure>

# Python Notebook #1


## Table of Contents
<ul>
    <li> <a href="#intro_course">1.1 Introduction to the Course</a>
    <li> <a href="#intro">1.2 Introduction to Python and Python Notebooks</a>
    <li> <a href="#first_code">1.3 First Python Script</a>
    <li> <a href="#var">1.4 Python Variables </a>
    <li> <a href="#oper">1.5 Python Operators </a>
    <li> <a href="#func">1.6 Python Functions </a>
</ul>

+++ {"id": "a73f12d9", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div id="intro_course"><br>
<h2> 1.1 Introduction to the Course </h2>
<h3> Why do you need Python? </h3><br>
    
<div style="text-align: justify">Python is a computer programming language that is widely used in both academia and industries related to Civil Engineering, Environmental Engineering and Applied Earth Sciences. Being skilled in Python will help you on multiple occasions, including in your master courses. With this set of notebooks we will guide you through the basics of Python programming. As an additional study material for learning Python basics, we advise the open source book <a href="https://greenteapress.com/wp/think-python-2e/">"Think Python 2nd Edition" by Allen B. Downey</a>. It describes in more detail what is covered in the Notebooks of this course.</div>
<br>
<div style="text-align: justify">Don't worry if you some concepts are not (completely) clear, you'll improve your skills along the way and can always use these notebooks to look things up later.</div>


+++ {"id": "5665eaf2", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div id="intro_course">
<span id='computer_abilities'><h3>What can computers do for us? </h3> </span><br>
<div style="text-align: justify">As an engineer or scientist, you will deal with units of information which are called <b>data</b>. The most important tasks that a computer can do for us are:<br><br>
1. Reading data<br>
2. Processing data<br>
3. Visualizing data<br><br>
These are tasks that require many repetitions and high precision.<br><br> 
1. Reading data<br>
Reading data means the computer acquires data from a source and places it into its volatile memory for processing. Volatile memory keeps the data stored until the power supply is interrupted. The way data is stored in a computer determines how the computer will be able to use it.<br> 
<br>2. Processing data<br>
Data processing is the manipulation of the stored data in a system. After processing data by performing transformations, calculations, and more, you get an output; results.
<br><br>3. Visualizing data   
We map data (original or found) to graphic elements to communicate clearly and efficiently the information contained in the data. A graphic element is an element of a chart, such as a line or a point in the chart.</div>

+++ {"id": "5581ecc5", "nbgrader": {"grade": false, "locked": true, "solution": false}}

### What is programming?
<span id='programming'>
<br>
<div style="text-align: justify">Programming is giving your computer a list of instructions for computations in a language it can understand. In your case, this language is Python. A computation is a series of arithmetical ("math") and non-arithmetical ("non-math") steps that transform input to output (result).
There are five different kinds of instructions for computations you use. By ordering and combining them, the computer can achieve results that fulfill the three tasks described earlier. The five kinds of instructions are:<br><br>
<b>input:</b><br>
    Insert data from a file, the network, other devices, or simply by typing it in.
    
   <b>output:</b><br>
    Display data on the screen, save them in a file, send it over the network, etc.

<b>math:</b><br>
    Perform basic mathematical operations like addition and multiplication.

<b>conditional execution:</b><br>
    Check for certain conditions before further instruction.

<b>repetition:</b><br>
    Perform instructions repeatedly, usually with some variation.</div>

+++ {"id": "0ef8fd20", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div id="intro"><br>
<h2> 1.2 Introduction to Python and Python Notebooks</h2><br>
    
<div style="text-align: justify">The features of Python are what make it so popular. From the definition available on the corresponding Wiki page: <i> "Python is an <b>interpreted</b> <b>high-level</b> <b>general-purpose</b> <b>programming language</b>. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs, as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects."</i>. Quite a simple, yet concise description due to the meaning hidden behind each buzzword:
    

<ul>
    <li> <b>Interpreted</b> means that there is an interpreter, a software tool, which reads and performs instructions written in Python. If your laptop, phone, or refrigerator has the interpreter, it can run most of the Python scripts!
    <li> <b>High-level</b> means that the programming language operates with abstract and more easily understandable concepts. In other words, you don't have to write or understand, code related to the hardware part of your machine (like binary code or assembly).
    <li> <b>General-purpose</b> means that the amount of Python application fields are endless. You can write Python scripts to manage and automate some primitive tasks for yourself, you can use it for data science, create your own machine / deep learning project, write your personal web application or even develop a game. 
    <li> <b> Programming language </b>means a set of specific predefined semantics, instructions, and syntax rules, which are used for writing necessary instructions. It is strictly defined, meaning that 99.99% of all errors in the code are made by the coder, not by the computer. :(
    </ul></div>


<div style="text-align: justify">
Python scripts run with the help of a Python interpreter, but they can be written by using different software tools. Just like as you write your essay (you can type it in Word, Google Docs, Overleaf, or even on plain paper) you can write your Python code with different editors. You can write your code in different editors. You could use the default notepad, notepad++, find a proper website with an inbuilt code editor & interpreter (<a href="https://ideone.com/">IDEone</a>, for example), or use specialized Python code editors (Spyder, PyCharm, Visual Studio, etc). In all cases you will produce a set of instructions, which are stored in a file with the <b>*.py</b> extension and the interpreter will run it completely (from top to bottom).</div>
<div style="text-align: justify">
For your bachelor program you are going to use a slightly different approach to developing a Python script — you are going to use <b> Python Notebooks </b> by using Vocareum, Google Colab, Jupyter Notebook, or Jupyter Lab. These notebooks allow you to run your script in parts, blocks, or in other words — in cells. Just select a cell with the code part you want to run and press the <b>'run cell'</b> button (or <b>shift + enter</b>). Running cell blocks is more convenient for data analysis since sometimes you just need to change a small part of your code or add some explanation, math formulas, or figures. Therefore, re-running only the corresponding cell is much more efficient.
</div></div>

+++ {"id": "c0279304", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div id="first_code"><br><h2> 1.3 First Python Script</h2><br>So, it is time for your first Python script. It is located beneath. Go ahead, run it.
</div>

```{code-cell} ipython3
---
colab:
  base_uri: https://localhost:8080/
id: 3d1f70cf
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: ee5c28c1-473e-4c2d-9a33-b15b51fffc5f
---
# My First Python Script

message = 'Hello world!'
print(message)
```

+++ {"id": "7a16f396", "nbgrader": {"grade": false, "locked": true, "solution": false}}

Now, let's analyze it.<br><br>
<div style="text-align: justify">
First line: <b><code># My First Python Script</code></b> is a <b>comment</b>, which is used just to explain and/or put useful information about the code next to it. If you need to create a comment — just type a <b><code>#</code></b> symbol and write your text after it. The interpreter does nothing with it — the comments are there just as useful information for you or another reader.<br><br> </div>
<div style="text-align: justify">
Second line: <b><code>message = 'Hello world!'</code></b> creates a <b>variable</b> called <i> message </i> and assigns the text literal (string) <i>Hello world!</i> to it, by using the operator <i>=</i> (equal sign). Variables are used to store all data you use in your code.</div><br>
<div style="text-align: justify">
Third line: <b><code>print(message)</code></b> calls the <b>function</b><code>print()</code> and passes the variable <i>message</i> to it. A function is just a set of encapsulated code, which is tailored to perform a certain action. This specific function outputs the content of everything you pass to it. Since the variable <i>message</i> had a small line of text in it, the function <b><code>print()</code></b> outputs that message.</div>
<div style="text-align: justify">
<br>This script is quite primitive and simple but it represents the main idea of programming in Python. You have data (which is stored in variables) and you perform an operation on it: by using the inbuilt <b><code>print()</code></b> function. In addition, you could create your own functions. </div>

+++ {"id": "TcDyxZ7AS3Uz", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div id='var'></div><br><h2> 1.4 Python Variables </h2><br><div style="text-align: justify">One of the most powerful features of a programming language is the ability to create and manipulate
variables. A variable is a labeled storage that refers to a value. They are usually used in a way to make the code more readable, allowing reusability of your code.<br><br>As it was mentioned previously, Python is a high-level programming language. For that, it uses concepts of <b>Class</b> and <b>Object</b>. In short, a <b>Class</b> is a defined model or a data structure, it describes how the data of that class can be described and how it can be manipulated, and an <b>Object</b> or <b>Instance</b> is its realization. In other words, think about your favorite meal: the recipe is the <b>Class</b> of your meal and when you decide to use the recipe and cook it — you create an <b>Object</b> of that <b>Class</b>. Variables are the way how objects are stored and processed.</div>


### Rules for variable names
* names can not start with a number
* names can not contain spaces, use _ instead
* names can not contain any of these symbols:

      :'",<>/?|\!@#%^&*~-+
<div style="text-align: justify">      
* it's considered best practice ([PEP8](https://www.python.org/dev/peps/pep-0008/#function-and-variable-names)) that names are lowercase with underscores
* avoid using Python built-in keywords like `list` and `str`</div>
    

+++ {"id": "OLzFLmBnS3Uz", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<h3>Assigning Variables</h3><br><div style="text-align: justify">Variable assignment follows <b><code>variable_name = value</code></b>, where a single equal sign $=$ is an <b>assignment operator</b>. More on operators will be covered in the next section. Let's see a few examples of how we can do this.

```{code-cell} ipython3
---
id: -oXjFB0TS3U0
nbgrader:
  grade: false
  locked: true
  solution: false
---
# Let's create an object called "a" and assign it the number 5
a = 5
```

+++ {"id": "loj_CSZ3S3U0", "nbgrader": {"grade": false, "locked": true, "solution": false}}

Now if I call `a` in my Python script, Python will treat it as the number $5$.

```{code-cell} ipython3
---
id: -NydcpOmS3U0
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: 0f54e2c6-c3b9-4247-94cd-0b341a2ad352
---
# Adding the objects
a + a
```

+++ {"id": "xPQ0wjwUS3U0", "nbgrader": {"grade": false, "locked": true, "solution": false}}

What happens on reassignment? Will Python let us write over it?

```{code-cell} ipython3
---
id: q-fGZ0wMS3U0
nbgrader:
  grade: false
  locked: true
  solution: false
---
# Reassignment
a = 20
```

```{code-cell} ipython3
---
id: d-6rzYcpS3U1
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: 5e2f705f-9f13-4a46-cdc9-cac34cbc12e7
---
# Check
print(a)
```

+++ {"id": "8CcorXSqS3U1", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div style="text-align: justify">Yes! Python allows you to overwrite assigned variable names. We can also use the variables themselves when doing the reassignment.

+++ {"id": "uqCmRVkbS3U1", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div style="text-align: justify">Since <b><code>a = 20</code></b> was the last assignment to our variable <b><code>a</code></b>, you can keep using <b><code>a</code></b> in place of the number <b><code>20</code></b>:

```{code-cell} ipython3
---
id: QMktLeFOS3U2
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: a9467aa2-393f-4961-cec0-4c36dac6e26d
---
a + a
```

+++ {"id": "AjrlLAw7S3U2", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div style="text-align: justify">Instead of writing <b><code>a+a</code></b>, Python has a built-in shortcut for these simple operations.<br><br>You can add, subtract, multiply and divide numbers with reassignment using <b><code>+=</code></b>, <b><code>-=</code></b>, <b><code>*=</code></b>, and <b><code>/=</code></b>, respectively.

```{code-cell} ipython3
---
id: ho172OFAS3U2
nbgrader:
  grade: false
  locked: true
  solution: false
---
a += 10
```

+++ {"id": "de87302a", "nbgrader": {"grade": false, "locked": true, "solution": false}}

The above code will add **`10`** to the variable **`a`** every time you run that cell. 

Try it yourself, run it a few times and then run the below cell to see what's the value of **`a`**
.

```{code-cell} ipython3
---
id: tzz54psQS3U4
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: 9227bb53-b2b5-4cf1-e438-eb61095b1b1e
---
print(a)
```

+++ {"id": "df4c695a", "nbgrader": {"grade": false, "locked": true, "solution": false}}

Below an example of a code that will double **`a`** every time that you run that cell.

```{code-cell} ipython3
---
id: Sv2xzyhVS3U9
nbgrader:
  grade: false
  locked: true
  solution: false
---
a *= 2
print(a)
```

+++ {"id": "gH1ebT4sS3VB", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<h3>Determining variable type with <b><code>type()</code></b></h3><br><div style="text-align: justify">You can check what type of object is assigned to a variable using Python's built-in <b><code>type()</code></b> function. Common data types include:</div>


* **int** (for integer numbers)
* **float** (for floating point / all real numbers)
* **str** (for string/text)
* **bool** (for Boolean True/False)
* **list**
* **tuple**
* **dict** 
* **set**


<div class="alert alert-block alert-warning"><center><b>Always check the type of your variables when debugging!</b></center></div>

+++ {"id": "87e243a7", "nbgrader": {"grade": false, "locked": true, "solution": false}}

Below a few examples:

```{code-cell} ipython3
---
id: -DASPgHDS3VC
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: 78ab767e-0978-4526-81e0-c79b369c2ae6
---
type(a)
```

```{code-cell} ipython3
---
id: 151cff3a
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: 483b66c5-0363-43f4-f716-46f6ad86721f
---
float_var = 3.1415
type(float_var)
```

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
a = 0.3
b = 0.2
c = a-b
print(c)
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

You probably noticed that Python wrote $0.09999999999999998$ instead of $1$ when calculating $0.3 - 0.2$. Ignore it for now, this is explained later in this Notebook.

```{code-cell} ipython3
---
id: ced9ae02
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: 49d1b418-5b8f-48a9-c27f-84c5ccba21d1
---
type(1<2)
```

+++ {"id": "cbabd161", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div style="text-align: justify">Boolean variables can only take on two values: <b><code>True</code></b> or <b><code>False</code></b>. They are often used to check conditions.<br><br>More examples on this in Section 1.5.

```{code-cell} ipython3
---
id: 6e138f75
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: 3a510470-c9ef-4501-9772-99fc52253c7f
---
1<2
```

```{code-cell} ipython3
---
id: 4036bc6d
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: b34edd29-6020-47ec-cd03-14e0b1607413
---
# the variable from the first script

type(message)
```

+++ {"id": "b358494d", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div style="text-align: justify"><b>Strings</b> are variables represented in between <b><code>' '</code></b> or <b><code>" "</code></b>.<br><br>They are a <b>sequence</b> of values, therefore you are able to access and manipulate every character individually.<br><br>This is done with the bracket operator <b><code>[]</code></b>, which works as an <b>index</b>.<br><br>Let's take a look at our first variable from this notebook: <b><code>message</code></b>.

```{code-cell} ipython3
---
id: 493e9703
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: 18bf0c72-1e6d-49cc-90ed-79cd3793f345
---
message
```

```{code-cell} ipython3
---
id: 9509e9ae
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: 71b77b96-56ac-4fec-eeec-5de598c393f2
---
message[1]
```

+++ {"id": "d378e554", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<b>Nani???</b>

+++ {"id": "52be9a23", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div style="text-align: justify">Why index <b><code>[1]</code></b> gave us the second letter? For most people, the first letter of the sentence <b><code>Hello world!</code></b> is <b><code>H</code></b> not <b><code>e</code></b>.</div>

So.. what happened?

In Python, indexing starts at **`[0]`**. **`H`** is the *zero-th* character of **`Hello world!`**.

```{code-cell} ipython3
---
id: 00bd0987
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: c62d6076-38bf-4a61-f153-aa50ca7c75fa
---
message[0]
```

+++ {"id": "7cc759c9", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div style="text-align: justify">You can also access the last value of a string using the index <b><code>[-1]</code></b>, the before-last using <b><code>[-2]</code></b> and so forth.. This will turn out to be very useful!

```{code-cell} ipython3
---
id: 6f9dbc4a
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: 2b4ac665-2aba-42a0-e5ea-bc8621f1574e
---
message[-1]
```

+++ {"id": "27920277", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div style="text-align: justify">Strings are also immutable. You cannot reassign a new value for one of the characters. You will have to create a new string for that.

```{code-cell} ipython3
---
id: '11579009'
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: 28eb007f-7adf-4108-fb8a-6db5e0bcfa05
---
message[0] = 'J'
```

+++ {"id": "5777fe12", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div style="text-align: justify">You can also add (i.e. concatenate) strings and characters. But it will create a new string, it will not modify the old one (since they are immutable).

```{code-cell} ipython3
---
id: 5a8eab89
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: f886a8eb-8238-4c49-9c54-caae38e268b2
---
message + message
```

```{code-cell} ipython3
---
id: a2164ca2
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: dde3141d-6812-454f-d960-4763d4552dbc
---
message[0]+message[1]+message[2]+message[3]
```

+++ {"id": "88633538", "nbgrader": {"grade": false, "locked": true, "solution": false}}


<div style="text-align: justify">   
A segment of a string is called a <b>slice</b>. Selecting a slice is similar to selecting a character. Using the operator <b><code>:</code></b> you select the first value that you want to <b>get</b>, and the first value you want to <b>leave out</b> of the slice, for example:<br><br></div>

<div style="text-align: justify">Let's say we want to write the word <b>Hell</b> using our variable <b><code>message</code></b>, without having to type as much as above.</div>

1) Which letter is the first we want to <b>get</b>? **`H`**, which has index **`[0]`**.

2) Which letter is the first we want to <b>leave out</b>? **`o`**, which has index **`[4]`**. So...

```{code-cell} ipython3
---
id: c65d21c0
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: d2317d7f-3f16-4e60-8f99-a9dc7c8543d8
---
message[0:4]
```

+++ {"id": "ac154077", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div style="text-align: justify">One can also use our variable <code>message</code> to write the sentence <b><code>Hold door</code></b>.</div> 

Try it! Or.. check the solution below.

```{code-cell} ipython3
:id: 1694b28d

# code line for you to try!
...
```

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
# Solution
message[0]+message[4]+message[-3:-1]+message[5]+message[-2]+2*message[4]+message[-4]
```

+++ {"id": "b5eea88c", "nbgrader": {"grade": false, "locked": true, "solution": false}}


<div class="alert alert-block alert-success"><center><b>Real life example: Analyzing satellite data<br><br></b>Sentinel data title is formatted as: <b>S1A_IW_SLC__1SDV_20181205T015821_20181205T015851_024884_02BD8C_8700</b><br>
    where each part means something, S1A means Sentinel-1A, IW means Interferometric Wide Swath<br> 20181205T015821 is a date, 2018 12 05, at 01h58m21s, etc.<br><br> Therefore, being able to manipulate this string is fundamental in order to organize and select satellite data. We'll come back to this in Exercise 1.5.4. </center></div>

***

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<h3>Dynamic Typing</h3><br><div style="text-align: justify">The way the computer is able to use the stored data becomes an attribute of the stored data. This attribute is called a <b>data type</b>. Python uses <b>dynamic typing</b>, meaning you can also reassign variables to different data types. This makes Python very flexible in assigning data types; it differs from other languages that are <b>statically typed</b>.</div>

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

#### Pros and Cons of Dynamic Typing
##### Pros of Dynamic Typing
* very easy to work with
* faster development time

##### Cons of Dynamic Typing
* may result in unexpected bugs!
* you need to be aware of **`type()`**.

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
a = 5
print('Type of a is =',type(a))
a = 'string'
print('Type of a is =',type(a))
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

See, now **`a`** is no longer an **`int`** type but a **`str`** type

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<h3>Casting types</h3><br><div style="text-align: justify">Sometimes you want to change the type of a variable. For example, there is no point in arithmetically adding a number to a string. Or, when estimating the amount of oil wells, those should be integers (how would you build $2.5$ wells?). These two problems can be sometimes solved with casting.<br><br><b>Casting</b> is a procedure of changing variables type. Actually, you create a new variable with the requested data type using the variable you want to alter.</div><br>Examples are shown below.
    

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
string_number = '123'
print(string_number, type(string_number))

integer_number = int(string_number)
print(integer_number, type(integer_number))
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div style="text-align: justify">As you can see, both variables look the same in the output but their type now is different. Because of that, the cell below will result in an error.

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
string_number + 5
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

But the next cell will run normally.

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
integer_number + 5
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<h3>How do computers read variables?</h3><br><div style="text-align: justify">Computers and humans have different views on data. We, fellow humans, can easily read poetry and enjoy music. Computers are limited in that sense and they can operate on a really primitive level. They cannot even read normal text, for a computer, everything is represented with numbers. One of the popular text encodings <b>ASCII</b> has a table, where every symbol there is an integer number assigned to it. Letter 'a', for instance, has a value of $97$, and letter 'A' has a value of $65$. The value of 'B' is $66$ and if we want to take the letter before 'B' we just calculate $66 - 1$. You don't have to open an alphabet and, therefore, it is easier to work with numbers than with letters.<br><br>But even for numbers, computers have their own approach. On a really low level, all numbers are stored and operated in their binary form. Number $5$ becomes $101$, because $5 = 1\cdot2^2 + 0 \cdot2^1 + 1\cdot2^0$. And since all symbols are also represented with numbers, it is not hard for computers to operate with them. But what about the floating numbers? How do you represent $1.5$ or $\pi$? Well, computers try to represent them with binary code, which introduces some problems. In order to represent a fraction, they need an infinite amount of bits, to obtain the precision we use in math. But that's impossible! In other words, small errors will always be present in calculations as simple as $0.3 - 0.2$. From your math classes you know that the result of $0.3 - 0.2 = 0.1$, not $0.10001$ or $0.09999$. But try to run the cell below and see the result.</div>

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
0.3 - 0.1
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div style="text-align: justify">It is not what you would expect to see, right? The result has an error of $\approx 10^{-15}$. In most cases, it can be neglected but be careful when comparing <b><code>float</code></b> and <b><code>int</code></b> numbers, as shown below. </div>

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
0.2 == 0.3-0.1
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

Indeed, $0.2 \neq 0.19999999999999998$.

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div style="text-align: justify">
    Within this course, in the end of each section you'll find exercises related to the subject that was just covered. There are three types of exercises: normal, fixing and searching.
    Normal exercises are straight forward exercises that you should be able to solve without much trouble.
    Fixing exercises are exercises where some piece of code is already written and you need to debug it (find the root of the error and fix it).
    Searching exercises are exercises that purposefully incorporate subjects that were not covered yet, in an attempt to encourage you to try and solve issues you haven't learned about yet. <br><br>
    Now let's practice a bit.

+++ {"id": "GultfezaS3VN", "nbgrader": {"grade": false, "locked": true, "solution": false}}


<div class="alert alert-block alert-info"><b>Exercise 1.4.1<br><br></b><div style="text-align: justify">You know that your taxes is the product of your income and the tax rate. Complete the line below to assign the correct calculation for the <code>my_taxes</code> variable. Use the <code>my_income</code> and <code>tax_rate</code> variables for that.<br> 
</div>

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-warning"><b></b> The dotted lines (...) below mark the location where you should change the code yourself! </div>

```{code-cell} ipython3
:id: 5LH1-9rqS3VN

my_income = 100
tax_rate = 0.1
my_taxes = ...

###BEGIN SOLUTION TEMPLATE=
my_taxes = my_income * tax_rate
###END SOLUTION
```

```{code-cell} ipython3
---
nbgrader:
  grade: true
  grade_id: Q1.4.1
  locked: true
  points: '1'
  solution: false
---
###BEGIN HIDDEN TESTS
assert type(my_taxes) == float, '1.4.1 Incorrect variable type'
assert abs(my_taxes - 10) <= 1e-6, '1.4.1  Correct variable type but incorrect value'
###END HIDDEN TESTS
```

+++ {"id": "YY8Ff2wFS3VO", "nbgrader": {"grade": false, "locked": true, "solution": false}}

Use the cell block below to find out what is the **`type`** of the variable **`my_taxes`**

```{code-cell} ipython3
:id: 6qi5Su5fS3VO

# use this line to check the type of the variable my_taxes
...

```

+++ {"id": "Pq9kETciS3VO", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-info"><b>Exercise 1.4.2<br><br></b><div style="text-align: justify">What is the type of the result of the expression $3 + 1.5 + 4?$ <br>Assign the type to the variable beneath (e.g. if you think it is an integer then <code>expression_type = int</code>)
</div>

```{code-cell} ipython3
:id: fJnI43XxS3VO

expression_type = ...
###BEGIN SOLUTION TEMPLATE=
expression_type = float
###END SOLUTION
```

```{code-cell} ipython3
---
nbgrader:
  grade: true
  grade_id: Q1.4.2
  locked: true
  points: '1'
  solution: false
---
###BEGIN HIDDEN TESTS
assert expression_type == float, '1.4.2 Incorrect answer'
###END HIDDEN TESTS
```

+++ {"id": "cc546f8c", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-info"><b>Exercise 1.4.3<br><br></b><div style="text-align: justify">Print the letter <code>'w'</code> of the sentence <code>'Hello world!'</code> using indexing of the variable <code>sentence</code>. <br>   
</div>

```{code-cell} ipython3
:id: 93c4ffe3

sentence = 'Hello world!'
letter_w = ...

###BEGIN SOLUTION TEMPLATE=
letter_w = sentence[6]
###END SOLUTION
print(letter_w)
```

```{code-cell} ipython3
---
nbgrader:
  grade: true
  grade_id: Q1.4.3
  locked: true
  points: '1'
  solution: false
---
###BEGIN HIDDEN TESTS
assert letter_w == 'w', '1.4.3 Incorrect answer'
###END HIDDEN TESTS
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div style="text-align: justify">
In the following exercise you will be using a piece of code, which was written by other people. It can contain concepts you haven't encountered yet but you will have to make it work! You need to practice with using code you don't understand completely, as you want to be able to use programs written by other people. Just like with calculators — if you add two numbers you get the result you expect to get. But you don't know exactly how that piece of plastics with electronic components performs that calculation.</div><br>

<div style="text-align: justify">
In order to approach the problem, start from the point of error. If your error cannot be solved there, work your way backwards through the code. Only try to understand the parts that are necessary to fix your problem, and avoid changing parts you know that work.</div>

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-info">
<div style="text-align: justify">
    <b>(Fixing) Exercise 1.4.4<br><br>
    </b>There are 2 types of numbers in Python: integer numbers and floating point numbers. Both have overlapping and different applications. For example, counting rocks will require only integers (1 rock, 2 rocks, 3 rocks, etc), while their weight can be expressed in both <i>int</i> and <i>float</i> (depending on the required accuracy). <br>  
    Beneath you can see a small dataset of the measured daily temperatures and a filter function, which is used to remove incorrect measurements. Just run the cell, you don't have to change anything there and it is not important to understand it completely for now.
</div></div>

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
temp_data = [12.0, 13.5, 11.0, 12.7, 67.5, 11.8] # temperature measurements in Delft, in Celsius

# A function to remove erroneous measurements
def filter_errors(data, error_id):
    print('Data before filtering', data)
    
    del temp_data[error_id - 1] # deleting the erroneous measurement
    
    print('Data after filtering', data)
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-info">
<div style="text-align: justify">
In the code cell below a student wanted to indicate the position of the erroneous measurement, so it can be later filtered out during data analysis. However, it wasn't removed. The filter is known to work flawlessly (no errors there), meaning that the mistake happened in the indication step. It is known that the corrupted sample is the 5th in the dataset (5th because the first element has index 0! Python has a zero-based indexing).
<br><br>
Your task is to fix it and remove the error!
    </div></div>

```{code-cell} ipython3
---
nbgrader:
  grade: false
  grade_id: Q1.4
  locked: false
  points: '1'
  solution: false
---
error_id = 5.0 # index of erroneous measurement
###BEGIN SOLUTION TEMPLATE=
error_id = 5
###END SOLUTION
filter_errors(temp_data, error_id)
```

```{code-cell} ipython3
---
nbgrader:
  grade: true
  grade_id: Q1.4.4
  locked: true
  points: '1'
  solution: false
---
###BEGIN HIDDEN TESTS
assert type(error_id) == int, '1.4.4 Incorrect variable type'
assert error_id == 5, '1.4.4 Correct variable type but incorrect value'


###END HIDDEN TESTS
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-info">
<div style="text-align: justify">
<b>(Searching) Exercise 1.4.5 </b><br><br>
There are also other data types in Python, which were not mentioned in this part (in case they are not as useful or will be introduced later). For instance, <b>Complex</b> is one of them. The sad truth is that every software developer Googles a lot. It's not because she/he is lazy or incompetent. It is because programming languages are constantly updated and some tools are limited to a narrow field of applications. It is impractical to learn everything at once, therefore every coder has learned how to look up the functionality their task requires. Therefore, it is crucial for you to learn how to Google as well. Complex type is used in Python to represent complex numbers. If you haven't heard about them — a complex number is a number, which has a real and an imaginary part. For example, $x = 17 + 5i$. Here, $x$ is a complex number with a real part of $17$ and an imaginary part of $5$.<br><br> Your task is to create a variable <code>my_complex_num</code> of Complex type and assign a $3 + 2i$ value to it. For that you will have to Google a bit. Try to look for something like "Python complex variables". Python is very popular and you will be able to find everything you need. Make sure to filter the information you need — not everything you will find will be useful for this simple exercise.
</div></div>

```{code-cell} ipython3
my_complex_var = ...
###BEGIN SOLUTION TEMPLATE=
my_complex_var = 3 + 2j
###END SOLUTION
```

```{code-cell} ipython3
---
nbgrader:
  grade: true
  grade_id: Q1.4.5
  locked: true
  points: '1'
  solution: false
---
###BEGIN HIDDEN TESTS
assert type(my_complex_var) == complex, '1.4.5 Incorrect variable type'
assert my_complex_var == 3+2j, '1.4.5 Correct variable type but incorrect value'
###END HIDDEN TESTS
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-danger"><b>Additional study material:</b>

* Official Python Documentation - https://docs.python.org/3/tutorial/introduction.html
* https://realpython.com/python-variables/
* Think Python (2nd ed.) - Section 2

+++ {"id": "Tpeh8gLqS3V4", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div id='oper'></div><h2> 1.5 Python Operators</h2><div style="text-align: justify"><br>Python <b>operators</b> are used to perform operations on variables and values. They are symbols that represent a form of computation; think of addition or multiplication. The value to which this computation is applied to is called the <i>'operand'</i>. Most of the common operators you will recognize from mathematics.
    </div>

+++ {"id": "1yHso5KtS3WC", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<h3> Arithmetic Operators </h3>

| Math sign | Python sign | name |
| :-: | :-: |:-:|
| + | + | addition |
| - | - | subtraction |
| * | * | multiplication |
| / | / | division |
| ^ | ** | exponentiation |
| mod | % | modulus |
|  | // | floor division |

<div style="text-align: justify">
<br>Most of the mathematical symbols stay the same when transforming a piece of mathematics to Python. Note that the exponentiation sign is a double multiplication sign!<br><br>
The last two operators, modulus and floor division, can be defined as the following:<br>
- modulus: return the remainder of a division<br>
- floor division: returns the integer/whole part of the division
    </div>

+++ {"id": "Ijx03oCKS3WD", "nbgrader": {"grade": false, "locked": true, "solution": false}}

Now we will provide some small examples

    a: multiply 4 by 3 and then add 2
    b: 2 to the power of 4 plus 1
    c: take the modulus of 352 over 23
    d: the floor division of 352 over 23


```{code-cell} ipython3
---
colab:
  base_uri: https://localhost:8080/
id: wOPRR9oLS3WD
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: d888e6de-7185-453a-a33e-dc2f38817e9f
---
a = 2 + 4 * 3
print(a)
```

```{code-cell} ipython3
---
colab:
  base_uri: https://localhost:8080/
id: V50AuE4US3WD
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: d7518f7e-535f-4ea2-a233-06e71de779be
---
b = 2**4 + 1
print(b)
```

```{code-cell} ipython3
---
colab:
  base_uri: https://localhost:8080/
id: a674y2ZoS3WE
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: 2b8bfe90-f5db-40b7-beac-119d63142e3f
---
c = 352 % 23
print(c)
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

Explanation: $352 = 15 \times 23 + 7$, therefore the **modulus operator** returns the value $7$.

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
d = 352 // 23
print(d)
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

Explanation: $352 = 15 \times 23 + 7$, therefore the **floor division operator** returns the value $15$.

+++ {"id": "w3HQ3fRHS3WE", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-warning"><div style="text-align: justify">Besides making sure that you use the right operators when writing mathematical functions, it is also important that you pay attention to the order of operators. When not done right, this can cause huge changes in the outcome. Therefore, when writing out large equations it is easier to use parentheses or split it into multiple variables. e.g.:<br><br>$$y = x\tan\theta - \frac{1}{2v_0^2}\frac{g x^2}{\cos^2\theta} + y_0$$<br><br>You could split this equation into four distinct variables:<br><br>1) var_1 $ = x\tan\theta$<br>2) var_2 $= \frac{1}{2v_0^2}$<br>3) var_3 $= \frac{g x^2}{\cos^2\theta}$<br>4) var_4 $= y_0$<br><br>And then re-write it as <code>y = var_1 - (var_2 * var_3) + var_4

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
parenthesis_before = (2 + 4) * 3
print('With parenthesis before =',parenthesis_before)
parenthesis_after = 2 + (4 * 3)
print('With parenthesis after =',parenthesis_after)
```

+++ {"id": "3BXmdvSbS3WE", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-info">
<div style="text-align: justify">
<b>Exercise 1.5.1</b><br><br>
Given that we have a rectangle with a height of $3$ cm, width of $5$ cm and a cutout circle of radius $0.6$ cm, as shown below. 

![image.png](attachment:image.png)

<br>What will the remainder area of the rectangle be? Hint: $A_{circle} = \pi r^2$
</div></div>



```{code-cell} ipython3
:id: qJWIoUhmS3WE

# variables for the rectangle
rect_h = ...
rect_w = ...

# variables for the sphere
pi = 3.14159265359
r = ...

# calculating area
circle_area = ...
rect_area = ... 
remaining_area = ...

###BEGIN SOLUTION TEMPLATE=
rect_h = 3
rect_w = 5
pi = 3.14159265359
r = 0.6

circle_area = pi * r ** 2
rect_area = rect_h * rect_w
remaining_area = rect_area - circle_area
###END SOLUTION
print(f'The remaining area is {remaining_area:.2f} cm^2')
```

```{code-cell} ipython3
---
colab:
  base_uri: https://localhost:8080/
id: l5dL_rtpS3WE
nbgrader:
  grade: true
  grade_id: Q1.5.1
  locked: true
  points: '1'
  solution: false
outputId: 0f997b0e-ccaa-4d77-f88c-e36a03706e40
tags: ['{"tags":', '["hide-input"', ']}']
---
###BEGIN HIDDEN TESTS
assert abs(remaining_area - 13.869026) <= 1e-4,"1.5.1 Incorrect answer"
###END HIDDEN TESTS
```

+++ {"id": "rax0w6q5S3WF", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-info">
<div style="text-align: justify"><b>Exercise 1.5.2</b><br><br>Suppose a group of $5$ engineers ordered $3$ pizzas with $8$ slices each. It is known that miners respect engineers and they want to share their meal equally. Your task is to calculate the amount of pizza slices each engineer will get and the amount of slices which will be left untouched. Use <code>//</code> and <code>%</code> operators.

```{code-cell} ipython3
:id: 2Ghh9qasS3WF
:outputId: 0355f359-b714-4fd7-b7a8-a557b2d912fe

pizza_slices = ...
grp_members = ...

slices_per_person = ...
left_over_slices = ...

###BEGIN SOLUTION TEMPLATE=
slices_per_person = pizza_slices // grp_members
left_over_slices = pizza_slices % grp_members
###END SOLUTION
print('Number of slices per person:', slices_per_person)
print('Number of slices left over:', left_over_slices)
```

```{code-cell} ipython3
---
nbgrader:
  grade: true
  grade_id: Q1.5.2
  locked: true
  points: '1'
  solution: false
---
###BEGIN HIDDEN TESTS
assert slices_per_person == 4, "1.5.2 Incorrect answer"
assert left_over_slices == 4, "1.5.2 Incorrect left over answer" 
###END HIDDEN TESTS
```

+++ {"id": "6vVTBKf2S3WF", "nbgrader": {"grade": false, "locked": true, "solution": false}}

***
<h3> Comparison Operators</h3><br><div style="text-align: justify">In Python, you often want to compare a value with another. For that, you use comparison operators.<br></div> 

| Math sign | Python sign | Meaning |
| :-: | :-: | :-: |
| $=$ | $==$ | Equal to |
| $>$ | $>$ | Greater than |
| $<$ | $<$ | Less than |
| $\geqslant$ | $>=$ | Greater than or equal to |
| $\leqslant$ | $<=$ | Less than or equal to |
| $\neq$ | $!=$ | Not equal to |

+++ {"id": "tYgJkAjkS3WF", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<h4>Checking if a value corresponds to the set conditions</h4>

Check if the the variable **`num`** satisfies the set condition.

```{code-cell} ipython3
---
colab:
  base_uri: https://localhost:8080/
id: cwI6HOvCS3WF
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: 8b6f1e68-f812-4758-b66c-8c1ece6e9885
---
num = 6
print(num > 2)
```

+++ {"id": "rahfXQevS3WG", "nbgrader": {"grade": false, "locked": true, "solution": false}}

If the value does not satisfy the condition the system will return <b><code>False</code></b>

```{code-cell} ipython3
---
id: n3-STHSWS3WG
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: 6796f022-fc31-4a4c-cb2e-9242d0be0761
---
print(num > 7)
```

+++ {"id": "HCWDCyVTS3WG", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-info">
<div style="text-align: justify">
<b>Exercise 1.5.3</b><br><br>
    Assign any numbers to <code>num_a</code> and <code>num_b</code> variables in such a way that their comparison returns a <code>True</code> value.
</div></div>



```{code-cell} ipython3
:id: 7DyZy1pHS3WG

num_a = ...
num_b = ...

###BEGIN SOLUTION TEMPLATE=
num_a = 2
num_b = 3
###END SOLUTION

comparison_result = num_a != num_b
print(comparison_result)
```

```{code-cell} ipython3
---
nbgrader:
  grade: true
  grade_id: Q1.5.3
  locked: true
  points: '1'
  solution: false
---
###BEGIN HIDDEN TESTS
assert num_a != num_b, "1.5.3 Incorrect comparison outcome"
###END HIDDEN TESTS
```

+++ {"id": "k1fHyoR_S3WH", "nbgrader": {"grade": false, "locked": true, "solution": false}}

 ***
 <h3> Logical & Identity Operators</h3>
 
 |sign|description|
 |:-:|:-:|
 |and|returns True if both statements are true|
 |or|return True if at least 1 statements is true|
 |not|reverse of the results; returns False if the statement is True|
 |is|returns True if both variables are the same object|
 |is not|returns True if both variables are not the same object|
 |in|returns True if a sequence with the specified value is present in the object|
 |in not|returns True if a sequence with the specified value is not present in the object|

+++ {"id": "z-vMNiI9S3WH", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<h4><b><code>and</code></b> statement</h4><br><div style="text-align: justify">By using the <b><code>and</code></b> statement you can set multiple conditions for the system to return. This can be seen as setting a boundary condition for a mathematical function.

```{code-cell} ipython3
---
id: C2nBS6w6S3WH
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: 5ec763aa-a8d9-4a76-9442-c7d98a084b0e
---
num = 5
print(num > 4 and num < 8)
```

+++ {"id": "jFLv4WxVS3WH", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<h4>checking if a value appears in an object</h4><br><div style="text-align: justify">Suppose we have a string "sandstone", we can check if a value is present within the string through the following lines of code.

```{code-cell} ipython3
---
id: y3hzxJlPS3WH
nbgrader:
  grade: false
  locked: true
  solution: false
outputId: 847bb1bc-e366-4e2d-e18a-7e08b54826b8
---
rock_type = "sandstone"
print("sand" in rock_type)
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<h4><b><code>is</code></b> and <b><code>==</code></b> operators</h4><br><div style="text-align: justify">The <b><code>is</code></b> operator deserves a little more explanation since it can be easily confused with the <b><code>==</code></b> operator. The <b><code>is</code></b> statement does not compare the value of a variable but simply checks if two variables are the same object. On the other hand, <b><code>==</code></b> checks if the values of different variables are the same. In the underneath piece of code this is shown quite clearly. Although the values of the variables are the same, their <b><code>type</code></b> is not. Therefore, when compared using the <b><code>is</code></b> operator, it returns <b><code>False</code></b>.</div>

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
x = 2.0
y = 2

print(type(x),type(y),x is y)
print(x == y)
```

+++ {"id": "r4G0Ra2iS3WI", "nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-info"><b>(Fixing) Exercise 1.5.4</b><br><br><div style="text-align: justify">Recall that Sentinel data titles are formatted as:<br><br> <b>S1A_IW_SLC__1SDV_20181205T015821_20181205T015851_024884_02BD8C_8700</b><br><br>
where each part means something, e.g., <b>S1A</b> means <b>Sentinel-1A</b>.<br><br>An ESA engineer wrote a piece of code to figure out if the data she has belongs to the Remote Sensing Satellite Sentinel-1; and, if it does, she would like to know the time of overpass... but for some reason she keeps getting an error. Could you maybe help her out?</div></div>

```{code-cell} ipython3
import datetime
data = 'S1A_IW_SLC__1SDV_20220218T231336_20220218T231403_041974_04FFAC_A40F' 

platform_name = data[0:3]#selecting platform name
print('Platform name:', platform_name)

is_platform_name_correct = platform_name = 'S1A'#checking platform 

###BEGIN SOLUTION TEMPLATE=
is_platform_name_correct = platform_name == 'S1A'#checking platform 
###END SOLUTION

if is_platform_name_correct == True:
    date = data[17:32]
    print('Sentinel-1 overpassed at {}'.format(datetime.datetime.strptime(date, "%Y%m%dT%H%M%S")))
else: 
    print('Data is not from Sentinel-1 and will not be processed')
```

```{code-cell} ipython3
---
nbgrader:
  grade: true
  grade_id: Q1.5.4
  locked: true
  points: '1'
  solution: false
---
###BEGIN HIDDEN TESTS
assert is_platform_name_correct == True, "1.5.4 Incorrect platform comparison"
###END HIDDEN TESTS
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-info">
<div style="text-align: justify">
<b>(Searching) Exercise 1.5.5</b><br><br>
In Python, there are a lot of shortcuts! There are multiple ways to solve tasks (e.g. reading data, filtering noise, solving systems of equations, etc) and there is, usually, a way to write a "one-liner". A "one-liner" is a code, which solves the task in one line. Sometimes "one-liners" are not preferred (it usually lowers the readability of your code) but it is still useful to think about them. Think about <i>"How can I solve this problem differently?"</i>, or <i>"How can I use Python most efficiently?"</i>. 

For example, in the cell bellow you can see a small combination of comparison operators.</div></div>

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
my_number = 5
result = 3 < my_number and my_number < 6
print(f'My number {my_number} is within (3, 6) range:', result)
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-info">
<div style="text-align: justify">
    This expression checks whether: first, <code>my_number</code> is bigger than $3$ and then, secondly, whether <code>my_number</code> is smaller than $6$. If the first check resulted in <code>True</code>, the second check starts. If the second check also returns <code>True</code>, then the result is <code>True</code> as well. Mathematically speaking we check whether a number lies in the $(3, 6)$ range. In Python, there is a way to make these expressions shorter. They are called "chained comparison". Your task is to rewrite the cell above with that technique.</div></div>

```{code-cell} ipython3
# use this line to create a chained comparison
...

```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-danger"><b>Additional study material:</b>

* Official Python Documentation - https://docs.python.org/3/library/operator.html
* https://realpython.com/python-operators-expressions/
* Think Python (2nd ed.) - Sections 2 and 5

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div id='func'></div><br><h2>1.6 Python Functions</h2><br><div style="text-align: justify">A <b>function</b> is a collection of code that is assigned to a specific name. You have already seen some built-in Python functions, such as <b><code>print()</code></b>. Using functions is useful because it allows you to run the same code again without having to type it a second time. </div>

Below are some examples of common built-in Python functions and what they do:

``` 
print()          Prints input to screen
type()           Returns the type of the input
abs()            Returns the absolute value of the input
min()            Returns the minimum value of the input. 
                 (input could be a list, tuple, etc.)
max()            Same as above, but returns the maximum value
sum()            Returns the sum of the input 
                 (input could be a list, tuple, etc.)
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

But the story doesn't end at built-in functions. You can also write your own functions!<br><h3>How to write a function</h3><br><div style="text-align: justify">To write a function, you must first define it. This is done by using the <b><code>def</code></b> statement. Then, you name the function and add, in the parentheses, which variables this function takes as an input, followed by a colon. The colon tells Python you are going to define the <b>function body</b> next (the part of the function that actually does the computation). As shown below:<br><br><center><code>def function_name(input1, input2,...):<br>function_body<br>...<br>...</code></center><br>The <b><code>calculate_circle_area(r)</code></b> function below defines <b><code>pi</code></b> as a variable and then computes the area of a circle, which is stored in the variable <b><code>area</code></b>. Finally, it uses the <b><code>return</code></b> statement to output the <b><code>area</code></b> back to you. Once you have defined the function, you can then <b>call</b> it by typing the function name, and  the inputs in the parenthesis. For example, calling: <b><code>print("Hello World!")</code></b>, prints the string <b><code>"Hello World!"</code></b>.</div>

<b>Indentation</b> <br>
<div style="text-align: justify">
    It is worth noting that the function body should be <b>indented</b>. This is how Python sees what piece of code is inside another code. An indented line of code is a line that starts with whitespace. You can do this by using the tab key on your keyboard.</div>

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-warning"><center>
Inputs of functions are more often called <b>arguments</b>.
</div>

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<h4>indentation of code within functions</h4><br><div style="text-align: justify">Let's say you'd want to compute the area of a circle, but you don't want to calculate $\pi r^2$ the entire time. Then you can write a couple lines of code to do it for you, and wrap it up into a function, like the one below:
    </div>

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
def calculate_circle_area(r):
    pi = 3.141592653589793
    area = pi*(r**2)
    return area
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

This function is called <b><code>calculate_circle_area(r)</code></b>, and takes the value <b><code>r</code></b> as an argument.

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-info"><b>Exercise 1.6.1<br><br></b><div style="text-align: justify">Calculate the area of a circle with a radius of $4$ cm in the box below using the <code>calculate_circle_area</code> function.<br> 
</div>

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: false
  solution: false
---
r = ...
circle_area = ...

###BEGIN SOLUTION TEMPLATE=
r = 4
circle_area = calculate_circle_area(r)
###END SOLUTION

print(circle_area)
```

```{code-cell} ipython3
---
nbgrader:
  grade: true
  grade_id: Q1.6.1
  locked: true
  points: '1'
  solution: false
---
###BEGIN HIDDEN TESTS
assert r == 4, "3.1 Incorrect radius"
assert abs(circle_area - 50.26548245743669) <= 1e-6, "1.6.1 Incorrect circle area" 
###END HIDDEN TESTS
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

Functions can have multiple arguments, for example:

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
def calculate_rectangle_area(a, b):
    area = a * b
    return area

print('Area of my rectangle is', calculate_rectangle_area(4, 6), 'cm^2')
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

In the cell above, the **`calculate_rectangle_area(a, b)`** function takes $2$ arguments, $a$ and $b$. 

The built-in function **`print()`** takes $3$ arguments:<br>
the <b>string</b> <b><code>'Area of my rectangle is'</code></b>, the output of <b><code>calculate_rectangle_area(a, b)</code></b>, and another string <b><code>'cm^2'</code></b>.

<div style="text-align: justify">There are better ways to use the built-in <b><code>print()</code></b> function when writing long sentences that have variables in between. For example:

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
print('Area of my rectangle is {} cm^2 and the area of my circle is {} cm^2'. \
      format(calculate_rectangle_area(4,6), circle_area))
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div style="text-align: justify">If a line in your code extends the width of your page, you can use a <b>\</b> at the point where you want to break the line, as shown above.<br><br>Note that the variables (separated by commas) called inside the <b><code>.format()</code></b> will appear, in order, where the <b>{ }</b> are located.<br><br>Furthermore, you can also format how you want the numbers to appear, as shown below:

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
print('Area of my rectangle is {:.5f} cm^2 and the area of my circle is {:.2f} cm^2'. \
      format(calculate_rectangle_area(4,6), circle_area))
```

<div style="text-align: justify">Where the <b><code>:.5f</code></b> states that you want to print that variable with $5$ decimal numbers. Similarly, <b><code>:.2f</code></b> rounds the number to $2$ decimal numbers. More information on this in Section 3.1, in Notebook 3.

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<h4>Documenting functions</h4><br><div style="text-align: justify">We have now successfully created a function that computes the area of a circle and the area of a rectangle. You could send this code to fellow students, but maybe they wouldn't know how to use them. This is where a <b>docstring</b> comes in handy. This is a string specified in the beginning of the function body which states information about the function. A lot of built-in Python functions also have docstrings, which is really useful when you're trying to understand how to use a function.</div>

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-info"><b>Exercise 1.6.2 </b><br><br>Add a description to the <code>calculate_circle_area(r)</code> function below, as a docstring.<br> 
</div>

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: false
  solution: false
---
def calculate_circle_area(r):
    '''PUT YOUR DOCSTRING HERE!'''
    pi_circle = 3.141592653589793
    area = pi_circle*(r**2)
    return area
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

As you can see, nothing happened. But, if we now call the function like this:
```
calculate_circle_area?
```
or:
```
help(calculate_circle_area)
```
we should see the description (docstring) of the function. Try yourself below:

```{code-cell} ipython3
# use this line to check the the docstring of the above function, use one of the above methods
...
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div style="text-align: justify">
Now this isn't of much use when you work on your own code, unless you are very forgetful or have to write large programs.
But if you work using other people's code, this is really useful, as it helps you figure out how to use each function.</div>

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<h4>When to write or use a function?</h4><br><div style="text-align: justify">You can use functions in your code when you have a specific piece of code that you need to use multiple times (e.g.: plotting something).<br><br>Often you will find you want to use an output from a function later on. To do this, you can assign a function to a variable. Let's say I want to use the area of a circle in a later calculation. Then you can store it in a variable like this:</div>

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
Circle_Area = calculate_circle_area(4)
# here, we stored the area of a circle that has a radius 4 
# in the variable 'Circle_Area'
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div style="text-align: justify">Nothing happens, but the value of <b><code>calculate_circle_area(4)</code></b> is now stored in the variable <b><code>Circle_Area</code></b>. See below:

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
print(Circle_Area)
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

We can see that the value was indeed stored.
<div class="alert alert-block alert-warning"><center>
Variables that are defined inside a function body can <b>NOT</b> be called from outside of the function. These variables are called <b>local variables</b>.
</div>

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

Take the variable **`pi_circle`** that we defined in the function **`calculate_circle_area()`**. If we try to print it:

```{code-cell} ipython3
---
nbgrader:
  grade: false
  locked: true
  solution: false
---
print(pi_circle)
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

See, it doesn't work!
The error you get: <i>name 'pi_circle' is not defined</i>, means that you tried to call a variable that does not exist.

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-info"><b>(Fixing) Exercise 1.6.3</b><br><br><div style="text-align: justify">Below is a function that should calculate the water pressure in the sea, as a function of depth. But it isn't working. Can you spot the error and fix it? Do not change any other line except the line with the error.
</div></div>

```{code-cell} ipython3
def water_pressure(z):
    '''Calculates the water pressure in the sea at a depth of input z (meters). returns a value in Bar.'''
    
    water_density = 1000         #kg/m^3
g = 9.81                     #m/s^2
    p_atm = 100000               #Pa
    
    p_z = (p_atm + (z * water_density) * g) / 100000
    
    return p_z 

###BEGIN SOLUTION TEMPLATE=
def water_pressure(z):
    '''Calculates the water pressure in the sea at a depth of input z (meters). returns a value in Bar.'''
    
    water_density = 1000         #kg/m^3
    g = 9.81                     #m/s^2
    p_atm = 100000               #Pa
    
    p_z = (p_atm + (z * water_density) * g) / 100000
    
    return p_z 

###END SOLUTION

calculated_pressure = water_pressure(2000)
print(calculated_pressure)
```

```{code-cell} ipython3
---
nbgrader:
  grade: true
  grade_id: Q1.6.3
  locked: true
  points: '1'
  solution: false
---
###BEGIN HIDDEN TESTS
assert abs(calculated_pressure - 197.2) <= 1e-6, "1.6.3 Incorrect answer" 
###END HIDDEN TESTS
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-info"><b>Exercise 1.6.4</b><br><br> <div style="text-align: justify">Write a function called <code>k_e()</code> to calculate the kinetic energy of some object. It should have mass and velocity as its arguments. In case you forgot, the kinetic energy equation is <br><br>$$E_k = \frac{mv^2}{2}$$<br>
</div>

```{code-cell} ipython3
#write your funtion below
...
...

###BEGIN SOLUTION TEMPLATE=
def k_e(mass, velocity):
    return 0.5 * mass * velocity ** 2 
###END SOLUTION
print(k_e(10, 5))
```

```{code-cell} ipython3
---
nbgrader:
  grade: true
  grade_id: Q1.6.4
  locked: true
  points: '1'
  solution: false
---
###BEGIN HIDDEN TESTS
assert abs(k_e(10, 5) - 125) <= 1e-6, "1.6.4 Incorrect energy" 
###END HIDDEN TESTS
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-info"><b>(Searching) Exercise 1.6.5</b><br><br><div style="text-align: justify">Use the <code>print()</code> and <code>k_e()</code> functions to print a nice formatted output for any arbitrary input. Example of a desired output: <b>The kinetic energy is: 200 J</b>
</div>

```{code-cell} ipython3
#write your code here
...
...
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-info"><b>(Fixing) Exercise 1.6.6</b><br><br> The function below does not give the right answer. Could you fix it?<br> 
</div>

```{code-cell} ipython3
def add_two(numb):
    """
    add_two(numb) function -> takes the input numb and adds 2 to it
    
    Input:
        numb -> an integer, to which 2 must be added
    
    Output:
        ret -> a return integer, which is equal to numb + 2
    """
    ret = add_one(add_one(add_one(numb)))
    return ret

def add_one(number):
    """
    add_one(number) function -> takes the input number and adds 1 to it
    
    Input:
        number -> an integer, to which 1 must be added
    
    Output:
        ret -> a return integer, which is equal to number + 1
    """
    ret = number
    return ret


###BEGIN SOLUTION TEMPLATE=
def add_two(numb):
    """
    add_two(numb) function -> takes the input numb and adds 2 to it
    
    Input:
        numb -> an integer, to which 2 must be added
    
    Output:
        ret -> a return integer, which is equal to numb + 2
    """
    ret = add_one(add_one(numb))
    return ret

def add_one(number):
    """
    add_one(number) function -> takes the input number and adds 1 to it
    
    Input:
        number -> an integer, to which 1 must be added
    
    Output:
        ret -> a return integer, which is equal to number + 1
    """
    ret = number + 1
    return ret
###END SOLUTION

x = 5
y = add_two(x)

print(f'{x} + 2 is {y}, which is {y == x + 2}')
if y != x + 2:
    print('Something is wrong here...')
else:
    print('Looks gucci')
```

```{code-cell} ipython3
---
nbgrader:
  grade: true
  grade_id: Q1.6.6
  locked: true
  points: '1'
  solution: false
---
###BEGIN HIDDEN TESTS
assert add_two(5) == 7, "1.6.6 Incorrect answer" 
###END HIDDEN TESTS
```

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<div class="alert alert-block alert-danger"><b>Additional study material:</b>

* Official Python Documentation - https://docs.python.org/3/tutorial/controlflow.html#defining-functions
* https://realpython.com/defining-your-own-python-function/
* Think Python (2nd ed.) - Sections 3, 6 and 16

+++ {"nbgrader": {"grade": false, "locked": true, "solution": false}}

<h4>After this Notebook you should be able to:</h4>

- understand why you need to learn Python
- create and re-assign new variables
- determine the type of a variable using `type()`
- slice strings
- perform simple math using arithmetic operators
- compare two or more variables
- check if a value, or element, exists in an object
- define a function, including its docstring
