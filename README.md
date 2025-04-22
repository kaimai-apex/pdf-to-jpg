# PDF to JPEG Converter

This program converts each page of a PDF file into individual JPEG images.

## Prerequisites

- Python 3.6 or higher
- poppler-utils (required by pdf2image)

### Installing poppler-utils

- **macOS**: `brew install poppler`
- **Ubuntu/Debian**: `sudo apt-get install poppler-utils`
- **Windows**: Download and install from [poppler releases](https://github.com/oschwartz10612/poppler-windows/releases/)

## Installation

1. Install the required Python packages:
```bash
pip install -r requirements.txt
```

## Usage

Basic usage:
```bash
python pdf_to_jpg.py path/to/your/file.pdf
```

Advanced options:
```bash
python pdf_to_jpg.py path/to/your/file.pdf --output-dir custom_output --dpi 600
```

### Arguments

- `pdf_path`: Path to the input PDF file (required)
- `--output-dir`: Directory to save output JPEG files (default: 'output')
- `--dpi`: DPI for output images (default: 300)

## Output

The program will create a directory (default: 'output') containing JPEG images of each page from the PDF. The images will be named in the format: `{pdf_filename}_page_{page_number}.jpg` 