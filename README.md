# Role Sheet Coding Challenge

This is a React frontend coding challenge. You are given a set of data representing a Character Sheet. Your goal is to create components and interactions to display and manipulate the data of the given sheet.

## Overview

This repo is a fresh `create-react-app` installation setup with 1 view and an empty implementation of a Sheet Component that you are to flesh out.

You can see the data for the sheet located in `src/data.json`. It represents a sheet with 2 sections and 4 elements.

This challenge is setup to enable you to complete it within 2-4 hours. Regardless of how far you get, you are not required to spend more than 4 hours working on it. This challenge is focused more on architecture rather than design, so prioritize functionality first and how it looks second.

## Setup

- Install Node v12.14.0. If using NVM: `nvm install v12.14.0`.
- Install yarn: `npm install --global yarn`
- Clone this repo to your machine.
- Run `yarn install`.
- Run `yarn start` to start the server at [http://localhost:3000](http://localhost:3000).

## Requirements

- Flesh out a Sheet Component to display the given data located in `src/data.json`. You may use either Class Components or Functional Components. A starter component is given to you in `src/components/Sheet`. The data is already setup to be passed into your Sheet component via a `sheet` prop. Whichever component type you decide to use, make sure to uncomment its import in `src/App.js` on lines 7 or 8.
- Your code should handle displaying all parts of a Sheet: Sections, Elements, Inputs. [Click here for a diagram of the attributes of Sheet.](https://drive.google.com/file/d/1Tv2Ep3ARpz334Rf3YPf1tu29J89xgsT2/view?usp=sharing)
- Your code should be as reusable as possible.
- If the data were to change to add more Sections, Elements, or Inputs your code should be able to gracefully handle that.
- Your code should be able to gracefully handle new Element or Input types if they are added in the future.
- A sheet has two modes: View and Edit. You will need to add a way to toggle between these modes.
  - By default a sheet loads in View Mode. When in View Mode elements are locked and not able to be changed.
  - In Edit Mode, all inputs are unlocked and can be updated. Updating an input should update the state of the sheet. **You do NOT need to persist to the data file.**
  - [See below for how each Element acts in each mode](#sheet-modes).
- Clicking a `dice-pool` or `field-buff` when in view mode, should alert the person of their action.
- You may add any additional packages you would like.

### Additional Attribute Information

- Sheet Attributes
  - name: a non-nullable non-empty String
  - sections: an array of 0 or more Section
- Section Attributes
  - title: a non-nullable non-empty String
  - elements: an array of 0 or more Element
- Element Attributes
  - elementType: non-nullable Element Type
  - title: a non-nullable String, can be empty string
  - description: a non-nullable String, can be empty string
  - inputs: an array of 0 or more Input
- Input Attributes
  - inputType: non-nullable Input Type
  - defaultValue: non-nullable String or Number
  - value: nullable String or Number

### Sheet Modes

| Element Type | View Mode | Edit Mode |
| ------------ | --------- | --------- |
| `dice-pool` | A singular button. When clicked alerts the person which dice and how many they are rolling. | Two editable inputs, 1 representing the dice count, 1 representing the dice type. |
| `field` | Locked single line of text. | Editable single line of text. |
| `field-buff` | A locked single line of text and a button that when clicked alerts the person of the buff they selected. | An editable line of text and an editable line for the buff. |
| `note` | Locked multiline text. | Editable multiline text. |

### Element Types

| Name | Description |
| ---- | ----------- |
| `dice-pool` | A two input element. First input is the number of dice. Second input is to select the type of dice. |
| `field` | A single input element. Input is a single line of text. |
| `field-buff` | A two input element. First input is a single line of text. Second input is the number of the buff. |
| `note` | A single input element. Input is multiline text. |

### Input Types

| Name | Description |
| ---- | ----------- |
| `buff` | A number input. Must be an integer. |
| `dice-count` | A number input. Must be an integer >= 0. |
| `dice-type` | A select input. Only allows values of: `d6`, `d20`, `d100` |
| `field` | A text input. Only one line. |
| `note` | A text input. Allows multiple lines. |

## Submitting Your Solution

Create a zip of your final solution and email it to ian@playrole.com.
