
✅ Workflow: HTML Validation using tidy (No Node.js)
name: HTML CI Check (No Node)
on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  html-check:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Install tidy
        run: sudo apt-get update && sudo apt-get install -y tidy

      - name: Run HTML validation
        run: tidy -e index.html
