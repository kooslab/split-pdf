const { splitPDFFile } = require("./split");

// Example usage:
// Split PDF into specific pages: [1, 3, 5] will create separate PDFs for pages 1, 3, and 5
// Split PDF into ranges: ['1-3', '4-6'] will create PDFs with pages 1-3 and 4-6
const exampleUsage = async () => {
  try {
    // Split into individual pages
    // await splitPDFFile(
    //   "/Users/johnnykoo/Downloads/original.pdf",
    //   "/Users/johnnykoo/Downloads",
    //   [1, 2, 3],
    // );

    // Split into ranges
    await splitPDFFile(
      "/Users/johnnykoo/Downloads/original.pdf",
      "/Users/johnnykoo/Downloads",
      ["1-3", "4", "5"],
    );
  } catch (error) {
    console.error("Error in example usage:", error);
  }
};

exampleUsage();
