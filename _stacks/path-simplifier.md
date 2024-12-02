---
layout: visualizer
title: Simplify Absolute UNIX Path
inputs:
  - type: string
    label: Please enter the UNIX path
    regex: ^((?!\\).)*$
    default: /home/user//Documents/../Pictures
---

#### Problem:

You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.

The Unix-style file system has following rules:

- A single period '.' represents the current directory.
- A double period '..' represents the previous/parent directory.
- Multiple consecutive slashes such as '//' and '///' are treated as a single slash '/'.
- Any sequence of periods that does not match the rules above should be treated as a valid directory or file name. For example, '...' and '....' are valid directory or file names.

The simplified canonical path should follow these rules:

- The path must start with a single slash '/'.
- Directories within the path must be separated by exactly one slash '/'.
- The path must not end with a slash '/', unless it is the root directory.
- The path must not have any single or double periods ('.' and '..') used to denote current or parent directories.

Example: 

**Input Path:** '/home/'

**Output (Simplified Path):** '/home'

**Input Path:** '/home/user//Documents/../Pictures'

**Output (Simplified Path):** '/home/user/Pictures'

**Input Path:** '/.../a/../b/c/../d/./'

**Output (Simplified Path):** '/.../b/d'

#### Algorithm:

To solve this, we need to split the string at each forward slash ('/') and process each path segment individually. If we encounter '.' or '..', we skip the corresponding path segments.

**Steps:**

1. Split the string at each forward slash ('/') and push each segment onto the stack.
2. When processing the segments, if '.' is encountered, skip it. If '..' is encountered, pop the top element from the stack to move one level up in the path.
3. After processing all segments, reconstruct the path by popping from the stack and joining the valid segments.

#### Solution & Visualize:

The animation/visualization below demonstrates how the algorithm to reverse a string works. Feel free to experiment by changing the input strings.
