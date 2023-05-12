<figure>
  <IMG SRC="https://raw.githubusercontent.com/mbakker7/exploratory_computing_with_python/master/tudelft_logo.png" WIDTH=250 ALIGN="right">
</figure>


# Introduction to the Course

## Why do you need Python? 
    
Python is a computer programming language that is widely used in both academia and industries related to Civil Engineering, Environmental Engineering and Applied Earth Sciences. Being skilled in Python will help you on multiple occasions, including in your master courses. With this set of notebooks we will guide you through the basics of Python programming. As an additional study material for learning Python basics, we advise the open source book <a href="https://greenteapress.com/wp/think-python-2e/">"Think Python 2nd Edition" by Allen B. Downey</a>. It describes in more detail what is covered in the Notebooks of this course.
<br>
Don't worry if you some concepts are not (completely) clear, you'll improve your skills along the way and can always use these notebooks to look things up later.

## What can computers do for us?
As an engineer or scientist, you will deal with units of information which are called <b>data</b>. The most important tasks that a computer can do for us are:

1. Reading data
2. Processing data
3. Visualizing data

These are tasks that require many repetitions and high precision.

_1. Reading data_
Reading data means the computer acquires data from a source and places it into its volatile memory for processing. Volatile memory keeps the data stored until the power supply is interrupted. The way data is stored in a computer determines how the computer will be able to use it.

_2. Processing data_
Data processing is the manipulation of the stored data in a system. After processing data by performing transformations, calculations, and more, you get an output; results.

_3. Visualizing data_
We map data (original or found) to graphic elements to communicate clearly and efficiently the information contained in the data. A graphic element is an element of a chart, such as a line or a point in the chart.

## What is programming?

Programming is giving your computer a list of instructions for computations in a language it can understand. In your case, this language is Python. A computation is a series of arithmetical ("math") and non-arithmetical ("non-math") steps that transform input to output (result).
There are five different kinds of instructions for computations you use. By ordering and combining them, the computer can achieve results that fulfill the three tasks described earlier. The five kinds of instructions are:

<b>input:</b>
    Insert data from a file, the network, other devices, or simply by typing it in.
    
<b>output:</b>
    Display data on the screen, save them in a file, send it over the network, etc.

<b>math:</b>
    Perform basic mathematical operations like addition and multiplication.

<b>conditional execution:</b>
    Check for certain conditions before further instruction.

<b>repetition:</b>
    Perform instructions repeatedly, usually with some variation.


## Introduction to Python and Python Notebooks
    
The features of Python are what make it so popular. From the definition available on the corresponding Wiki page: <i> "Python is an <b>interpreted</b> <b>high-level</b> <b>general-purpose</b> <b>programming language</b>. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs, as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects."</i>. Quite a simple, yet concise description due to the meaning hidden behind each buzzword:
    

<ul>
<li> <b>Interpreted</b> means that there is an interpreter, a software tool, which reads and performs instructions written in Python. If your laptop, phone, or refrigerator has the interpreter, it can run most of the Python scripts!
<li> <b>High-level</b> means that the programming language operates with abstract and more easily understandable concepts. In other words, you don't have to write or understand, code related to the hardware part of your machine (like binary code or assembly).
<li> <b>General-purpose</b> means that the amount of Python application fields are endless. You can write Python scripts to manage and automate some primitive tasks for yourself, you can use it for data science, create your own machine / deep learning project, write your personal web application or even develop a game. 
<li> <b> Programming language </b>means a set of specific predefined semantics, instructions, and syntax rules, which are used for writing necessary instructions. It is strictly defined, meaning that 99.99% of all errors in the code are made by the coder, not by the computer.
</ul>



Python scripts run with the help of a Python interpreter, but they can be written by using different software tools. Just like as you write your essay (you can type it in Word, Google Docs, Overleaf, or even on plain paper) you can write your Python code with different editors. You can write your code in different editors. You could use the default notepad, notepad++, find a proper website with an inbuilt code editor & interpreter (<a href="https://ideone.com/">IDEone</a>, for example), or use specialized Python code editors (Spyder, PyCharm, Visual Studio, etc). In all cases you will produce a set of instructions, which are stored in a file with the <b>*.py</b> extension and the interpreter will run it completely (from top to bottom).

For your bachelor program you are going to use a slightly different approach to developing a Python script — you are going to use <b> Python Notebooks </b> by using Vocareum, Google Colab, Jupyter Notebook, or Jupyter Lab. These notebooks allow you to run your script in parts, blocks, or in other words — in cells. Just select a cell with the code part you want to run and press the <b>'run cell'</b> button (or <b>shift + enter</b>). Running cell blocks is more convenient for data analysis since sometimes you just need to change a small part of your code or add some explanation, math formulas, or figures. Therefore, re-running only the corresponding cell is much more efficient.

