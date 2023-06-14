# learn-python

- Caspar: add config files and recipe pages to our book on main


option 1:
- jupyter lite ipython console
- allows conda forge packages (no pip)
- can specify code to run on init but it is visible as the first cell command (no hiding of code)
- conda forge package only visible in error traceback

option 1.5: can also do option 1 with a nb, but then you need to include the nb as a separate file in the book repo

option 2:
- binder (creates an image), colab creates a nb interface on google server (not same container as binder)
- displays page as nb
- can use pip (conda-forge not sure)
- cannot hide cells (this is JB only, and all cells need to run and be not hidden)
- all cells are active
- need to hide cell in JB for colab pip install (not remove) and run this cell when using nb in colab

not used: jupyrer lite kernel in browser, because it's not fully implemented yet (javascript stuff)

no need to provide separate nb's for students to run locally

robeer will add a special page on how to use python in this mooc.
