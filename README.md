# TS-Sprint

**TS-Sprint** is a TypeScript learning lab built around starship-system exercises. It starts with basic types and grows into modules, classes, utility types, generics, type guards, and small production-style patterns.

The goal is not only to finish exercises. The goal is to learn how TypeScript protects real projects from bad data, unclear contracts, and runtime mistakes.

## What you learn

- Primitive types and variable declaration
- Objects, tuples, and readonly data
- Unions, intersections, and discriminated unions
- Functions, callbacks, and type guards
- Interfaces and extension
- Generics and reusable helpers
- Utility types like `Pick`, `Partial`, `Readonly`, and `Record`
- Classes, modules, and small architecture boundaries
- Runtime validation habits

## Project map

### Basic types

- `fuel-levels.ts`
- `coordinates.ts`

### Objects and tuples

- `crew-data.ts`
- `sensor-readings.ts`
- `waypoints.ts`
- `hyperspace-jump.ts`
- `system-status.ts`

### Unions and intersections

- `warp-mode.ts`
- `shield-status.ts`
- `nav-command.ts`

### Functions and type guards

- `thruster-control.ts`
- `telemetry-callback.ts`
- `alien-encounter.ts`
- `system-check.ts`

### Interfaces and DOM

- `extend-pilot.ts`
- `alert-display.ts`
- `fuel-input.ts`

### Generics

- `cargo-inventory.ts`
- `generic-swap.ts`

### Utility types

- `ship-config.ts`
- `nav-data.ts`

### Classes and modules

- `starship-upgrade.ts`
- `modular-starship/`

## New upgraded layer: Mission Control Kit

This repo now includes a small production-style layer in `src/mission-control.ts`:

- Validates mission manifests
- Calculates risk score
- Produces launch readiness reports
- Demonstrates discriminated unions, utility types, and defensive functions

## Setup

```bash
npm install
```

## Run checks

```bash
npm test
```

## Run the Mission Control demo

```bash
npm run mission
```

## Learning rule

Every file should teach one TypeScript idea clearly. The upgraded files are intentionally small, readable, and review-friendly.
