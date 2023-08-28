---
id: "Linux"
author: "Giannis"
title: "Julia Language Installation Guide"
date: "17/12/2023"
excerpt: "A comprehensive guide to download julia computer language in a Linux machine"
---

# Linux Users

Odds are you expect less hand-holding 😄, but anyway here's some helping guidelines!

## Installing Julia Using Pre-Compiled Binaries (Recommended)

To download the pre-compiled binaries, go to the [Julia website](https://julialang.org/downloads/) and download the preferred version. It is recommended to download the [current stable release](https://julialang.org/downloads/#current_stable_release).

> Unless you are using an offbeat distro like Void Linux which has *musl*, get the 64-bit(glibc) version.

After downloading it, navigate to the directory in which the tar file is stored (usually the Downloads folder) and extract the file using the following command

```bash
tar zxvf julia-1.X.Y-linux-x86_64.tar.gz.  <--- Your julia version in the front!!
```

> Julia’s installation is now complete, in a new directory named `julia-1.X.Y`. This location is referred to as your `julia directory`, and will be referenced later. Julia is entirely contained in this single directory. In the future if you wish to uninstall Julia, you can delete this directory for a complete uninstall.

## Adding Julia to your `Path`

Your system will need to be able to find the `julia` executable.

Add the full path of Julia’s `bin` directory to the `PATH` environment variable `~/.bashrc`. Open it using `nano` (or your preferred text editor):

```bash
nano ~/.bashrc
```

Add this line to the bottom of the file, using the `julia directory` you installed Julia to as the basis:

```bash
. . .
export PATH="$PATH:/home/sammy/julia-1.8.1/bin"
```

> You are required to use the absolute path to your `bin` folder. In this example, the home directory is used, so be sure to update the directory name accordingly if you chose a different location for your `julia directory`.

Once you are done, save and exit by pressing `CTRL+O` then `CTRL+X`.
In order for this change to go into effect, you have to `source` your `.bashrc` by executing the following command:

```bash
source ~/.bashrc
```

With `julia` now on your `PATH`, you can start your session with this command:

```bash
julia
```

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

We reccomend VS Code.

> A single editor or IDE is very likely to cover all of your needs needs, so you can choose one of the above and find below information about its installation.

### Install VS Code Julia Extension

1. Depending on the device you are using, download the appropriate one version of VS Code from [page installations](https://code.visualstudio.com/download) in official site.

2. You can download `Julia extension` directly from [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=julialang.language-julia) _or_ download it manually from within VS Code by going to in extensions (extensions) and downloading the extension with the name Julia.

3. Now you can make a new file, save it ending with `.jl` and run it.

> At this point you should be able to run VS Code. If the extension does not automatically detect the Julia installation, follow the steps below. You need to manually set julia.executablePath to point to the executable Julia file that the extension should use.

### Adding julia.executablePath in VS Code

1. Copy the path of `julia.exe`.

2. Open VS Code follow: `File->Preferences->Settings` (or just by pressing `ctr + ,`) and look for `julia.executablePath` in search bar.
3. Paste the `julia.exe` path from step 1.
4. Close settings & restart VS code.

## Useful links

1. [How to install julia programming language on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-julia-programming-language-on-ubuntu-22-04)

2. [How to setup Jupyter & Python on Mac, Windows or Linux Tutorial](https://www.youtube.com/watch?v=9tPS-7TWjq0)

3. [Adding Julia to VS Code](https://www.julia-vscode.org/docs/stable/setup/)

At this point you are ready to write scripts.
But in order to equip yourself with the knowledge to write the brief
and beautiful code provided by Julia, it would be good to
[get started with Julia](http://localhost:3000/getting-started).
