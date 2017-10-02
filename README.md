<!-- # README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->

# Knight v Viking

![Preview](https://github.com/khaivubui/knight_v_viking/blob/master/docs/Web%201920%20%E2%80%93%201.png)

## Overview

Knight v Viking is a 2-player 2D real-time action platformer game. Each player controls a character (either a Knight or a Viking) using keyboard controls (◀️, ▶️, Jump, Attack).

The character throws a weapon upward in 45° angle when the Attack key is pressed. Touching the enemy weapon will cause a character to lose 20 health. Weapon has 0.3 restitution (elasticity) so it bounces around a few times and will disappear from the game when velocity reaches 0.

Each character spawns with 100 health. Game is over when either player reaches 0 health.


## Functionality & MVP

#### Basic

- [ ] Overlay that shows controls guide
- [ ] Characters can be moved horizontally using keyboard actions
- [ ] Characters can jump with realistic physics
- [ ] Characters can throw weapons with realistic physics
- [ ] Weapons have restitution/elasticity
- [ ] Static boundaries for the game that weapons can bounce off
- [ ] Weapons disappear 500ms after having 0 velocity
- [ ] Characters lose health upon touching the enemy weapon(s)

#### Bonus
- [ ] Rune that increases weapon elasticity
- [ ] Rune that allows for throwing 3 weapons at a time

## Technology

1. __Matter.js__ - Well developed javascript physics engine that allow for realistic physics
2. __Vanilla Javascript__ - Used to build game logic

## Implementation Timeline

#### Day 1 - Monday
- [ ] Rails server (only root route)
- [ ] Webpack
- [ ] Matter.js set up
- [ ] Static walls
- [ ] Background styling and wall styling

#### Day 2 - Tuesday
- [ ] Build character that can move horizontally and jump naturally
- [ ] Style character movement animation and jump movement animation
- [ ] Make sure that character can be reused (2 players)

#### Day 3 - Wednesday
- [ ] Add weapon throwing functionality
- [ ] Style weapon throwing functionality
- [ ] Add health bars and style health bar renders

#### Day 4 - Thursday
- [ ] Add health loss interaction when a character touches enemy weapon
- [ ] Add winning condition and add winning notification

#### Day 5 - Friday
- [ ] Debug
- [ ] Polish styling
