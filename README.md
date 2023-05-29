# Checklist App Client

## Description

A simple React.js + Node.js web app for managing and using quick checklists. This is the frontend client repo, for the backend server, see (link to be added later).

## Features

- Basic React and Node env

### WIP

- User interface: TabNav
- User interface: Buttons

### TODO

- User interface: Search bar
- User interface: Accordion checklist
- User interface: Login modal
- User interface: E-mail modal
- User interface: Settings modal
- User interface: New file modal
- E-mail (GMail) support
- Autosave to JSON
- User settings
- User accounts (access to past autosaves)
- KPI monitoring
- User interface: Color scheme, icons, dark/light mode
- User interface (responsive)

## Usecase

### Manual verification of documents

The user needs to ensure compliance of a large volume of documents with a complicated and non-intuitive set of rules in a timely fashion.

The App:
- ensures that all rules are remembered and checked against each document.
- allows the user to quickly note which rules were violated and how.
- automatically composes a return e-mail, including all violations and comments. If none, the message confirms the document's acceptance.
- saves the result for each document, allowing for a quick follow-up.
- allows subsequent versions of a document to be cross-referenced against past submissions.
- allows monitoring of users *Key Performance Indicators*.

### Call center

The user is required to follow a script when contacting live customers, while simultaneously writing down their responses.

The App:
- helps the user to follow the required script.
- allows the user to quickly note customers responses.
- saves the users notes and timestamps for follow-up and QA purposes.
- allows monitoring of users *Key Performance Indicators*.

## Changelog

### 2023.04.29 - v0.1.0

- Project started.