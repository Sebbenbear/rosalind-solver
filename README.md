# Rosalind-Solver

Pauline Kelly.

## Description

Rosalind-Solver is an application that solves bioinformatics problems that
are provided by [Project Rosalind](http://rosalind.info/problems/list-view/). This website has some highly interesting problems. I have studied biotechnology at university, so the domain of the problems are, for the most part, reasonably familiar to me. I would encourage anyone to give it a go, as you will learn more about algorithms, as well as biology!

## Components

There are a number of components that all need to fit together in order to create this application:

#### GUI

The GUI will present the user an option to upload a file to the web application, and the type of problem that it is solving. It will then solve the problem, and display the correct output.

##### Input Processing

This determines the logic for how to proceed with the problem, based on the format of the input file (this should set up to be read as a stream).

The input file should be parsed to determine what kind of problem it is. There are several different types of input:

- **Single String:** Just one long string, usually for a DNA sequence.

- **FASTA**: FASTA format is a text-based format for representing either nucleotide sequences or peptide sequences, in which nucleotides or amino acids are represented using single-letter codes. The format also allows for sequence names and comments to precede the sequences.

##### Output Processing

The result of the computation should be delivered to the user in a text field, so that it can be easily copied and entered into the Rosalind site by the user.

The pseudocode for the algorithm should also be included.

One extension to this application would be the ability to compute it in different languages, then return the end result to the web application, as well as the specific solution.

### To include in this document

These are some other things that README.md is recommended to have.

- Legal stuff - copyright and licensing information (or "Read LICENSE")
instruction to grab the documentation.
- instructions to install, configure, and to run the programs
- instruction to grab the latest code and detailed instructions to build it (or quick overview and "Read INSTALL")
- list of authors or "Read AUTHORS"
- instructions to submit bugs, feature requests, submit patches, - join mailing list, get announcements, or join the user or dev community in other forms
other contact info (email address, website, company name, address, etc)
