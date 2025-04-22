import os
from pdf2image import convert_from_path
import argparse

def convert_pdf_to_jpg(pdf_path, output_dir='output', dpi=300):
    """
    Convert each page of a PDF to a JPEG image.
    
    Args:
        pdf_path (str): Path to the input PDF file
        output_dir (str): Directory to save the output JPEG files
        dpi (int): DPI (dots per inch) for the output images
    """
    # Create output directory if it doesn't exist
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # Get the base filename without extension
    base_filename = os.path.splitext(os.path.basename(pdf_path))[0]
    
    # Convert PDF to images
    print(f"Converting {pdf_path} to JPEG images...")
    images = convert_from_path(pdf_path, dpi=dpi)
    
    # Save each page as a JPEG
    for i, image in enumerate(images, start=1):
        output_path = os.path.join(output_dir, f"{base_filename}_page_{i}.jpg")
        image.save(output_path, 'JPEG')
        print(f"Saved page {i} as {output_path}")
    
    print(f"\nConversion complete! Images saved in '{output_dir}' directory.")

def main():
    parser = argparse.ArgumentParser(description='Convert PDF pages to JPEG images')
    parser.add_argument('pdf_path', help='Path to the input PDF file')
    parser.add_argument('--output-dir', default='output', help='Directory to save output JPEG files (default: output)')
    parser.add_argument('--dpi', type=int, default=300, help='DPI for output images (default: 300)')
    
    args = parser.parse_args()
    convert_pdf_to_jpg(args.pdf_path, args.output_dir, args.dpi)

if __name__ == '__main__':
    main() 