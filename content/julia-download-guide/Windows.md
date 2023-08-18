---
id: "Windows"
author: "Giannis"
title: "Julia Language Installation Guide"
date: "17/12/2023"
excerpt: "A  comprehensive guide to download julia computer language in a MacOS machine"
---

## Julia Language Installation

Depending on the device you are using, you download the appropriate one version of Julia from [page installations](https://julialang.org/downloads/) on the official site.

1. Go to downloads and run the installer.

2. Copy the `path` to which Julia is installed (it will be needed below).

After installation, opening Julia shows the Julia's interactive mode, called REPL (Read Evaluate Print Loop), at which you can write your first code on the command line like shown below:

```julia
println("Hello World!$! \n The sum of 3 and 5 is: ", 3+5)`
```

## Add Julia language to PATH environment variable

Running Julia in the command prompt requires adding Julia Language to the PATH Environment Variables

1. Press the Windows button and search for `Edit Environment Variables`

2. Press `Environment Variables` at the bottom right of the window that will appear

The path you need to change is in System Variables.

3. Find `Path` in `System Variables` and click edit.

#### Windows 7-8

1. If there is no semicolon (';') at the end, add it and paste the path to the installation directory folder noted above. This route should look like:

```bash
C:\Users\Your\AppData\Local\Programs\Julia-1.X.Y. <--------(your version here)
```

#### Windows 10 {#windows-10 .unnumbered}

1. Press 'New' on the top right of the window that will appear and paste the path to the installation directory folder noted above. This route should look like:

```bash
C:\Users\Your\AppData\Local\Programs\Julia-1.X.Y. <--------(your version here)
```

All that remains is to add the suffix to the path you pasted.

1. Add the suffix `\bin` to the path you pasted and save the changes made.

### Useful link

https://www.computerhope.com/issues/ch000549.htm

## 📦 Package Installation (packages)

Packages contain modules, tests and documentation. They expand the
basic functionality of Julia.

Julia has a built-in package manager for installing add-on functionality written in Julia. It can also install external libraries using your operating system's standard system for doing so, or by compiling from source.

### 1st way of installing packages

1. Open the Julia REPL.

2. In the command prompt type \"`using Pkg`" and press ENTER.

3. To load a package, write the command
   `Pkg.add("packagename")`.
   To load multiple packages you can
   also use the command:
   `for pkg in ["DifferentialEquations", "Turing", "DataFrames", "Plots"]`
   `Pkg.add(pkg) end`

### 2nd way of installing packages

1. Open the Julia REPL.

2. In the command line type \"`]`\".

3. To load a package, write the command
   \"`add packagename`".

For more information about the packages available for Julia check the links found on [their page packages](https://julialang.org/packages/) on the official site.

## Install IDE/code-editor

### Usefulness of code-editors and IDEs {#usefulness-of-code-editors-and-ides .unnumbered}

For writing larger programs, it is recommended for all of them users to download a code-editor or an IDE (Integrated Development Environment).

A code-editor is a text editor that accelerates and makes programming easier as it completes code, detects errors and provides syntax highlighting by displaying keywords language and syntax errors with visually distinct colors etc.

IDEs present a single program in which all the development and provides capabilities to create, modify, compiling, developing and debugging the software (contain i.e. code-editor).

Some Editors and IDEs whose installation we will refer to are
the:

- [VS Code]{style="color: cyann"}

- [Jupyter]{style="color: cyann"}

> A single editor or IDE is very likely to cover all of your needs needs, so you can choose one of the above and find below information about its installation.

### Install VS Code Julia Extension

1. Depending on the device you are using, download the appropriate one version of VS Code from [page installations](https://code.visualstudio.com/download) in official site. At this point you should be able to run VS Code.

2. You can download `Julia extension` directly from [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=julialang.language-julia) _or_ download it manually from within VS Code by going to in extensions (extensions) and downloading the extension with the name Julia.

3. Now you can make a new file, save it ending with `.jl` and run it.

> If the extension does not automatically detect the Julia installation you need to manually set julia.executablePath to point to the executable Julia file that the extension should use.

### Adding julia.executablePath in VS Code

1. To find the path you will need you can open it Windows menu by pressing the `Windows button`, search `Julia` and then right-click to select: `Open file location`.

2. Right clicking again on the Julia X.Y.Z file select: open file location

3. Copy the Path of `julia.exe`.

4. Open VS Code follow: File$\to$Preferences$\to$Settings (or just by pressing `ctr + ,`) and look for `julia.executablePath` in search bar.

5. Paste the` julia.exe` path you copied in step 3, close settings and restart VS code.

#### Useful Link

[Julia programming Environment set up in Visual Studio Code](https://www.youtube.com/watch?v=2Q2YQt5cL4c)

## Install Jupyter

### 1st way: Install using Anaconda

1. Download Anaconda from [its official site Anaconda](https://www.anaconda.com/products/distributio).

> If you don't have Python installed, select `Advanced Options` during installation process and check

- [ ] Add Anaconda3 to my PATH environment variable

2. Press the Windows button and open Anaconda Navigator.

3. There you will find Jupyter Lab and Jupyter Notebook installed.

4. To start writing a Jupyter notebook, just type the following command: `jupyter notebook`

### 2nd way: Install Jupyter via Julia REPL (You won't have to add Julia to Jupyter)

1. Open the Julia REPL.

2. Install the package : `IJulia`

3. Type in the code line : `using IJulia` and press `ENTER`.

4. Write `notebook()` in the code line and press `ENTER`.

5. When `install Jupyter via Conda, y/n [y]: ` appears, press `ENTER` and you will
   start installing Jupyter.

6. After the installation is complete, write `exit()` and restart i `Julia REPL`.

7. Repeating the steps **3 & 4** you will open Jupyter in your browser.

### 3rd way: Install Jupyter via Python

Those who already have Python 2.7.9 (or later) _or_ Python 3.4 (or later) installed, can ignore the Python installation move to installation of Pip.

#### Install Python {#install-python .unnumbered}

> During installation make sure you 've checked `Add Python 3.10.5 to PATH`

1. Download the Python installer from [its official site Python](https://www.python.org). You will need to go to downloads $\to$ Python 3.10.5 .

2. To confirm that python is installed on your system,
   open command prompt `python`.

3.🤞The version of python you have installed will be displayed if the python successfully installed on your device.

#### Install and verify installation of pip

Pip is a powerful package management system for packages Python software. So make sure you have it installed.

> All versions of Python $2 >=2.7.9$ and Python $3>=3.4$ that are installed from the official python site, also install pip.

To confirm you have pip installed on your system:

1. Open terminal & type `pip -V`

2. If a message appears with the version of pip, then you are ready to proceed.

If pip is not installed, run the following commands in the command prompt

```bash
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python get-pip.py
```

##### Useful link

[How to install pip on Windows](https://www.geeksforgeeks.org/how-to-install-pip-on-windows/).

#### Update pip

Open the command prompt and run:

```bash
python -m pip install -U pip
```

### Install Jupyter

1. Open the terminal and create a virtual environment with the command `pip3 install virtualenv`

2. Create a virtual jupyter environment and activate it with the command: `virtualenv jupyter source jupyter/bin/activate`

3. Open the terminal and type the command: `pip3 install jupyter`

4. To start writing a Jupyter notebook, just terminal : `jupyter notebook`

> If you didn't follow the 2nd way to install Jupyter, you will need to to add a package that will allow you to use the Julia language in Jupyter.

### Add Julia language to Jupyter

1. Open the Julia REPL in any of the ways mentioned.

2. Write in the REPL the command : `using Pkg`

3. Add the `IJulia` package by typing the command: `Pkg.add("IJulia")`

## Useful links

- [How to install Anaconda and Jupyter Notebook in Windows 10](https://www.youtube.com/watch?v=syijLJ3oQzU)

- [How to install Jupyter Notebook for Windows - Geeks for Geeks](https://www.geeksforgeeks.org/how-to-install-jupyter-notebook-in-windows/)

- [Installing the classic Jupyter Notebook - Jupyter official](https://docs.jupyter.org/en/latest/install/notebook-classic.html#installing-jupyter-using-anaconda-and-conda)

At this point the user is ready to write scripts.
But in order to equip himself with the knowledge to write the brief
and beautiful code provided by Julia would be good to refer to
[language usage guide
Julia](https://eclass.uoa.gr/modules/document/?course=MATH722).
