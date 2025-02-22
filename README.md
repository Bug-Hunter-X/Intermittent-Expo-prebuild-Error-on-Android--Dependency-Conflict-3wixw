# Expo Prebuild Error: Android Dependency Conflict

This repository demonstrates an uncommon bug encountered when using the Expo CLI's `expo prebuild` command within a managed workflow Android project. The issue involves intermittent build failures specifically related to dependency conflicts, manifesting only on particular machines.

## Problem Description

The `expo prebuild` command, intended to prepare the project for a native Android build, sometimes throws an error due to seemingly conflicting dependencies. This error is not consistently reproducible and appears to be related to the specific environment or the state of the Node.js modules cache. The error message itself might not be explicitly clear, often pointing towards issues within the Android build process.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run `expo prebuild --platform android`
4. Observe whether the command succeeds or fails. The success or failure is not consistent across all machines.

## Solution

The provided solution focuses on using a specific version of the `metro-resolver` and `metro-config` to ensure consistency in module resolution across different environments and machines.  Additionally, ensure that your project dependencies are compatible and updated to their latest versions.

## Additional Notes

This issue highlights the importance of carefully managing dependencies in Expo projects and paying close attention to potential variations in build environments. The provided solution offers a workaround for this specific problem, but a thorough investigation into root causes might involve deeper analysis of the Metro bundler and its interaction with native Android modules.