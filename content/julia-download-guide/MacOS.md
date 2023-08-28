---
id: "MacOS"
author: "Giannis"
title: "Julia Language Installation Guide"
date: "17/12/2023"
excerpt: "A  comprehensive guide to download julia computer language in a MacOS machine"
---

#  MacOS Users

## Julia Language Installation

Depending on the device you are using, you download the appropriate one version of Julia from [page installations](https://julialang.org/downloads/) on the official site.

1. Double-click the image of the downloaded disk (in the downloads folder) to load it.

2. Drag the `Julia-1.X.Y` app to the shortcut folder
   Applications.

After installation, opening Julia shows the
Julia's interactive mode, called REPL (Read Evaluate Print Loop), at
which you can write your first code on the command line like
shown below:

```julia
println("Hello World!$! \n The sum of 3 and 5 is: ", 3+5)
```

## Add Julia language to PATH environment variable

Running Julia in terminal requires adding Julia Language to the PATH Environment Variables.

1. Press `cmd + space` and search for terminal.

2. Copy and paste the following two commands:

```bash
rm -f /usr/local/bin/julia
ln -s /Applications/Julia-1.8.app/Contents/Resources/julia/bin/julia /usr/local/bin/julia
```

> If your mac has an M-series processor, you may want to consider downloading both the Intel/Rosetta and the M-series releases of Julia. If you run into a package that doesn't work on your M-series processor, you can then switch to the Intel/Rosetta version.

**For M-series macs**: Add `juliarosetta` to your `PATH`.  First, rename the `Julia-1.8` (Intel version) Application to `Julia-1.8-Rosetta`.

```bash
rm -f /usr/local/bin/juliarosetta
ln -s /Applications/Julia-1.8-Rosetta.app/Contents/Resources/julia/bin/julia /usr/local/bin/julia
```

At this point you can open the command prompt (Windows users)
or the terminal (MacOS and Linux users) and typing \"julia\" will
display the Julia REPL.

## 📦 Package Installation

Packages contain modules, tests and documentation. They expand the
basic functionality of Julia.

Julia has a built-in package manager for installing add-on functionality written in Julia.

### 1st way of installing packages

1. Open the Julia REPL.

2. In the command prompt type `using Pkg` and press `ENTER`.

3. To load a package, write the command.

```julia
Pkg.add("YourDesiredPackage")
```

To load multiple packages you can also use the command:

```julia
for pkg in ["DifferentialEquations", "Turing", "DataFrames", "Plots"]
    Pkg.add(pkg)
end
```

### 2nd way of installing packages

1. Open the Julia REPL.

2. In the command line type `]`

3. To load a package, write the command

```julia
add YourDesiredPackage
```

For more information about the packages available for Julia check the links found on [their page packages](https://julialang.org/packages/) on the official site.

## Install IDE/code-editor

### Usefulness of code-editors and IDEs

For larger programs, it 's recommended to download a code-editor or an IDE (Integrated Development Environment).

A code-editor accelerates and makes programming easier by

1. providing syntax highlighting by displaying keywords language and syntax errors with visually distinct colors

2. detecting errors & much more!

IDEs present a single program with capabilities to create, modify, compiling, developing and debugging the software.

We reccomend:

1. VS Code

2. Jupyter

> A single editor or IDE is very likely to cover all of your needs needs, so you can choose one of the above and find below information about its installation.

### Install VS Code Julia Extension

1. Depending on the device you are using, download the appropriate one version of VS Code from [page installations](https://code.visualstudio.com/download) in official site.

2. Download `Julia extension` directly from [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=julialang.language-julia) _or_ download it manually from within VS Code by going to in extensions (extensions) and downloading the extension with the name Julia.

3. Now you can make a new file, save it ending with `.jl` and run it.

> At this point you should be able to run VS Code. If the extension does not automatically detect the Julia installation, follow the steps below. You need to manually set julia.executablePath to point to the executable Julia file that the extension should use.

### Adding julia.executablePath in VS Code

1. To find the path you will need you will need to download the file labeled `64-bit.tar.gz` from [page installations](https://julialang.org/downloads/) by Julia.

2. Copy the file path shown below: ![Alt text](images/download-guide/julia_bin_path.png).

3. Open VS Code and select the following from the menu bar in the top of your screen : `File->Preferences->Settings` (or press `cmd + ,`) and look for `julia.executablePath` in search bar.

4. Paste the file path you copied in step 3, close settings and restart VS code.

## Install Jupyter

### 1st way: Install Jupyter using Anaconda

1. Download Anaconda from [its official site Anaconda](https://www.anaconda.com/products/distributio).

2. Browse your apps and open Anaconda Navigator.

3. There you will find Jupyter Lab and Jupyter Notebook installed.

4. To start writing a Jupyter notebook, just type the following command: `jupyter notebook`.

### 2nd way: Install Jupyter via Julia REPL (You won't have to add Julia to Jupyter)

1. Open the Julia REPL.

2. Install the package : `IJulia`.

3. Type in the code line : `using IJulia` and press `ENTER`.

4. Write `notebook()` in the code line and press `ENTER`.

5. When `install Jupyter via Conda, y/n [y]: ` appears, press `ENTER` and you will
   start installing Jupyter.

6. After the installation is complete, write `exit()` and restart the `Julia REPL`.

7. Repeating the steps 3 & 4 you will open Jupyter in your browser.

### 3rd way: Install Jupyter via Python

> Those who already have Python 2.7.9 (or later) _or_ Python 3.4 (or later) installed, can ignore the Python installation move to installation of Pip.

#### Install Python

1. Download the Python installer from [its official site Python](https://www.python.org).

2. To confirm that python is installed on your system, open terminal and type `python`.

3. 🤞The version of python you have installed will be displayed if the python successfully installed on your device.

#### Install and verify installation of pip

Pip is a powerful package management system for Python packages.

> All versions of Python 2 _(later than 2.7.9)_ and Python 3 _(later than 3.4)_ that are installed from the official python site, also install pip.

To confirm you have pip installed on your system:

1. Open terminal & type `pip -V`

2. If a message appears with the version of pip, then you are ready to proceed.

#### Update pip

Open terminal and type :

```bash
$ python -m pip install –upgrade pip
```

### Install Jupyter

1. Open the terminal and create a virtual environment with the command `pip3 install virtualenv`.

2. Create a virtual jupyter environment and activate it with the command: `virtualenv jupyter source jupyter/bin/activate`.

3. Open the terminal and type the command: `pip3 install jupyter`.

4. To start writing a Jupyter notebook, just terminal : `jupyter notebook`.

> If you didn't follow the 2nd way to install Jupyter, you will need to to add a package that will allow you to use the Julia language in Jupyter.

### Add Julia language to Jupyter

1. Open the Julia REPL in any of the ways mentioned.

2. Write in the REPL the command : `using Pkg`.

3. Add the `IJulia` package by typing the command: `Pkg.add("IJulia")`.

## Useful links

1. [How to setup Jupyter & Python on Mac, Windows or Linux Tutorial](https://www.youtube.com/watch?v=9tPS-7TWjq0)

2. [Installing the classic Jupyter Notebook - Jupyter official](https://docs.jupyter.org/en/latest/install/notebook-classic.html#installing-jupyter-using-anaconda-and-conda)

At this point you are ready to write scripts.
But in order to equip yourself with the knowledge to write the brief
and beautiful code provided by Julia, it would be good to
[get started with Julia](http://localhost:3000/getting-started).
