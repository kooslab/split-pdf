# split-pdf

A simple PDF splitter utility that can split PDFs into individual pages or page ranges.

## Prerequisites

- Node.js installed on your system
- PDFtk installed (for Mac users, install via Homebrew: `brew install pdftk-java`)

## Installation

1. install pdftk
   note: it takes a while to install pdftk

```bash
brew install pdftk-java
```

2. have `.env` file in the root directory for pdf file path

```env
PDFTK_EXT=/opt/homebrew/bin/pdftk // make sure to use your own path
```

3. install dependencies

```bash
npm install
```

3. run the script

```bash
node index.js
```
